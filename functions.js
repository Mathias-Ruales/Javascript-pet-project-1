async function fetchGithubData() {
  try {
    const response = await fetch(
      "https://api.github.com/orgs/stackbuilders/repos",
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function getReposMoreThanFive(repos) {
  return repos.filter((repo) => repo.stargazers_count > 5);
}

function getLastUpdatedRepos(repos) {
  return [...repos]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 5);
}

function getTotalStars(repos) {
  return repos.reduce((total, repo) => total + repo.stargazers_count, 0);
}

module.exports = {
  getReposMoreThanFive,
  getLastUpdatedRepos,
  getTotalStars,
};
