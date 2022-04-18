import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../components/CollectionItem';
import { upcomingLaunches } from '../utils/constant';

const Home = () => {
  return (
    <div>
      <section>
        <h2>Upcoming Launches</h2>

        <div className="upcoming-lauches flex">
          {upcomingLaunches.map(({ id, title, img }, index) => {
            return (
              <CollectionItem
                key={index}
                link={`/launchpad/${id}`}
                title={title}
                img={img}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2>Popular collections</h2>

        <div className="upcoming-lauches flex">
          {upcomingLaunches.map((project, index) => {
            return (
              <div key={index} className="mr-2">
                <Link to={`/collections/${project.id}`}>
                  <img className="rounded-md" src={project.img} alt="" />

                  <p>{project.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
