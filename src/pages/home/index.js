import React from 'react';
import { NavLink } from 'react-router-dom';

import './scss/home.scss';

const Home = () => {
  return (
    <div className="home_ d-flex justify-content-center align-items-center flex-column">
      <div className="section_">
        <h1 className="title">Avaliação, Marcela Alvino</h1>
          <NavLink to="/maxdoctor">
            <button type="button" className="btn btn-ouline btn_">
              Max Doctor
            </button>
          </NavLink>
      </div>
    </div>
  );
}

export default Home;