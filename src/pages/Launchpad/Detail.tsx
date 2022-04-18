import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Line } from 'rc-progress';

import { Button } from '../../components/NormalButton';
import { useConnectWallet } from '../../hooks/useConnectWallet';
import ExtenalLink from '../../components/ExtenalLink';
import { CountdownTimer } from '../../components/CountdownTimer';
import { useCountdown } from '../../hooks/useCountDown';
import { RootState } from '../../store/rootReducer';

const Detail = () => {
  const [currentAccount, connectWallet] = useConnectWallet();
  let { collectionId } = useParams();
  const upcomming = useSelector(
    (root: RootState) => root.collection.upcommingCollections
  ).find((c) => c.id.toString() === collectionId);
  const [days, hours, minutes, seconds] = useCountdown(
    upcomming?.mintInfor.time || '2022/12/31'
  );
  const navigate = useNavigate();

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
          <h1>{upcomming?.title}</h1>
          <div>{upcomming?.mintInfor.mintFee} ◎</div>
          <div className="flex gap-1 mt-3">
            <a href="#" className="flex">
              <ExtenalLink />
              <span>Twitter</span>
            </a>
            <a href="#" className="flex">
              <ExtenalLink />
              <span>Discord</span>
            </a>
          </div>
          <p className="mt-6">{upcomming?.description}</p>
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
              <div>0% (400/{upcomming?.mintInfor.numberOfItems})</div>
            </div>
            <Line
              percent={(400 / 1555) * 100}
              strokeWidth={4}
              strokeColor="#e93a88"
            />
          </div>
          <div className="mt-2">
            {days + hours + minutes + seconds > 0 && (
              <CountdownTimer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            )}
            {days + hours + minutes + seconds <= 0 && (
              <>
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
                <div className="mt-2">
                  <Button className="w-full" onClick={visit}>
                    Visit collection
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
