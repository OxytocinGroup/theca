import OxytocinLogo from "./oxytocinlogo";

const Footer = () => {
  return (
    <footer className="flex w-full justify-between text-text-secondary">
      <OxytocinLogo color={"hsl(var(--text-secondary))"} />
      <p>Powered by NextJS</p>
    </footer>
  );
};

export default Footer;
