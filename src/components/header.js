import React from 'react';

import Account from './account';

const ItemMenu = ({ title }) => (
  <li className="nav-item">
    <a className="nav-link" href={`/${title.path}`}>{title.label}</a>
  </li>
);

const Header = ({ listItem }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <span className="navbar-brand">Adventure Capitaliste</span>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {listItem.map((title) => <ItemMenu title={title} />)}
        </ul>
      </div>
      <Account />
    </div>
  </nav>
);

export default Header;
