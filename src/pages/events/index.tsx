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
    <div>
      <Carousel sliderData={SiteData.eventsCarouselImages} autoplay={5000} />
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
    </div>
  );
};

export default Events;
