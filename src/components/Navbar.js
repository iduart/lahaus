import { HamburgerMenuIcon, Logo, LogoMd, CaretDownIcon, NotificationIcon } from "../icons";

const Navbar = () => {
  return (
    <header className="flex items-center border-b px-4 md:px-16 h-16">
      <section className="flex items-center md:hidden">
        <div className="relative">
          <NotificationIcon className="-right-1 -top-1" />
          <HamburgerMenuIcon className="cursor-pointer" />
        </div>
        <Logo className="ml-3 cursor-pointer" />
      </section>
      <section className="w-full justify-between items-center hidden md:flex">
        <LogoMd className="cursor-pointer" />
        <nav>
          <ul className="flex font-light">
            <li>
              <a href="/">Cundinamarca</a>
            </li>
            <li className="mx-10">
              <a href="/">Antioquia</a>
            </li>
            <li className="mr-12">
              <a href="/">Recursos</a>
            </li>
            <li className="flex items-center font-medium">
              <a href="/">Mi Perfil</a>
              <CaretDownIcon className="ml-1" />
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
