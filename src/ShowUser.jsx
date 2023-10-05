import React from "react";
import "./ShowUser.css";

const ShowUser = ({ data }) => {
  const { name, avatar_url, bio, company, followers, following } = data;
  return (
    <div>
      <img src={avatar_url} alt={name} className="avatar-img" />
      <h1 className="user-name">{name}</h1>
      <h2 className="user-company">{company}</h2>
      <p className="user-followers">Followers: {followers}</p>
      <p className="user-followers">Following: {following}</p>
    </div>
  );
};

export default ShowUser;
