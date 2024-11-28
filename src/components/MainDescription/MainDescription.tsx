import Image from 'next/image';

type MainDescriptionProps = {
  image: string;
  children: string;
};

const MainDescription = ({ image, children }: MainDescriptionProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-16">
      <div className="w-full sm:w-3/4 lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
        <Image src={image} alt="main description logo" />
      </div>
      <div className="lg:w-1/2 text-justify">{children}</div>
    </div>
  );
};

export default MainDescription;
