import Hero from "components/Hero";
import JoinUsCard from "components/JoinUsCard";

import SiteData from "Data";
import useServerSideAPI from "hooks/useServerSideAPI";
import { getJoinLinks } from "backend/join";

type JoinProps = {
  explorerLink: string;
  driverLink: string;
};

export const getServerSideProps = async () => {
  return await useServerSideAPI(getJoinLinks);
};

const Join = ({ explorerLink, driverLink }: JoinProps) => {
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
          to={explorerLink}
        />

        <JoinUsCard
          role="Driver"
          height="340px"
          width="300px"
          advantages={SiteData.driverAdvantages}
          to={driverLink}
        />
      </div>
    </div>
  );
};

export default Join;
