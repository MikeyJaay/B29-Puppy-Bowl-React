import { Link } from 'react-router-dom'

export default function NavBar() {
  return (

    <header>
      <section>
        <h1>React Puppy Bowl!</h1>
      </section>

  <nav>
    <Link to="/" className='navButton'>Home</Link>
    <Link to="/NewPlayerForm" className='navButton'> Add Player </Link>
  </nav>
  </header>
)}