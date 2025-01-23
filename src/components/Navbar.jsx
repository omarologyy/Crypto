import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          CryptoHive
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/crypto">Crypto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
