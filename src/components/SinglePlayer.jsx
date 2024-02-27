import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePlayer, getSinglePlayer } from "../API";

import "../styles/SP.css";

export default function SinglePlayer() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function updatePlayer() {
      try {
        const player = await getSinglePlayer(id);
        setPlayer(player);
      } catch (e) {
        console.error(e);
      }
    }
    updatePlayer();
  }, []);

  async function deleteHandler(playerId) {
    await deletePlayer(playerId);

    navigate("/");
  }

  if (!player) {
    return <div>Loading player {id} . . .</div>;
  }

  return (
    <article key={player.id}>
      <img src={player.imageUrl} className="single-img" />
      <h2>{player.name}</h2>
      <h3>{player.breed}</h3>
      <button onClick={() => deleteHandler(id)}>DELETE!</button>
    </article>
  );
}
