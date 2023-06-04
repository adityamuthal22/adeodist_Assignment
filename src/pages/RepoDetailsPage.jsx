import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import RepoDetails from "../components/RepoDetails";
import { fetchTrendingRepos } from "../redux/reducers/repos";

const RepoDetailsPage = () => {
  const { id } = useParams();
  // console.log(id,"repoNames");
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.list);
  // console.log(repos,"list")

  let singledata = repos.filter((el) => el.id == id);
  // console.log(singledata,"singledata")

  useEffect(() => {
    dispatch(fetchTrendingRepos());
  }, [dispatch]);

  return (
    <div className="dark:bg-black w-[50%] m-auto p-4">
      <h2 className="text-center font-bold text-[22px] dark:text-white">
        Repository Details
      </h2>
      {repos ? (
        <RepoDetails repos={singledata} />
      ) : (
        <div>Loading repository details...</div>
      )}
    </div>
  );
};

export default RepoDetailsPage;
