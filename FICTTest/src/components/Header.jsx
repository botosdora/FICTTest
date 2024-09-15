import "./../styles/header.css";

export default function Header() {

  function handleLogout() {
      localStorage.removeItem("loggedInUser");
      alert("Successful logout!");
  }

  return (
    <header>
      <a href="/login">Login</a>
      <a href="/users">Users</a>
      <a href="/searches">Searches</a>
      <button
        className="logout-button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}
