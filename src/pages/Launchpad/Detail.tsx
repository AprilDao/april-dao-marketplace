import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/NormalButton';
import { setAllAccounts, setCurrentAccount } from '../../store/commonSlice';
import { RootState } from '../../store/rootReducer';
import { Line, Circle } from 'rc-progress';

const Detail = () => {
  const { currentAccount } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const connectWallet = async () => {
    const allInjected = await web3Enable('AprilDao');
    const allAccounts = await web3Accounts();
    dispatch(setAllAccounts(allAccounts));
    dispatch(setCurrentAccount(allAccounts[0]));
  };

  const mint = () => {
    console.log('mint');
  };

  const visit = () => {
    navigate('/collections/3');
  };

  return (
    <div>
      <div className="flex">
        <div>
          <h1>Hidden Boyz</h1>
          <div>PRICE 1.555 ◎</div>
          <a href="#">Twitter</a>
          <a href="#">Discord</a>
          div
          <p>
            A collection of 1555 unique hand drawn Hidden Boyz. Living in their
            own reality from inside the bag. Join them on their quest to bring
            physical assets to our virtual world. Stay Hidden.
          </p>
          <br />
        </div>
        <div>
          <img
            src="https://bafybeihycbe5abcf7nxugeb3kddghnlr7wke2vlow2l3jurw7b4dgudw6i.ipfs.nftstorage.link/"
            alt="Hidden Boyz"
            className="rounded-md"
          />

          <div>
            <div className="flex justify-between">
              <div>Total minted</div>
              <div>0% (400/1555)</div>
            </div>
            <Line
              percent={(400 / 1555) * 100}
              strokeWidth={4}
              strokeColor="#e93a88"
            />
          </div>
          <div className="mt-2">
            {currentAccount && (
              <Button className="w-full" onClick={mint}>
                Mint
              </Button>
            )}
            {!currentAccount && (
              <Button className="w-full" onClick={connectWallet}>
                Connect wallet
              </Button>
            )}
          </div>
          <div className="mt-2">
            <Button className="w-full" onClick={visit}>
              Visit collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
