import { Link } from 'react-router-dom'

export default function NavBar() {
  return (

    <header>
      <section>
        <h1>React Puppy Bowl!</h1>
      </section>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/players/add"> Add Player </Link>
  </nav>
  </header>
)}