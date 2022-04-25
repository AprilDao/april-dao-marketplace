import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProposalsByCollectionId } from '../../utils/pallet-interact/chain_state';

const ProposalList = () => {
  const [proposals, setProposals] = useState<any[]>([1, 2, 3]);
  let { collectionId } = useParams();
  useEffect(() => {
    const init = async () => {
      if (collectionId) {
        const all = await getProposalsByCollectionId(collectionId);
        setProposals(
          all.map(([_, value]) => {
            return value.toHuman();
          })
        );
      }
    };

    // init();
  }, []);
  return (
    <div className="container">
      <ul>
        {proposals.map((item) => {
          return (
            <li>
              <Link to={`/collections/${collectionId}/proposals/${item}`}>
                <div className="flex justify-between">
                  <span>{item.owner}</span>
                  <span className="rounded-lg bg-green-400 text-white px-3 py-2">
                    Active
                  </span>
                </div>
                <h1 className="text-white text-xl">
                  Kanpai Part 2: SushiMaker Treasury Payout Ratio
                  [Implementation]
                </h1>
                <p className="text-yellow-200">
                  This proposal’s expectation is to produce an implementation.
                  Full details and discussions thus far can be found at:
                  https://forum.sushi.com...
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProposalList;
