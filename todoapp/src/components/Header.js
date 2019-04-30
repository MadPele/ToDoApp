import React from "react";

function Header() {
  var today = new Date();
  today = today.toDateString();
  return (
    <div className="todo-header">
      <h2>
        What's your plan for today?
        <br />
        <span className="header-date">({today})</span>
      </h2>
    </div>
  );
}

export default Header;
