const apiEndpoint = `/api/register`;

export async function registerUser(data) {
  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error registering user");
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}
