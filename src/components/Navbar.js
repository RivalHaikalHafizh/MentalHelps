import React from "react";
import mentalhelpsimg from "../assets/images/MentalHelps1.png";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg fixed mb-10 z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content bg-transparent mt-3 p-2 rounded-box w-72 "
            >
              <ul className="steps steps-vertical ">
                <li className="step step-primary"><a href="#umur">Umur</a></li>
                <li className="step "><a href="#pendidikan">Pendidikan</a></li>
                <li className="step "><a href="#screentime">Screentime</a></li>
                <li className="step "><a href="#makan">Makan</a></li>
                <li className="step "><a href="#olahraga">Olahraga/Depresi</a></li>
                <li className="step "><a href="#tersinggung">Tersinggung/overthingking</a></li>
                <li className="step "><a href="#berapajam">berapajam</a></li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="btn btn-ghost normal-case text-xl">MentalHelps</h1>
        </div>
        <div className="navbar-end">
          <img className="w-10" src={mentalhelpsimg} alt="mentalhelps"/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
