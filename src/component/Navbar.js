//Navbar Component
function Navbar(){
    return(
      <nav>
        <h1 className="heading">Perfumy</h1>
        <ul className="menu">
          <li>
            <a href="#">Home |</a>
          </li>
          <li>
            <a href="#">Products |</a>
          </li>
          <li>
            <a href="#">About Us |</a>
          </li>
          <li>
            <a href="#">Contact Us |</a>
          </li>
        </ul>
      </nav>
    );    
}

export default Navbar;