import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// import { useEffect, useState } from "react";
import Bookmark from "@/components/main/Bookmark";

const apiReadBookmarks = `/api/bookmarks/readBookmarks`;

const BookmarkSet = async () => {
  const session = await getServerSession(authOptions);
  // const { data: session } = useSession();
  // const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    const user = session?.user?.username;
    const res = await fetch(
      process.env.API_ENDPOINT + `/bookmarks/readBookmarks`,
      {
        method: "POST",
        body: JSON.stringify({ user: user }),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch bookmarks");
    }
    const data = await res.json();
    return data.bookmarks;
  };

  const bookmarks = await fetchBookmarks();

  return (
    <>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} title={bookmark.title} href={bookmark.url} />
      ))}
    </>
  );
};

export default BookmarkSet;
