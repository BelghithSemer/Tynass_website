import React from 'react';
import './Menu.css';

const Menu = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
        <table className="menu-table">
          <tbody>
            <tr>
              <td><a href="/">Home</a></td>
              <td><a href="/about">About</a></td>
            </tr>
            <tr>
              <td><a href="/projects">Projects</a></td>
              <td><a href="/articles">Articles</a></td>
            </tr>
          </tbody>
        </table>
        <div className="menu-footer">
          <div className="office">
            <h3>Offices</h3>
            <p>TechHub Plaza, Suite 301<br />567 Tech Lane, TechHub Plaza, Suite 301</p>
            <p>Metro Tower, Floor 15<br />789 Main Street, Metro Tower, Floor 15</p>
          </div>
          <div className="social">
            <h3>Follow us</h3>
            <ul className="social-icons">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
