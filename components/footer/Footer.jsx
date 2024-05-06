import Link from "next/link";
import OxytocinLogo from "@/components/footer/OxytocinLogo";

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
      <p className="text-sm">Powered by NextJS</p>
    </footer>
  );
};

export default Footer;
