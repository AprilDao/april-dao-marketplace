import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from '@polkadot/extension-dapp';
import React, { useEffect } from 'react';
import { api } from '../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../components/NormalButton';
import { setAllAccounts, setCurrentAccount } from '../store/commonSlice';
import { ToastContainer, toast } from 'react-toastify';

type Inputs = {
  collection_name: string;
  description: string;
  numberOfItems: number;
  mintFee: number;
};

const Apply = () => {
  const { currentAccount } = useSelector((state: RootState) => state.common);

  const txResHandler = ({ status }: any) => {
    toast.success('Applied successfully!');
  };

  const apply = async () => {
    if (currentAccount) {
      const injector = await web3FromSource(currentAccount.meta.source);
      await api.tx.collectionModule.registerCollection().signAndSend(
        currentAccount?.address,
        {
          signer: injector.signer,
        },
        txResHandler
      );
    } else {
      alert('please connect wallet first!');
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    apply();
  };

  const dispatch = useDispatch();

  const connectWallet = async () => {
    const allInjected = await web3Enable('AprilDao');
    const allAccounts = await web3Accounts();
    dispatch(setAllAccounts(allAccounts));
    dispatch(setCurrentAccount(allAccounts[0]));
  };

  return (
    <div>
      <form className="w-full flex flex-col items-center">
        <div className="w-2/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Collection name
          </label>
          <input
            className="appearance-none block w-full text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            defaultValue=""
            {...register('collection_name')}
            id="collection_name"
            type="text"
          />
        </div>
        <div className="w-2/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            defaultValue=""
            {...register('description')}
            className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
          />
        </div>
        <div className="w-2/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="numberOfItems"
          >
            Number of items
          </label>
          <input
            defaultValue=""
            {...register('numberOfItems')}
            className="appearance-none block w-full text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="numberOfItems"
            type="number"
          />
        </div>
        <div className="w-2/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="mintFee"
          >
            Mint fee
          </label>
          <input
            defaultValue=""
            {...register('mintFee')}
            className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="mintFee"
            type="text"
          />
        </div>
        <div className="w-2/3 px-3">
          {currentAccount && (
            <Button onClick={handleSubmit(onSubmit)}>Apply</Button>
          )}
          {!currentAccount && (
            <Button onClick={connectWallet}>Connect wallet</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Apply;
