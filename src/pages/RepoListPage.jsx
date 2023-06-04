import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RepoList from "../components/RepoList";
import FilterForm from "../components/FilterForm";
import { fetchTrendingRepos, filterRepos } from "../redux/reducers/repos";

const RepoListPage = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.list);
  // console.log(repos,"list")

  useEffect(() => {
    dispatch(fetchTrendingRepos());
  }, [dispatch]);

  const handleFilter = ({ dateRange, language }) => {
    dispatch(filterRepos(dateRange, language));
  };

  return (
    <div className="dark:bg-black">
      <h1 className="text-center font-bold text-[22px] py-4 dark:text-white">
        Trending Repositories
      </h1>
      <FilterForm onSubmit={handleFilter} />
      {repos.length > 0 ? (
        <RepoList repos={repos} />
      ) : (
        <div className="text-center font-bold mt-10">
          Loading trending repositories...
          <img
            className="text-center m-auto"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      )}{" "}
    </div>
  );
};

export default RepoListPage;
