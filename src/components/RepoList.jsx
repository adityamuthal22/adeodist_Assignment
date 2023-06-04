import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";

const RepoList = ({ repos }) => {
  console.log(repos);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4  ">
      {repos.map((repo) => (
        <div
          className="h-auto max-w-full rounded-lg shadow-trend  p-4 border dark:border-white  "
          key={repo.id}
        >
          <div className="flex gap-2">
            <img
              className="w-8 h-8 rounded-full"
              src={repo.owner.avatar_url}
              alt="repoImage"
            />
            <Link
              className="dark:text-white hover:text-blue-700 "
              to={`/repos/${repo.id}`}
            >
              <h1 className="font-bold"> {repo.full_name}</h1>
            </Link>
          </div>
          <div>
            <p className="line-clamp-1 text-gray-400">{repo.description}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-teal-500">
              Language:-{" "}
              <span className="text-blue-500">
                {repo.language ? repo.language : "Python"}
              </span>{" "}
            </p>
            <p className="flex mt-1 dark:text-white">
              {<AiFillStar />}
              <span className="mt-[-4px] text-blue-700">
                {repo.stargazers_count}
              </span>{" "}
            </p>
            <p className="flex mt-1 dark:text-white">
              {<TbGitFork />}
              <span className="mt-[-4px] text-blue-700">{repo.forks}</span>{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
