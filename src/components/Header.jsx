import '../assets/css/Header.css'

function Header() {
  return(
<nav className="navbar sticky-top navbar-expand-sm navbar-light">
  <div className="container">
        
    <a className="navbar-brand" href="javascript:void(0)" alt="logo"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
      <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Technologies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Mes travaux</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Header;