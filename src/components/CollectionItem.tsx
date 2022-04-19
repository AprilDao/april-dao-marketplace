import React from 'react';
import { Link } from 'react-router-dom';
import { useCountdown } from '../hooks/useCountDown';
import { CountdownTimer } from './CountdownTimer';

interface CollectionItemProps {
  link: string;
  img: string;
  title: string;
  mintInfo?: MintInfo;
}

interface MintInfo {
  time: string;
  numberOfItems: number;
  mintFee: number;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  link,
  img,
  title,
  mintInfo,
}) => {
  const renderMintInfor = (mint: MintInfo) => {
    const [days, hours, minutes, seconds] = useCountdown(mint.time);

    return (
      <div>
        <div className="text-pink-400">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</div>
        <div>
          <div>{mint.numberOfItems}</div>
          <div>{mint.mintFee}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="mr-2">
      <Link to={link}>
        <img className="rounded-md" src={img} alt="" />
        <p>{title}</p>
      </Link>

      {mintInfo && renderMintInfor(mintInfo)}
    </div>
  );
};

export default CollectionItem;
