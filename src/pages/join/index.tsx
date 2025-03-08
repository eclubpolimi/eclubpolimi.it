import Hero from 'components/Hero';
import JoinUsCard from 'components/JoinUsCard';
import SiteData from 'Data';
import { JOIN_QUERY } from 'data/queries';
import client from 'utils/apollo_client';

interface JoinProps {
  joinLinks: {
    explorerJoinLink: string;
    driverJoinLink: string;
  };
}

export const getServerSideProps = async (): Promise<{ props: JoinProps }> => {
  let joinLinks = {
    explorerJoinLink: 'https://forms.gle/CUsujfatS28vioox9', // Default
    driverJoinLink: 'https://forms.gle/NWyuKPKhxDtEVYAA6', // Default
  };

  try {
    const { data } = await client.query({
      query: JOIN_QUERY,
    });

    const joinData = data?.joinCollection?.items[0];

    if (joinData) {
      joinLinks.explorerJoinLink = joinData.explorerJoinLink || joinLinks.explorerJoinLink;
      joinLinks.driverJoinLink = joinData.driverJoinLink || joinLinks.driverJoinLink;
    }
  } catch (error) {
    console.error("Error fetching join links from Contentful:", error);
  }

  return {
    props: {
      joinLinks,
    },
  };
};

const Join = ({ joinLinks }: JoinProps) => {
  return (
    <div>
      <Hero
        backgroundImage={SiteData.HomepageHeroBackground}
        height="200px"
        darkness={0.5}
        contentType="text"
        text="Join us!"
      />
      <div className="bg-gray-100 flex flex-col justify-center items-center py-8 gap-8 sm:flex-row">
        <JoinUsCard
          role="Explorer"
          height="340px"
          width="300px"
          advantages={SiteData.explorerAdvantages}
          to={joinLinks.explorerJoinLink} // Use dynamic Contentful link
        />

        <JoinUsCard
          role="Driver"
          height="340px"
          width="300px"
          advantages={SiteData.driverAdvantages}
          to={joinLinks.driverJoinLink} // Use dynamic Contentful link
        />
      </div>
    </div>
  );
};

export default Join;
