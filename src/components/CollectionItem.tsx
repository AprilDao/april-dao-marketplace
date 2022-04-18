import React from 'react';
import { Link } from 'react-router-dom';

interface CollectionItemProps {
  link: string;
  img: string;
  title: string;
  mintInfo?: {
    time: string;
    numberOfItems: number;
    mintfee: number;
  };
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  link,
  img,
  title,
  mintInfo,
}) => {
  return (
    <div className="mr-2">
      <Link to={link}>
        <img className="rounded-md" src={img} alt="" />
        <p>{title}</p>
      </Link>

      {mintInfo && (
        <div>
          <div>{mintInfo.time}</div>
          <div>
            <div>{mintInfo.numberOfItems}</div>
            <div>{mintInfo.mintfee}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionItem;
