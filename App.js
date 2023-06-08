import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const restaurantsData = [
  { id: 1, name: 'Raj shekar Restaurant', cuisine: 'Italian', rating: 4.5, image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg' },
  { id: 2, name: 'Narendra Restaurant', cuisine: 'Indian', rating: 4.8, image: 'https://images.pexels.com/photos/11170284/pexels-photo-11170284.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Siva Restaurant', cuisine: 'Chinese', rating: 3.7, image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, name: 'Dinesh Restaurant', cuisine: 'Mexican', rating: 4.0, image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);
  const [sortBy, setSortBy] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const filtered = restaurantsData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredRestaurants(filtered);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);

    let sorted = [...filteredRestaurants];

    if (event.target.value === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (event.target.value === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setFilteredRestaurants(sorted);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const images = document.querySelectorAll('.restaurant-image img');
      images.forEach((image) => image.classList.add('fade-in'));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="mt-5">Zomato</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#location">Location</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#help">Help Chat</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="about" className="my-5">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor ullamcorper semper. Sed eu lobortis dui, vel malesuada justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat odio eu turpis luctus ullamcorper. Duis ultricies tempor nunc, id dictum lacus finibus nec.</p>
      </section>

      <section id="location" className="my-5">
        <h2>Location</h2>
        <p>123 Main Street, City, Country</p>
      </section>

      <section id="contact" className="my-5">
        <h2>Contact</h2>
        <p>Email: contact@zomato.com</p>
        <p>Phone: +1234567890</p>
      </section>

      <section id="help" className="my-5">
        <h2>Help Chat</h2>
        <p>Chat with our customer support representatives for assistance.</p>
      </section>

      <div className="row my-4">
        <div className="col">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
          />
        </div>
        <div className="col">
          <select
            value={sortBy}
            onChange={handleSort}
            className="form-control"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <ul className="list-unstyled">
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="img-fluid restaurant-image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{restaurant.name}</h3>
                  <p className="card-text">Cuisine: {restaurant.cuisine}</p>
                  <p className="card-text">Rating: {restaurant.rating}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <footer className="my-5 text-center">
        <p>&copy; 2023 Zomato. All rights reserved.</p>
        <p>Designed with love by Your Name</p>
      </footer>
    </div>
  );
};

export default App;