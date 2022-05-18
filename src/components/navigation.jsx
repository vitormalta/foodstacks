import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = (props) => {
  const [ user, setUser ] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const data = localStorage.getItem("user")
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const onLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  const renderLogoutBtn = () => {
    if (user) {
      return <li>
      <a className='page-scroll'>
        <Link to="/" onClick={onLogout}>Log out</Link>
      </a>
    </li>
    }
  }

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Foodstacks
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a className='page-scroll'>
              <Link to="/Shop">Crie uma Loja</Link>
              </a>
            </li>
            <li>
              <a className='page-scroll'>
                <Link to="/">{user.name}</Link>
              </a>
            </li>
            {renderLogoutBtn}
          </ul>
        </div>
      </div>
    </nav>
  )
}
