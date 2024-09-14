import "./../styles/usersTable.css";

export default function UsersTable() {
  return (
    <div>
      <button className="enable-button">Search</button>
      <div className="table">
        <div className="table-header">
          <div className="header-cell">Nickname</div>
          <div className="header-cell">Full Name</div>
          <div className="header-cell">E-mail</div>
          <div className="header-cell">Birthday</div>
          <div className="header-cell">Height</div>
          <div className="header-cell">Gender</div>
        </div>

        <div className="table-row">
          <div className="table-cell">
            <label htmlFor="search"></label>
            <input type="text" />
            <button className="search-button">Search user</button>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell">johndoe</div>
          <div className="table-cell">John Doe</div>
          <div className="table-cell">johndoe@gmail.com</div>
          <div className="table-cell">1997.03.21</div>
          <div className="table-cell">180 cm</div>
          <div className="table-cell">Male</div>
        </div>

        <div className="table-row">
          <div className="table-cell">janesmith</div>
          <div className="table-cell">Jane Smith</div>
          <div className="table-cell">janesmith@gmail.com</div>
          <div className="table-cell">1992.05.15</div>
          <div className="table-cell">165 cm</div>
          <div className="table-cell">Female</div>
        </div>
      </div>
    </div>
  );
}
