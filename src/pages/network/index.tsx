import Image from 'next/image';
import SiteData from '@/Data';
import Description from 'components/Description/Description';
import Sponsors from 'components/Sponsors/Sponsors';
import Slogan from 'components/Slogan/Slogan';
import { useImageAssets, useNetworkMembers } from 'hooks/useImageAssets';

const Network = () => {
  const { getImageUrl } = useImageAssets();
  const networkMembers = useNetworkMembers();

  return (
    <div>
      {/* Hero Image Fix */}
      <div className="relative w-full h-[350px] flex items-center justify-center">
        <Image
          src={getImageUrl('network_hero_background', false) || ''}
          fill
          style={{ objectFit: 'cover' }}
          alt="Network Background"
          className="brightness-75"
        />
        {/* Dark Mode Overlay Only */}
        <div className="absolute inset-0 bg-black dark:opacity-50 opacity-0 transition-opacity duration-300"></div>
      </div>

      {/* Network Logo positioned below hero image */}
      <div className="flex justify-center py-8">
        {/* Light Mode Logo */}
        <Image
          src={getImageUrl('network_hero_logo', false) || ''}
          width={250}
          height={125}
          alt="Network Logo"
          className="block dark:hidden"
        />
        {/* Dark Mode Logo */}
        <Image
          src={getImageUrl('network_hero_logo', true) || ''}
          width={250}
          height={125}
          alt="Network Logo Dark Mode"
          className="hidden dark:block"
        />
      </div>

      {/* Orange bordered container for sponsors - matching homepage style */}
      <div className="flex justify-center px-5 lg:px-0 py-4">
        <div className="border border-solid border-ec_orange dark:border-ec_orange_darkmode rounded-xl p-6 w-full max-w-6xl">
          <Sponsors className="flex-1" title=" " logos={networkMembers} />
        </div>
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
    </div>
  );
};

export default Network;
