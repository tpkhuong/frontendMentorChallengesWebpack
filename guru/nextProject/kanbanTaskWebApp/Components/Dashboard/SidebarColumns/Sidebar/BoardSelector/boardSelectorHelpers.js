export async function testCreateBoards() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/testdb`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "tpkhuong@gmail.com" }),
    }
  );
  console.log(response);
}
