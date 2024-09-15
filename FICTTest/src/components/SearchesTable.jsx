import { useEffect, useState } from "react";
import "../styles/searches.css";

export default function SearchesTable() {
  const [users, setUsers] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setUsers(users);
    } else {
      setUsers([]);
    }
  }, []);

  const usersWithHistory = users.filter(
    (user) => Array.isArray(user.searchHistory) && user.searchHistory.length > 0
  );

  function toggleUser(index) {
    if (expandedUser === index) {
      setExpandedUser(null);
    } else {
      setExpandedUser(index);
    }
  }

  return (
    <div className="user-list">
      {users.length === 0 && <h1>No data yet</h1>}

      {users.length > 0 && usersWithHistory.length === 0 && (
        <h1>No users with search history</h1>
      )}

      {usersWithHistory.length > 0 &&
        (usersWithHistory.length <= 3
          ? usersWithHistory.map((user, index) => (
              <div key={index} className="user-box">
                <div className="search-history">
                <h3>{user.fullname}</h3>
                  {user.searchHistory.map((history, idx) => (
                    <p key={idx}>
                      <strong>Searched: </strong> {history.query} • <strong>At: </strong> {history.dateTime}
                    </p>
                  ))}
                </div>
              </div>
            ))
          : usersWithHistory.map((user, index) => (
              <div key={index} className="user-box">
                <h3>{user.fullname}</h3>
                <button className="expand-button" onClick={() => toggleUser(index)}>
                  {expandedUser === index ? "Hide history" : "Show history"}
                </button>
                {expandedUser === index && (
                  <div className="search-history">
                    {user.searchHistory.map((history, idx) => (
                      <p key={idx}>
                        <strong>Query:</strong> {history.query} •{" "}
                        <strong>Date:</strong> {history.dateTime}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )))}
    </div>
  );
}
