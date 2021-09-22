import './App.css';
import React, { useState } from 'react';
import logo from '../resources/logo.png';
import filter from '../resources/filter.svg';
import Categories from '../features/categories/Categories';
import Posts from '../features/posts/Posts';
import Search from '../components/Search';


function App() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="top-search">
          {/* <Search /> */}
        </div>
      </header>
      <div className="main-content">
        {/* <Posts />
        <Categories /> */}
      </div>
      <footer>
        {/* <Search /> */}
        <button onClick={handleToggle}><img src={filter} className={`filter-icon ${isActive ? "active" : ''}`} alt="filter-categories" /></button>
      </footer>
    </div>
  );
}

export default App;
