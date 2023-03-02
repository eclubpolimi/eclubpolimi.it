import Image from "next/image";

import Description from "components/Description";
import Timeline from "components/Timeline";
import TravelBar from "components/TravelBar";

import TravelPlaceholder from "assets/travelMainBackground.webp";

import { LATEST_TRIP_QUERY } from "data/queries";
import { LatestTripDataQuery } from "generated/cms/types";
import client from "utils/apollo_client";
import { formatDate, formatDateRange, formatDateTime } from "utils/formatting";

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
    if (!tripData) return false;

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

  return (
    <div>
      <div className="relative">
        <Image
          className="md:w-full md:absolute top-1/2 right-0 md:-translate-y-1/2 -z-10"
          src={tripData?.image?.url || TravelPlaceholder}
          alt={tripData?.image?.title || "Travel preview"}
        />
        <div className="md:backdrop-blur-xl bg-white/30">
          <div className="max-w-screen-lg lg:mx-auto py-10 md:py-28 px-5 sm:px-8 flex flex-col text-center md:text-left items-center">
            <h1 className="md:mt-8 text-slate-800 font-extrabold text-4xl leading-tight header-squares-decoration w-fit">
              E-Club goes to {tripData?.destinationCountry}
            </h1>
            <span className="mt-3 text-slate-700 font-semibold text-xl block w-fit">
              {tripData?.slogan}
            </span>
            <TravelBar
              className="mt-8 md:mt-12 w-full"
              info={{
                place: tripData?.destinationCities?.[0] || "",
                date:
                  formatDateRange(tripData?.departDate, tripData?.returnDate) ||
                  "",
                peoples: tripData?.availableSpots || 0,
                price: `€${tripData?.price || 0}`,
                priceTerms: tripData?.isPolimiSponsored || false,
              }}
              registerLink={tripData?.registerLink || ""}
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <Description
          className="max-w-screen-lg lg:mx-auto w-4/5 mx-auto font-medium text-slate-700"
          title={`Why should I go to ${tripData?.destinationCountry}?`}
        >
          <p className="text-justify">
            {tripData?.description?.split("\n").map((paragraph) => {
              return (
                <>
                  {paragraph}
                  <br />
                </>
              );
            })}
            <br />
            <strong className="block -mx-4 p-4 bg-white rounded-xl border-solid border-[1px] border-slate-200">
              Registrations open{" "}
              <span className="text-ec_orange">
                {formatDateTime(tripData?.registrationsOpenDate)}
              </span>
              . Only {tripData?.availableSpots || 0} tickets are available and
              they'll run out quickly. Save the date and train your fingers in
              the meantime!
            </strong>
            <br />
            {tripData?.isPolimiSponsored && (
              // blink when reached through anchor
              <span id="priceTerms" className="text-sm text-slate-500">
                * An initiative sponsored by Politecnico di Milano. You'll have
                to pay €
                {(
                  parseFloat(tripData?.price || "0") +
                  parseFloat(tripData?.refundAmount || "0")
                )
                  .toFixed(2)
                  .replace(".", ",")}{" "}
                upfront, but we will refund €{tripData?.refundAmount} after the
                trip. Price includes: {tripData?.servicesIncluded}.
              </span>
            )}
          </p>
        </Description>
      </div>
      <div className="bg-white">
        <Timeline
          theme="split"
          data={
            tripData?.timelineCollection?.items.map((item) => ({
              date: formatDate(item?.date) || "",
              title: item?.title || "",
              children:
                item?.description?.split("\n").map((paragraph) => {
                  return (
                    <>
                      {paragraph}
                      <br />
                    </>
                  );
                }) || "",
            })) || []
          }
          className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0 font-medium text-slate-700"
        />
      </div>
    </div>
  );
};

export default Travel;
