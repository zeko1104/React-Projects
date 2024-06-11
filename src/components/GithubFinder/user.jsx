import React from "react";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="p-4 rounded-xl border border-solid">
      <div className="">
        <img src={avatar_url} className="h-[150px] rounded-[50%] aspect-square" alt="User" />
      </div>
      <div className="flex gap-5 justify-center  mt-5">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p className="m-0 text-xl font-bold">
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <div  className="flex justify-center gap-5  text-xl font-bold">
          <p>Public Repos</p>
          <p className="text-red-600">{public_repos}</p>
        </div>
        <div  className="flex justify-center gap-5 text-xl font-bold">
          <p>Followers</p>
          <p className="text-red-600">{followers}</p>
        </div>
        <div  className="flex justify-center gap-5  text-xl font-bold">
          <p>Following</p>
          <p className="text-red-600">{following}</p>
        </div>
      </div>
    </div>
  );
}
