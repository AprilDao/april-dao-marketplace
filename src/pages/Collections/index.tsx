import React from 'react';
import CollectionItem from '../../components/CollectionItem';
import { upcomingLaunches } from '../../utils/constant';

const Collections = () => {
  return (
    <div>
      <h1>Popular Collections</h1>
      <div className="upcoming-lauches flex">
        {upcomingLaunches.map(({ id, title, img }, index) => {
          return (
            <CollectionItem
              key={index}
              link={`/collections/${id}`}
              title={title}
              img={img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
