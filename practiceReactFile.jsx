import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await res.json();
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
};

export default UserList;


function Counter() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
  }

  function ToggleMessage() {
    const [show, setShow] = React.useState(false);
  
    return (
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
        {show && <p>Hello World!</p>}
      </div>
    );
  }
  

  function NameForm() {
    const [name, setName] = React.useState("");
  
    return (
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Hello, {name}</p>
      </form>
    );
  }
  

  function TodoApp() {
    const [todos, setTodos] = React.useState([]);
    const [task, setTask] = React.useState("");
  
    const addTodo = () => {
      if (!task.trim()) return;
      setTodos([...todos, task]);
      setTask("");
    };
  
    return (
      <div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New todo"
        />
        <button onClick={addTodo}>Add</button>
  
        <ul>
          {todos.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }
  

  function sumDigits(n) {
    return Math.floor(n / 10) + (n % 10);
  }
  
  console.log(sumDigits(42));