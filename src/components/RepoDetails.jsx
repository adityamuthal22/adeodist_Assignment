import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";

const RepoDetails = ({ repos }) => {
  // console.log(repos[0],"RepoDetails")

  if (!repos[0]) {
    return <div>Loading repository details...</div>;
  }

  const {
    name,
    owner,
    language,
    stargazers_count,
    forks_count,
    full_name,
    description,
  } = repos[0];

  return (
    <div className="h-auto max-w-full rounded-lg shadow-trend  p-8 border dark:border-white mt-2  ">
      <div className="flex gap-2">
        <img
          className="w-8 h-8 rounded-full"
          src={owner.avatar_url}
          alt="repoImage"
        />
        <Link className="dark:text-white ">
          <h1 className="font-bold"> {name}</h1>
        </Link>
      </div>
      <div>
        <p className="text-teal-500">
          Author:{" "}
          <span className="text-orange-700">{owner && owner.login}</span>{" "}
        </p>
        <p className="line-clamp-3 text-gray-400">{description}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-teal-500">
          Language:-{" "}
          <span className="text-blue-500">
            {language ? language : "Python"}
          </span>{" "}
        </p>
        <p className="flex mt-1 dark:text-white">
          {<AiFillStar />}
          <span className="mt-[-4px] text-blue-700">
            {stargazers_count}
          </span>{" "}
        </p>
        <p className="flex mt-1 dark:text-white">
          {<TbGitFork />}
          <span className="mt-[-4px] text-blue-700">{forks_count}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default RepoDetails;
