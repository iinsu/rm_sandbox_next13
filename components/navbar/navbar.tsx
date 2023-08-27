import Container from "../container";
import Logo from "./logo";
import UserMenu from "./userMenu";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <UserMenu />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
