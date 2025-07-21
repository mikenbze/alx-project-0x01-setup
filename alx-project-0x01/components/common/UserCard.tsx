
const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold text-blue-700">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-700 mt-1">{user.email}</p>
      <p className="text-sm text-gray-700">📞 {user.phone}</p>
      <p className="text-sm text-gray-700">🌐 {user.website}</p>
      <div className="mt-2">
        <p className="text-sm font-medium">📍 Address:</p>
        <p className="text-sm">{user.address.suite}, {user.address.street}</p>
        <p className="text-sm">{user.address.city}, {user.address.zipcode}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium">🏢 Company:</p>
        <p className="text-sm">{user.company.name}</p>
        <p className="text-xs italic">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;

