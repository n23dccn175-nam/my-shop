import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">MyShop</NavLink>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Trang Chủ
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
          Sản Phẩm
        </NavLink>
        <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>
          Giới Thiệu
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Liên Hệ
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
