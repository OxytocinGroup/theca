import Link from "next/link";
import OxytocinLogo from "./oxytocinlogo";

const Footer = () => {
  return (
    <footer className="flex w-full justify-between text-text-secondary">
      <Link href={"https://t.me/oxytocingroup"}>
        <OxytocinLogo
          className={
            "fill-text-secondary hover:fill-text-primary transition-all "
          }
        />
      </Link>
      <p>Powered by NextJS</p>
    </footer>
  );
};

export default Footer;
