import { NavLink } from "react-router-dom";

function Navbar() {
    return (
      <header>
        <section>
          {/* <img src={logo} /> */}
          <h1>DEMO Site</h1>
        </section>
  
        <nav>
          <NavLink to='/'>Home</NavLink>
          {/* <NavLink to='/items'>All Items</NavLink>
          <NavLink to='/form'>Add Item Form</NavLink> */}
        </nav>
      </header>
    )
  }
  
  export default Navbar