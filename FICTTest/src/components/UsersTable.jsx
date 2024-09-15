import { useEffect, useState } from "react";
import "../styles/usersTable.css";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUserData = localStorage.getItem("loggedInUser");

    setUsers(users);
    setFilteredUsers(users);

    const loggedInUser = users.find((user) => user.email === loggedInUserData);
    setCurrentUser(loggedInUser);
  }, []);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();

    const currentDateTime = new Date().toLocaleString();
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.nickname.toLowerCase().includes(lowerCaseQuery) ||
        user.fullname.toLowerCase().includes(lowerCaseQuery) ||
        user.email.toLowerCase().includes(lowerCaseQuery) ||
        user.birthday.toLowerCase().includes(lowerCaseQuery) ||
        user.height.toString().toLowerCase().includes(lowerCaseQuery) ||
        user.gender.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredUsers(filtered);

    if (searchQuery.trim() !== "" && currentUser) {
      const updatedUsers = users.map((user) => {
        if (user.email === currentUser.email) {
          return {
            ...user,
            searchHistory: [
              ...(user.searchHistory || []),
              { query: searchQuery, dateTime: currentDateTime },
            ],
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
    }
  }

  function toggleSearchRow() {
    setIsSearchVisible((prevVisibility) => !prevVisibility);
  }

  return (
    <div>
      <button className="enable-button" onClick={toggleSearchRow}>
        {isSearchVisible ? "Hide search" : "Enable search"}
      </button>
      <div className="table">
        <div className="table-header">
          <div className="header-cell">Nickname</div>
          <div className="header-cell">Full Name</div>
          <div className="header-cell">E-mail</div>
          <div className="header-cell">Birthday</div>
          <div className="header-cell">Height (cm)</div>
          <div className="header-cell">Gender</div>
        </div>
        {isSearchVisible && (
          <div className="table-row">
            <div className="table-cell">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Looking for somebody?"
                />
                <button className="search-button" type="submit">
                  Search user
                </button>
              </form>
            </div>
          </div>
        )}
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div className="table-row" key={index}>
              <div className="table-cell">{user.nickname}</div>
              <div className="table-cell">{user.fullname}</div>
              <div className="table-cell">{user.email}</div>
              <div className="table-cell">{user.birthday}</div>
              <div className="table-cell">{user.height}</div>
              <div className="table-cell">{user.gender}</div>
            </div>
          ))
        ) : (
          <h1>No users found.</h1>
        )}
      </div>
    </div>
  );
}
