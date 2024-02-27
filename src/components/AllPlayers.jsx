import { useEffect, useState } from "react";
import { getAllPlayers } from "../API/index"

export default function AllPlayers() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    async function updatePlayers() {
      try {
        const players = await getAllPlayers()
        console.log('players', players)
        setPlayers(players)
      } catch (e) {
        console.error(e)
      }
    }
    updatePlayers()
  }, [])

  return <main>{
    players.map((player) => {
      return <article key={player.id}>
        <h2>
          <img src={player.imageUrl} />
          {player.name}
        </h2>
      </article>
    })
  }</main>
}