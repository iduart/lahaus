import { NotificationIcon } from "../icons";

const CaretDownIcon = ({ className }) => {
  return (
    <div className="relative">
      <NotificationIcon className="-right-0.5 -top-0.5" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-6 ${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default CaretDownIcon;
