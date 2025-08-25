import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      {filteredUsers.length === 0 ? (
        <p>No results</p>
      ) : (
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
