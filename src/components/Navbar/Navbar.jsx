import React from "react";

const Navbar = ({ coin }) => {
  return (
    <nav className="flex items-center justify-between w-11/12 py-4 mx-auto">
      <div className="nav-left">
        <img src="../../../assets/logo.png" alt="nav-logo image" />
      </div>
      <div className="nav-right">
        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <li>
            <button className="btn font-bold text-lg">
              {coin} Coin <img src="../../../assets/Currency.png" alt="" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
