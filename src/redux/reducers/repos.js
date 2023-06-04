import axios from "axios";
import { trendingReposUrl, repoDetailsUrl } from "../../services/github";

const initialState = {
  list: [],
  details: null,
  selectedRepo: null,
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRENDING_REPOS":
      return {
        ...state,
        list: action.payload,
      };
    case "SET_REPO_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    case "SELECT_REPO":
      return {
        ...state,
        selectedRepo: action.payload,
      };
    default:
      return state;
  }
};

export const setTrendingRepos = (repos) => {
  return { type: "SET_TRENDING_REPOS", payload: repos };
};

export const setRepoDetails = (repo) => {
  return { type: "SET_REPO_DETAILS", payload: repo };
};

export const selectRepo = (repo) => {
  return { type: "SELECT_REPO", payload: repo };
};

export const fetchTrendingRepos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(trendingReposUrl());
      dispatch(setTrendingRepos(response.data.items));
    } catch (error) {
      console.error("Error fetching trending repos:", error);
    }
  };
};

export const filterRepos = (dateRange, language) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(trendingReposUrl(dateRange, language));
      dispatch(setTrendingRepos(response.data.items));
    } catch (error) {
      console.error("Error filtering repos:", error);
    }
  };
};

export const fetchRepoDetails = (repoName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(repoDetailsUrl(repoName));
      // console.log(response,"actiondetails")
      dispatch(setRepoDetails(response.data));
    } catch (error) {
      console.error("Error fetching repo details:", error);
    }
  };
};

export default reposReducer;
