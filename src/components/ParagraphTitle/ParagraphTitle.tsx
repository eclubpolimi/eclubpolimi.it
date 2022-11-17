type ParagraphTitleProps = {
  text: string;
};

const ParagraphTitle = ({ text }: ParagraphTitleProps) => {
  //text è il parametro per inserire il testo interno
  return (
    <div className="bg-ec_blue py-4">
      <p className="text-lg font-bold text-white text-center py-2 m-0">
        {text}
      </p>
    </div>
  );
};

export default ParagraphTitle;
