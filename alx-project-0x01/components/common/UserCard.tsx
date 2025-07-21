import React from "react";
import { UserProps } from "@/interfaces"; // or use "../../interfaces" if alias fails

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-blue-800">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-700">{user.email}</p>
      <p className="text-gray-700">📞 {user.phone}</p>
      <p className="text-gray-700">🌐 {user.website}</p>

      <div className="mt-2">
        <p className="font-medium">Address:</p>
        <p>{user.address.suite}, {user.address.street}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
      </div>

      <div className="mt-2">
        <p className="font-medium">Company:</p>
        <p>{user.company.name}</p>
        <p className="text-sm italic">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
