import React from "react";

const PlayerCard = ({
  player,
  coin,
  setCoin,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  const {
    battingStyle,
    country,
    image,
    playerName,
    playingRole,
    price,
    ratings,
  } = player;
  const handleBuyNow = (player) => {
    const specficPlayer = selectedPlayers.find((item) => item.id === player.id);
    if (specficPlayer) {
      alert(`You have already Selected the ${player.playerName}`);
      return;
    } else {
      const newCoin = coin - price;
      setCoin(newCoin);
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img className="h-125 w-full object-cover" src={image} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          <img src="../../../assets/user 1 (1).png" alt="" />
          <h2 className="card-title">{playerName}</h2>
        </div>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <p className="font-semibold text-lg">Price : {price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBuyNow(player)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
