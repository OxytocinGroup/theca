import Clock from "@/components/header/Clock";
import Search from "@/components/header/SearchInput";

const Header = () => {
  return (
    <header className="flex flex-col gap-4 items-center">
      <Clock />;
      <Search />;
    </header>
  );
};

export default Header;
