// Dependencies
import React from 'react';
import Input from '../commom/input/Input.jsx';

// Styles
import './Header.scss';

const Header = () => {
  const header = (
    <header>
      <Input inputName="Search" />
    </header>
  );
  return header;
};

export default Header;
