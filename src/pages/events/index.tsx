import Carousel from 'components/Carousel/Carousel';
import Timeline from 'components/Timeline/Timeline';

import { useCarouselImages } from 'hooks/useImageAssets';
import { EventQuery } from 'types/cms';
import client from 'utils/apollo_client';
import { formatDate } from 'utils/formatting';
import { LATEST_EVENTS_QUERY } from 'data/queries';

interface EventProps {
  data: EventQuery;
}

export const getServerSideProps = async (): Promise<{
  props: EventProps;
}> => {
  const { data } = await client.query<EventQuery>({
    query: LATEST_EVENTS_QUERY,
  });

  return {
    props: {
      data: data,
    },
  };
};

const Events = ({ data }: EventProps) => {
  const eventData = data?.eventCollection?.items;
  const carouselImages = useCarouselImages();

  return (
    <div className="bg-ec_background dark:bg-ec_background_darkmode text-ec_text dark:text-ec_text_darkmode transition-colors duration-300">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '500px' }}
      >
        <Carousel
          sliderData={carouselImages.images}
          autoplay={5000}
          height={500}
          verticalPosition={60}
        />
        {/* Dark Mode Overlay Only */}
        <div className="absolute inset-0 bg-black dark:opacity-30 opacity-0 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      <div className="lg:my-10 my-6 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Timeline
          data={[
            ...(eventData?.map(
              (
                event: {
                  date?: string | null;
                  title?: string | null;
                  description?: string | null;
                  location?: string | null;
                  registrationLink?: string | null;
                } | null,
              ) => {
                return {
                  title: event?.title || '',
                  date: formatDate(event?.date || '') || '',
                  body: event?.description || '',
                };
              },
            ) || []),
            // Add coming soon event at the end
            {
              title: 'Coming Soon...',
              date: '',
              body: 'Stay tuned for more of our events!',
            },
          ]}
          theme="centered"
        />
      </div>

      {/* Ensure no extra space at the bottom */}
      <div className="h-0 m-0 p-0"></div>
    </div>
  );
};

export default Events;
