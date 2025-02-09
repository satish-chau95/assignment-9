import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <div className="py-4 px-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-600">{user.phone}</p>
        <p className="text-sm text-gray-600">
          {user.location.city}, {user.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;