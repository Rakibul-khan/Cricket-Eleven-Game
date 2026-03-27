import "./App.css";

import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const App = () => {
  const [toggle, setToggle] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coin, setCoin] = useState(15000);

  return (
    <div>
      <Navbar coin={coin}></Navbar>
      <div className="flex w-11/12 mx-auto justify-between">
        {toggle === "available" ? (
          <h1 className="font-bold text-2xl">Available Players</h1>
        ) : (
          <h1 className="font-bold text-2xl">
            Selected Players({selectedPlayers.length})
          </h1>
        )}
        <div>
          <div
            onClick={() => setToggle("available")}
            className={`btn ${toggle === "available" ? "bg-amber-300" : ""}`}
          >
            Available
          </div>
          <div
            onClick={() => setToggle("selected")}
            className={`btn ${toggle === "selected" ? "bg-amber-300" : ""}`}
          >
            Selected({selectedPlayers.length})
          </div>
        </div>
      </div>
      {toggle === "available" ? (
        <Suspense
          fallback={
            <div className="flex justify-center mt-10">
              <span className="loading loading-dots loading-xl "></span>
            </div>
          }
        >
          <AvailablePlayers
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
            coin={coin}
            setCoin={setCoin}
          />
        </Suspense>
      ) : (
        <SelectedPlayers
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      )}
    </div>
  );
};

export default App;
