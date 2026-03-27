import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }) => {
  return (
    <div>
      {selectedPlayers.map((selectPlayer, index) => (
        <SelectedCard
          key={index}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
          selectPlayer={selectPlayer}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
