import React from 'react';
import './Header.css';

const headerStyle = {
  color: '#fff',
  backgroundColor: '#000',
  padding: '10px'
};

const Header = (props) => (
  <div
    style={headerStyle}
  >
    <h2 style={{margin: '0'}}>Kicks Search</h2>
  </div>
);

export default Header;
