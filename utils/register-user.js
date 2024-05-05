const apiEndpoint = `/api/register`;
import { useRouter } from "next/navigation";

export async function registerUser(data) {
  // const router = useRouter();
  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (res.ok) {
    // router.push("/");
  } else {
    console.log("User registration failed.");
  }
}
