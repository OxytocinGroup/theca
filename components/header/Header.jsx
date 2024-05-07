import Clock from "@/components/header/Clock";
import LoggedAs from "@/components/header/LoggedAs";
import ThecaLogo from "./ThecaLogo";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center">
      <ThecaLogo />
      <Clock className={"absolute left-0 right-0 "} />
      <LoggedAs />
    </header>
  );
};

export default Header;
