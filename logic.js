fetch("https://api.github.com/orgs/stackbuilders/repos", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
