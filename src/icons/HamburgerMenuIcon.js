const HamburgerMenuIcon = ({ className }) => (
  <div className={`flex flex-col ${className}`}>
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 25H2v2h20v-2zM30 15H2v2h28v-2zM30 5H2v2h28V5z"
        fill="#5B6866"
      />
    </svg>
  </div>
);

export default HamburgerMenuIcon;
