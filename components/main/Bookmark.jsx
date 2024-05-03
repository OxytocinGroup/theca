import Link from "next/link";
import Image from "next/image";
import noImg from "/public/noImg.ico";

const Bookmark = (link = "/", favicon = noImg, title = "Bookmark") => {
  return (
    <Link
      href={link}
      className="flex gap-3 items-center px-4 py-3 rounded-2xl bg-background-secondary"
    >
      <Image src={favicon} alt={title} width={24} height={24} />
      <h3>{title}</h3>
    </Link>
  );
};

export default Bookmark;
