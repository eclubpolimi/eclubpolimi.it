type ParagraphTitleProps = {
  text: string;
};

const ParagraphTitle = ({ text }: ParagraphTitleProps) => {
  return (
    <div className="bg-ec_blue dark:bg-ec_blue_darkmode py-4">
      <p className="text-lg font-bold text-white dark:text-ec_text_darkmode text-center py-2 m-0">
        {text}
      </p>
    </div>
  );
};

export default ParagraphTitle;
