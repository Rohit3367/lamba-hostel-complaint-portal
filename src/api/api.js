// GET API
export async function getComplaintData() {
  // placeholder URL
  const response = await fetch("http://localhost:4000/complaintsHandled", {
    method: "GET",
  });

  // minimal parse
  const json = await response.json();
  return json;
}
