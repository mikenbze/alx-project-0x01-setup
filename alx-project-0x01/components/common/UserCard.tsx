import React from "react";
import { UserProps } from "@/interfaces"; 

const UserCard: React.FC<UserProps> = ({ 
  name,
  username,
  email,
  phone,
  website,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm">{email}</p>
      <p className="text-sm">{phone}</p>
      <a
        href={`http://${website}`}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 text-sm"
      >
        {website}
      </a>
    </div>
  );
};

export default UserCard;
