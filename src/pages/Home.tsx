import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { upcomingLaunches } from '../utils/constant';

const Home = () => {
  return (
    <div>
      <div>
        <h2>Upcoming Launches</h2>

        <div className="upcoming-lauches flex">
          {upcomingLaunches.map((project, index) => {
            return (
              <div key={index} className="mr-2">
                <Link to={`/mint/${project.id}`}>
                  <img className="rounded-md" src={project.img} alt="" />

                  <p>{project.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
