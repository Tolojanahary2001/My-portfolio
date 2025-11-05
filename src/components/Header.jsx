import '../assets/css/Header.css'

function Header() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container justify-content-center">
        <div className="navbar-nav">
          <a className="nav-link home active" href="#hero" aria-current="page">
            <i className="fa-regular fa-house"></i>
          </a>
          <a className="nav-link about" href="#about">
            <i className="fa-regular fa-user"></i>
          </a>
          <a className="nav-link technologies" href="#technologie">
            <i className="fa-regular fa-heart"></i>
          </a>
          <a className="nav-link portfolio" href="#portfolio">
            <i className="fa-regular fa-folder-open"></i>
          </a>
          <a className="nav-link contact" href="#contact">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Header;