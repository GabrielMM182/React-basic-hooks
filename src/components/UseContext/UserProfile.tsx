import React from "react";
import { useUserContext } from "./UserProvider";

const UserProfile: React.FC = () => {
  const { user } = useUserContext();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;