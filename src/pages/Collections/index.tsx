import React, { useEffect, useState } from 'react';
import { api } from '../../utils/functions';
const url_img =
  'https://img-cdn.magiceden.dev/rs:fill:320:320:0:0/plain/https:/creator-hub-prod.s3.us-east-2.amazonaws.com/smokeheads_pfp_1650230467760.png';

const Collections = () => {
  const [allCollections, setAllCollections] = useState<any[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <div>
      <h1>Popular Collections</h1>
      <div className="flex">
        {allCollections.map((collection, index) => {
          return (
            <div>
              <img src={url_img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
