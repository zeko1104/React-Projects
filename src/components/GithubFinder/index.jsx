import React, { useEffect, useState } from "react";
import User from "./user";

export default function GithubFinder() {
  const [userName, setUserName] = useState("zeko1104");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading Data! Please wait...</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[1000px] p-5 rounded-lg bg-white shadow-md">
        <div className="flex gap-5 justify-center items-center mb-5">
          <input
            className="p-3 text-[16px] border border-cyan-500 outline-none rounded-lg"
            name="search-by-username"
            type="text"
            placeholder="Search GitHub Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button
            className="p-3 border-none rounded-lg bg-cyan-500 text-white"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
        {userData && <User user={userData} />}
      </div>
    </div>
  );
}
