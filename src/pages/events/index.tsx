import Carousel from 'components/Carousel';
import Timeline from 'components/Timeline';

import SiteData from 'Data';
import { EventQuery } from 'generated/cms/types';
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

  return (
    <div className="bg-ec_background dark:bg-ec_background_darkmode text-ec_text dark:text-ec_text_darkmode">
      <div className="relative w-full h-[500px] max-h-[500px] overflow-hidden">
        <Carousel sliderData={SiteData.eventsCarouselImages} autoplay={5000} />
      </div>

      <div className="lg:my-20 my-12 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Timeline
          data={
            eventData?.map((event) => {
              return {
                title: event?.title || '',
                date: formatDate(event?.date) || '',
                body: event?.description || '',
              };
            }) || []
          }
          theme="centered"
        />
      </div>

      {/* Ensure no extra space at the bottom */}
      <div className="h-0 m-0 p-0"></div>
    </div>
  );
};

export default Events;
