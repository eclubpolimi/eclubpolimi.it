import Image from 'next/image';
import SiteData from 'Data';
import Description from 'components/Description';
import Sponsors from 'components/Sponsors';
import Slogan from 'components/Slogan';

const Network = () => {
  return (
    <div>
      {/* Hero Image Fix */}
      <div className="relative w-full h-[350px] flex items-center justify-center">
        <Image
          src={SiteData.NetworkHeroBackground}
          layout="fill"
          objectFit="cover"
          alt="Network Background"
          className="brightness-75"
        />
        <Image
          src={SiteData.NetworkHeroImage}
          width={200} // Adjust as needed
          height={100}
          alt="Network Logo"
          className="absolute"
        />
      </div>

      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description title="About our network">
          <p className="text-ec_text dark:text-ec_text_darkmode">
            The Entrepreneurship Club Network is a community of thinkers and
            doers motivated by the same passion for innovation and disruption.
            Our network of clubs aims at spreading the entrepreneurial spirit
            and supporting students in their entrepreneurial journey by
            connecting and exchanging skills and thoughts. We bring together
            future and established entrepreneurs who strive to make an impact.
            Our work focuses on providing our ecosystem with opportunities for
            connection and ideas contamination. In doing so, we strongly believe
            that expanding and nurturing our network is key to the well-being of
            our mission.
          </p>
        </Description>
      </div>

      <Slogan slogan={SiteData.NetworkSlogan} />

      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description title="Entrepreneurship Clubs in Italy">
          <p className="text-ec_text dark:text-ec_text_darkmode">
            The first Entrepreneurship Club was founded in 2011 in Bocconi
            University in Milan. The core values (Learn, Network, Build)
            remained present ever since and are everyday refined by our
            experiences. Throughout the years, E-Club Bocconi was able to
            establish strong connections with similar entities around Italy and
            Europe. This international culture characterized the E-Club
            community from day one and mirrors its ambition to expand beyond
            Italian borders. The network was born in 2020 with the establishment
            of the Entrepreneurship Club Polimi at Politecnico di Milano. This
            important step will allow the community to grow further. Thanks to
            motivated actors who share our vision and embrace our values, we are
            helping the spread of the entrepreneurial spirit.
          </p>
        </Description>
      </div>
      <div className="w-full h-2 bg-ec_blue dark:bg-ec_blue_darkmode my-6"></div>
      <div className="bg-ec_background_light dark:bg-ec_background_darkmode">
        <Sponsors
          className="max-w-screen-lg lg:mx-auto px-5 lg:px-0 py-16"
          logos={SiteData.NetworkMembers.map((logo) => ({
            ...logo,
            darkSrc: logo.darkSrc || logo.src, // Ensuring darkSrc is always available
          }))}
          title="Network"
        />
      </div>
      <div className="w-full h-2 bg-ec_blue dark:bg-ec_blue_darkmode my-6"></div>
    </div>
  );
};

export default Network;
