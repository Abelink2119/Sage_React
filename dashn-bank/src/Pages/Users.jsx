export default function Users() {
  const userList = [
    { id: 1, name: "Abebe", email: "john@example.com" },
    { id: 2, name: "lema", email: "jane@example.com" },
    { id: 3, name: "kebede ", email: "abel@example.com" },
  ];

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
