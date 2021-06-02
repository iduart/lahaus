import { HamburgerMenuIcon, Logo } from "./icons";

const Navbar = () => {
  return (
    <header className="flex items-center border-b px-4 md:px-16 h-16">
      <section className="flex items-center md:hidden">
        <div className="relative">
          <div className="absolute rounded-full w-3 h-3 bg-brand -right-1 -top-2" />
          <HamburgerMenuIcon className="cursor-pointer" />
        </div>
        <Logo className="ml-3 cursor-pointer" />
      </section>
    </header>
  );
};

export default Navbar;
