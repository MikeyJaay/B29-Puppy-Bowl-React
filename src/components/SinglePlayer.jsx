import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePlayer } from "../API";

export default function SinglePlayer() {
  // UseParams grabs the player id out of the url ex: players/8282. 8282 is the ID
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function updatePlayer() {
      try {
        const player = await getSinglePlayer;
        setPlayer(player);
      } catch (e) {
        console.error(e);
      }
    }
    updatePlayer();
  }, []);

  if (!player) {
    return <div>Loading player {id} . . . </div>;
  }
  return <div>Single Player</div>;
}
