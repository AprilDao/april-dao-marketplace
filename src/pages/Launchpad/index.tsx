import React, { useEffect, useState } from 'react';
import CollectionItem from '../../components/CollectionItem';
import { upcomingLaunches } from '../../utils/constant';
import { getAllCollections } from '../../utils/pallet-interact/chain_state';

const index = () => {
  const [collections, setCollections] = useState<any[]>([]);
  useEffect(() => {
    const init = async () => {
      const allCollections = await getAllCollections();
      setCollections(
        allCollections.map(([_, value]) => {
          return value.toHuman();
        })
      );
    };

    init();
  }, []);
  return (
    <div>
      <h1>Upcoming</h1>
      <div className="collection-list flex">
        {collections.map(
          ({ id, name, img, numberOfItems, mintInfor }, index) => {
            return (
              <CollectionItem
                key={index}
                link={`/launchpad/${id}`}
                title={name}
                // img={img}
                // TODO
                img="https://img-cdn.magiceden.dev/rs:fill:252:189:0:0/plain/https:/i.imgur.com/WCpkZUH.jpg"
                // mintInfo={mintInfor}
                // TODO
                mintInfo={{
                  numberOfItems: numberOfItems,
                  time: '2022/04/23 12:00:00',
                  mintFee: 1.2,
                }}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default index;
