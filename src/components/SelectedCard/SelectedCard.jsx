import React from "react";

const SelectedCard = ({
  selectPlayer,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  const handleDelete = (selectPlayer) => {
    setSelectedPlayers(
      selectedPlayers.filter((item) => item.id !== selectPlayer.id),
    );
  };
  return (
    <div className=" flex justify-between w-11/12 mx-auto border-2 border-gray-300 rounded-lg mt-2 p-4">
      <h1>{selectPlayer.playerName}</h1>
      <div
        onClick={() => handleDelete(selectPlayer)}
        className="cursor-pointer"
      >
        <img src="../../../assets/Frame.png" alt="delete image" />
      </div>
    </div>
  );
};

export default SelectedCard;
