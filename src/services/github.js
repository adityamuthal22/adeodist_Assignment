const BASE_URL = "https://api.github.com";

export const trendingReposUrl = (dateRange, language) => {
  const query = `q=created:>${dateRange || "2023-05-04"}${
    language ? `+language:${language}` : ""
  }`;
  return `${BASE_URL}/search/repositories?sort=stars&order=desc&${query}`;
};

export const repoDetailsUrl = (repoName) => {
  return `${BASE_URL}/repos/${repoName}`;
};
