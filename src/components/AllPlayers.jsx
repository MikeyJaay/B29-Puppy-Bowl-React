import { useState, useEffect } from "react";
import axios from "axios"
import player from "./SinglePlayer"


export default function AllPlayers() {

  const [players, setPlayers] = useState([])

  useEffect (() => {
    async function fetchPlayer () {
      const {data} = await axios.get(' https://fsa-puppy-bowl.herokuapp.com/api/mikey-jaay/players')
   
        setPlayers(data)
   
    }
    fetchPlayer()
  }, [])

  console.log(players)


  if (players.length === 0) {
    return <h1>Loading Players . . . </h1>
  }

  return (
    <section className="all-players">
      {players.map(player => <Player key={player.id} item={player} />)}
    </section>
  );

}
