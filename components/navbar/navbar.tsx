import Container from "../container";
import Logo from "./logo";
import UserMenu from "./userMenu";

type User = {
  email: string;
  name: string;
  image?: string;
};

interface UserProps {
  currentUser: User | null;
}

const Navbar: React.FC<UserProps> = ({ currentUser }) => {
  return (
    <>
      <div className="w-full bg-white shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <UserMenu currentUser={currentUser} />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
