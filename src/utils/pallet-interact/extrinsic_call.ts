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

export const approve_launchpad = async (
  currentAccount: InjectedAccountWithMeta,
  collectionId: string
) => {
  const injector = await web3FromSource(currentAccount.meta.source);
  await api.tx.collectionModule.approve_launchpad(collectionId).signAndSend(
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
