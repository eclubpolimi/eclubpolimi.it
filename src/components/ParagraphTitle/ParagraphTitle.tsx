import "./ParagraphTitle.css";

type ParagraphTitleProps = {
  text: string;
};

const ParagraphTitle = ({ text }: ParagraphTitleProps) => {
  //text è il parametro per inserire il testo interno
  return (
    <div className="paragraph-title-bar py-4">
      <p className="paragraph-title-text">{text}</p>
    </div>
  );
};

export default ParagraphTitle;
