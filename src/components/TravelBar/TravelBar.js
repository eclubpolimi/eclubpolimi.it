import {
  faCalendarAlt,
  faMapMarkedAlt,
  faPeopleGroup,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";

const TravelBar = ({ info, registerLink, className = "" }) => {
  const liClass = `flex md:flex-col md:px-10 md:gap-1 items-center
  text-slate-800 font-medium justify-between last:justify-center md:justify-center
  border-solid `;
  const borderClass = `border-b-2 md:border-b-0 md:border-r-2
  border-slate-200 `;

  return (
    <div className={className}>
      <ul
        className="grid grid-rows-5 md:grid-rows-1 content-evenly
      md:grid-cols-5 place-content-stretch gap-2 md:gap-0 md:justify-center px-8 md:pl-4 py-4
      bg-white rounded-xl border-solid border-[1px] border-slate-200 drop-shadow-lg"
      >
        <li className={liClass + borderClass}>
          <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
          <span>{info.place}</span>
        </li>
        <li className={liClass + borderClass}>
          <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
          <span>{info.date}</span>
        </li>
        <li className={liClass + borderClass}>
          <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
          <span>{info.peoples}</span>
        </li>
        <li className={liClass}>
          <FontAwesomeIcon icon={faMoneyBillAlt}></FontAwesomeIcon>
          <p className="whitespace-nowrap">
            <span>{info.price}</span>
            {info.priceTerms && <span className="text-slate-500">*</span>}
          </p>
        </li>
        <li className={liClass}>
          <Button to={registerLink}>Register</Button>
        </li>
      </ul>
    </div>
  );
};

export default TravelBar;
