import { Button } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useConnectWallet } from '../../hooks/useConnectWallet';
import { nay, yay } from '../../utils/pallet-interact/extrinsic_call';

const ProposalDetail: React.FC<{
  title: string;
  status: string;
  owner: string;
  description: string;
}> = ({ title, owner, description, status }) => {
  const [currentAccount, connectWallet] = useConnectWallet();
  let { collectionId, proposalId } = useParams();
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
        <h1 className="text-white text-xl">{title}</h1>
        <span className="rounded-lg bg-green-400 text-white px-3 py-2">
          {status}
        </span>
        <span>{owner}</span>
        <p>{description}</p>
      </div>
      <div className="w-1/3">
        <section>
          <h3>Information</h3>
        </section>

        <section>
          <h3>Voting results</h3>
          <ul>
            <li>Yay : 6.3M SUSHIP... 99.95%</li>
            <li>Nay : 2.5K SUSHIP... 0.04%</li>
            <li>Abstain : 441 SUSHIP... 0.01%</li>
          </ul>
          {currentAccount && (
            <>
              <Button onClick={onYay}>Yay</Button>
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
