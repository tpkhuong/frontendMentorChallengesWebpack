export async function testCreateBoards() {
  const response = await fetch(`/api/testdb`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: this.email }),
  });
  console.log(response);
}
