import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Policies', to: '/policies' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        {/* Logo */}
        <NavLink to="/" className={styles.logoWrapper}>
          <img
            src="/src/assets/images/logo.png"
            alt="ThinkClear Logo"
            className={styles.logo}
          />
          <span className={styles.logoText}>
            Think<span style={{color:"#060A30"}}>Clear</span>
          </span>
        </NavLink>
        <div className={styles.NavFlex}>
        {/* Desktop Nav Links */}
        <ul className={styles.desktopNav}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? styles.activeLink
                    : styles.navLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Book Demo CTA */}
        <div className={styles.desktopButton}>
          <button className={styles.bookButton}>
            Book Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? styles.mobileActiveLink
                      : styles.mobileNavLink
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className={styles.mobileBookButton}>
            Book Demo
          </button>
        </div>
      )}
    </header>
  )
}