import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const fetchPromise = fetchPlayers();
const AvailablePlayers = ({
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const players = use(fetchPromise);
  return (
    <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto mt-6">
      {players.map((player) => (
        <PlayerCard
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
          coin={coin}
          setCoin={setCoin}
          player={player}
          key={player.id}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
