import React from 'react';
import CollectionItem from '../../components/CollectionItem';
import { upcomingLaunches } from '../../utils/constant';

const index = () => {
  return (
    <div>
      <h1>Upcoming</h1>
      <div className="collection-list flex">
        {upcomingLaunches.map(({ id, title, img, mintInfor }, index) => {
          return (
            <CollectionItem
              key={index}
              link={`/launchpad/${id}`}
              title={title}
              img={img}
              mintInfo={mintInfor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
