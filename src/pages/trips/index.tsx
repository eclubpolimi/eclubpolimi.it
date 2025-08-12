import Image from 'next/image';

import Description from 'components/Description/Description';
import Timeline from 'components/Timeline/Timeline';
import TravelBar from 'components/TravelBar/TravelBar';
import { useImageAsset } from 'hooks/useImageAssets';

import { LATEST_TRIP_QUERY } from 'data/queries';
import { LatestTripDataQuery } from 'types/cms';
import client from 'utils/apollo_client';
import { formatDate, formatDateRange, formatDateTime } from 'utils/formatting';

interface TravelProps {
  data: LatestTripDataQuery;
  isRegistrationOpen: boolean;
}

export const getServerSideProps = async (): Promise<{ props: TravelProps }> => {
  const { data } = await client.query<LatestTripDataQuery>({
    query: LATEST_TRIP_QUERY,
  });

  // Determine if registrations are open on the server
  const isRegistrationOpen = (() => {
    const tripData = data?.tripCollection?.items[0];
    if (!tripData || !tripData.registrationsOpenDate) return false;

    const now = new Date();
    const open = new Date(tripData.registrationsOpenDate);
    return open <= now;
  })();

  return {
    props: {
      data: data,
      isRegistrationOpen: isRegistrationOpen,
    },
  };
};

const Travel = ({ data }: TravelProps) => {
  const tripData = data?.tripCollection?.items[0];
  const travelBackgroundFallback = useImageAsset('trips_hero_background_fallback');

  return (
    <div>
      {/* HERO IMAGE FIX */}
      <div className="relative w-full h-[350px]">
        <Image
          className="object-cover"
          src={tripData?.image?.url || travelBackgroundFallback?.url || ''}
          fill
          style={{ objectFit: 'cover' }}
          alt={tripData?.image?.title || 'Travel preview'}
        />
        <div className="absolute inset-0 bg-ec_background/30 dark:bg-ec_background_darkmode/40 backdrop-blur-xl">
          <div className="max-w-screen-lg lg:mx-auto py-10 md:py-28 px-5 sm:px-8 flex flex-col text-center md:text-left items-center">
            <h1 className="md:mt-8 text-ec_text dark:text-ec_text_darkmode font-extrabold text-4xl leading-tight header-squares-decoration w-fit">
              E-Club goes to {tripData?.destinationCountry}
            </h1>
            <span className="mt-3 text-ec_text_secondary dark:text-ec_text_secondary_darkmode font-semibold text-xl block w-fit">
              {tripData?.slogan}
            </span>
            <TravelBar
              className="mt-8 md:mt-12 w-full"
              info={{
                place: tripData?.destinationCities?.[0] || '',
                date:
                  formatDateRange(tripData?.departDate || '', tripData?.returnDate || '') ||
                  '',
                peoples: tripData?.availableSpots || 0,
                price: `€${tripData?.price || 0}`,
                priceTerms: tripData?.isPolimiSponsored || false,
              }}
              registerLink={tripData?.registerLink || ''}
            />
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="bg-ec_background dark:bg-ec_background_darkmode">
        <Description
          className="max-w-screen-lg lg:mx-auto w-4/5 mx-auto font-medium text-ec_text dark:text-ec_text_darkmode"
          title={`Why should I go to ${tripData?.destinationCountry}?`}
        >
          <p className="text-justify">
            {tripData?.description?.split('\n').map((paragraph: string, idx: number) => (
              <span key={idx}>
                {paragraph}
                <br />
              </span>
            ))}
            <br />
            <strong className="block -mx-4 p-4 bg-ec_background_light dark:bg-ec_background_darkmode_light rounded-xl border border-ec_border dark:border-ec_border_darkmode">
              Registrations open{' '}
              <span className="text-ec_orange dark:text-ec_orange_darkmode">
                {formatDateTime(tripData?.registrationsOpenDate || '')}
              </span>
              . Only {tripData?.availableSpots || 0} tickets are available and
              they'll run out quickly. Save the date and train your fingers in
              the meantime!
            </strong>
            <br />
            {tripData?.isPolimiSponsored && (
              <span
                id="priceTerms"
                className="text-sm text-ec_text_secondary dark:text-ec_text_secondary_darkmode"
              >
                * An initiative sponsored by Politecnico di Milano. You'll have
                to pay €
                {(
                  parseFloat(tripData?.price || '0') +
                  parseFloat(tripData?.refundAmount || '0')
                )
                  .toFixed(2)
                  .replace('.', ',')}{' '}
                upfront, but we will refund €{tripData?.refundAmount} after the
                trip. Price includes: {tripData?.servicesIncluded}.
              </span>
            )}
          </p>
        </Description>
      </div>

      {/* TIMELINE */}
      <div className="bg-ec_background_light dark:bg-ec_background_darkmode_light">
        <Timeline
          theme="split"
          data={
            tripData?.timelineCollection?.items.map((item: any) => ({
              date: formatDate(item?.date || '') || '',
              title: item?.title || '',
              children:
                item?.description?.split('\n').map((paragraph: string, idx: number) => (
                  <span key={idx}>
                    {paragraph}
                    <br />
                  </span>
                )) || '',
            })) || []
          }
          className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0 font-medium text-ec_text dark:text-ec_text_darkmode"
        />
      </div>
      <div className="w-full h-2 bg-ec_blue dark:bg-ec_blue_darkmode my-6"></div>
    </div>
  );
};

export default Travel;
