import { web3FromSource } from '@polkadot/extension-dapp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { api } from '../../utils/functions';
import { Button } from '../../components/NormalButton';
import { useConnectWallet } from '../../hooks/useConnectWallet';
import { submit_proposal } from '../../utils/pallet-interact/extrinsic_call';

type Inputs = {
  collection_name: string;
  description: string;
  numberOfItems: number;
  mintFee: number;
};

const ProposalCreate = () => {
  const [currentAccount, connectWallet] = useConnectWallet();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (currentAccount) {
      submit_proposal(currentAccount, 'collectionId');
    }
  };

  return (
    <div>
      <form className="w-full flex flex-col items-center">
        <div className="w-2/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Proposal title
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
            Withdraw (%)
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
            Withdraw to address
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
            <Button onClick={handleSubmit(onSubmit)}>Create proposals</Button>
          )}
          {!currentAccount && (
            <Button onClick={connectWallet}>Connect wallet</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProposalCreate;
