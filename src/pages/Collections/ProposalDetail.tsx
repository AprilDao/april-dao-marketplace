import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useConnectWallet } from '../../hooks/useConnectWallet';
import { getCollectionByHash } from '../../utils/pallet-interact/chain_state';
import { nay, yay } from '../../utils/pallet-interact/extrinsic_call';

const ProposalDetail: React.FC<{
  title: string;
  status: string;
  owner: string;
  description: string;
}> = ({ title, owner, description, status }) => {
  const [currentAccount, connectWallet] = useConnectWallet();
  const [currentCollection, setCurrentCollection] = useState<any>();
  let { collectionId, proposalId } = useParams();

  useEffect(() => {
    const init = async () => {
      if (collectionId) {
        // const all = await getProposalsByCollectionId(collectionId);
        // setProposals(
        //   all.map(([_, value]) => {
        //     return value.toHuman();
        //   })
        // );

        const collection = await getCollectionByHash(collectionId);
        setCurrentCollection(collection.toHuman());
      }
    };

    init();
  }, [collectionId]);

  const onYay = async () => {
    if (currentAccount && collectionId && proposalId) {
      await yay(currentAccount, collectionId, proposalId);
    }
  };

  const onNay = async () => {
    if (currentAccount && collectionId && proposalId) {
      await nay(currentAccount, collectionId, proposalId);
    }
  };

  return (
    <div className="flex">
      <div className="w-2/3">
        <Link
          to={`/collections/${collectionId}/proposals`}
          className="flex text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>
        <br />
        <h1 className="text-white text-xl">{title}</h1>
        <span className="rounded-lg bg-green-400 text-white px-3 py-2">
          {status}
        </span>
        <span>{owner}</span>
        <p>{description}</p>
      </div>
      <div className="w-1/3">
        <section className="border border-gray-400 rounded-md p-3">
          <h3 className="text-white font-bold text-lg">Voting results</h3>
          <ul>
            <li>Yay : 99 (99%)</li>
            <li>Nay : 1 (1%)</li>
          </ul>
          {currentAccount && (
            <>
              <Button onClick={onYay} className="mr-2">
                Yay
              </Button>
              <Button onClick={onNay}>Nay</Button>
            </>
          )}
          {!currentAccount && (
            <Button onClick={connectWallet}>Connect wallet</Button>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProposalDetail;
