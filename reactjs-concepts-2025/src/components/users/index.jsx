import { useState } from 'react';
import { useEffect } from 'react';

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch('http://dummyjson.com/users');
      const result = await apiResponse.json();

      if (result?.users) {
        setUsersList(result.users);
        setPending(false);
      } else {
        setUsersList([]);
      }
      console.log(usersList);
    } catch (error) {
      console.log(error);
      setPending(true);
    }
  }

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  if (pending) return <h1>Fetching Users!! Please Wait</h1>;
  return (
    <div>
      <h1>ALL Users List</h1>
      <button onClick={fetchAllUsers}>Fetch Users</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem.id}>
              <p>
                {userItem.firstName} {userItem.lastName}
              </p>
            </li>
          ))
        ) : (
          <h2>No Users found Please Try Again</h2>
        )}
      </ul>
    </div>
  );
}
