import Button from "components/Button";

type EventBannerProps = {
  bannerData: {
    imgSource: string;
    eventName: string;
    eventType: string;
    affiliateLink: string;
    eventInfo: string;
    registerLink: string;
  };
  className: string;
  disabled: boolean;
};

const EventBanner = ({
  bannerData,
  className = "",
  disabled,
}: EventBannerProps) => {
  return (
    <div
      className={`${className} py-12 px-5 md:px-20 flex flex-col-reverse md:flex-row 
      text-center md:text-left items-center md:gap-8`}
    >
      <div className="w-1/2 md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          className="md:w-1/2"
          src={bannerData.imgSource}
          alt={bannerData.eventName}
        />
      </div>
      <div className="w-full md:w-1/2">
        <span className="uppercase font-bold text-slate-500">
          Next up by E-Club
        </span>
        <h1 className="mt-2 text-slate-800 font-extrabold text-4xl leading-tight ">
          {bannerData.eventType}:{" "}
          <a
            className="underline underline-offset-4 text-slate-600 hover:text-slate-500"
            href={bannerData.affiliateLink}
          >
            {bannerData.eventName}
          </a>
        </h1>
        <span className="mt-3 text-slate-600 font-semibold text-xl block">
          {bannerData.eventInfo}
        </span>
        <Button
          to={bannerData.registerLink}
          theme="orange"
          className="mt-8 align-middle"
          disabled={disabled}
        >
          Click here to learn more
        </Button>
      </div>
    </div>
  );
};

export default EventBanner;
