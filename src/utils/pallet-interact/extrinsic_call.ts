import { web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { toast } from 'react-toastify';
import { api } from '../functions';

const txResHandler = ({ status }: any) => {
  toast.success('Applied successfully!');
};

export const registerCollection = async (
  currentAccount: InjectedAccountWithMeta,
  projectName: string,
  description: string,
  numberOfItems: number,
  mintFee: number
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule
    .registerCollection(projectName, description, numberOfItems, mintFee)
    .signAndSend(
      currentAccount?.address,
      {
        signer: injector.signer,
      },
      txResHandler
    );
};

export const approve_collection = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string,
  startDate: number,
  endDate: number
) => {
  console.log(startDate);
  console.log(endDate);
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule
    .approveCollection(collectionId, startDate, endDate)
    .signAndSend(
      currentAccount?.address,
      {
        signer: injector.signer,
      },
      txResHandler
    );
};

export const mint = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule.mint(collectionId).signAndSend(
    currentAccount?.address,
    {
      signer: injector.signer,
    },
    txResHandler
  );
};

export const submit_proposal = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule.submit_proposal(collectionId).signAndSend(
    currentAccount?.address,
    {
      signer: injector.signer,
    },
    txResHandler
  );
};

export const submit_refund_proposal = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule
    .submit_refund_proposal(collectionId)
    .signAndSend(
      currentAccount?.address,
      {
        signer: injector.signer,
      },
      txResHandler
    );
};

export const cast_vote = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule.cast_vote(collectionId).signAndSend(
    currentAccount?.address,
    {
      signer: injector.signer,
    },
    txResHandler
  );
};

export const yay = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string,
  proposalId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule.yay(collectionId, proposalId).signAndSend(
    currentAccount?.address,
    {
      signer: injector.signer,
    },
    txResHandler
  );
};

export const nay = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string,
  proposalId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule.nay(collectionId, proposalId).signAndSend(
    currentAccount?.address,
    {
      signer: injector.signer,
    },
    txResHandler
  );
};

export const execute_proposal = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule.execute_proposal(collectionId).signAndSend(
    currentAccount?.address,
    {
      signer: injector.signer,
    },
    txResHandler
  );
};
