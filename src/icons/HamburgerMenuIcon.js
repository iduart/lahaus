const HamburgerMenuIcon = ({ className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <svg
        width="28"
        height="2"
        viewBox="0 0 28 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M28 0H0V2H28V0Z" fill="#5B6866" />
      </svg>
      <svg
        width="28"
        height="2"
        viewBox="0 0 28 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-2"
      >
        <path d="M20 0H0V2H20V0Z" fill="#5B6866" />
        <path d="M28 0H0V2H28V0Z" fill="#5B6866" />
        <path d="M28 0H0V2H28V0Z" fill="#5B6866" />
      </svg>
      <svg
        width="20"
        height="2"
        viewBox="0 0 20 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 0H0V2H20V0Z" fill="#5B6866" />
      </svg>
    </div>
  );
};

export default HamburgerMenuIcon;
