import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';

const NavBar = ({ query, setQuery, onSearch }) => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} />
    </nav>
  );
};

export default NavBar;
