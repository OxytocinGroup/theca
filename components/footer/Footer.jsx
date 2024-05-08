import Link from "next/link";
import OxytocinLogo from "@/components/footer/OxytocinLogo";
import NextJS from "@/components/icons/NextJS";

const Footer = () => {
  return (
    <footer className="flex w-full justify-between items-center text-text-secondary">
      <Link href={"https://t.me/oxytocingroup"}>
        <OxytocinLogo
          className={
            "fill-text-secondary hover:fill-text-primary transition-all "
          }
        />
      </Link>
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col items-end">
        <p>Want to suggest a new feature or report a bug?</p>
        <Link href={"https://github.com/oxytocingroup/theca/issues"}>
          <p className="hover:text-text-primary transition-all">
            Open an issue on GitHub!
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
