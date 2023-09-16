import { useContext, Fragment, useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase';
import Clotheshangerlogo from '../../assets/clotheshangerlogo.svg';
import './navigation.scss';

import { UserContext } from '../../contexts/user.context';
import { FaBars } from 'react-icons/fa';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 380);

  const signOutHandler = async () => {
    await signOutUser();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 380);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Fragment>
      <div className={`navigation ${isMobile ? 'mobile' : 'desktop'}`}>
        <Link className="logo-container" to="/" key="home">
          <img src={Clotheshangerlogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          {/* Mobile menu icon */}
          {isMobile && (
            <div
              className={`mobile-menu-icon ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <FaBars />
            </div>
          )}

          {/* Mobile menu */}
          {isMobile && mobileMenuOpen && (
            <div className="mobile-menu">
              <Link className="nav-link" to="/shop" key="shop">
                SHOP
              </Link>
              {currentUser ? (
                <span className="nav-link" onClick={signOutHandler} key="signout">
                  SIGN OUT
                </span>
              ) : (
                <Link className="nav-link" to="/auth" key="auth">
                  SIGN IN
                </Link>
              )}
            </div>
          )}

          {/* Desktop menu */}
          {!isMobile && (
            <div className="desktop-menu">
              <Link className="nav-link" to="/shop" key="shop">
                SHOP
              </Link>
              {currentUser ? (
                <span className="nav-link" onClick={signOutHandler} key="signout">
                  SIGN OUT
                </span>
              ) : (
                <Link className="nav-link" to="/auth" key="auth">
                  SIGN IN
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
