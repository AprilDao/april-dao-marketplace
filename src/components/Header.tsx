import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { setAllAccounts, setCurrentAccount } from '../store/commonSlice';

const Header = () => {
  const { currentAccount } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();

  const connectWallet = async () => {
    const allInjected = await web3Enable('AprilDao');
    const allAccounts = await web3Accounts();
    dispatch(setAllAccounts(allAccounts));
    dispatch(setCurrentAccount(allAccounts[0]));
  };

  return (
    <header>
      <nav
        aria-label="menu nav"
        className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
      >
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#" aria-label="Home">
              <span className="text-xl pl-2">
                <i className="em em-grinning"></i>
              </span>
            </a>
          </div>

          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2"></div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative  inline-block text-white">
                  <div className="flex">
                    {currentAccount && (
                      <Link to="/me">
                        Hi, {currentAccount.address.substring(0, 10)}
                      </Link>
                    )}
                    {!currentAccount && (
                      <button
                        className="border border-violet-200 px-4 py-2 rounded"
                        onClick={connectWallet}
                      >
                        Connect wallet
                      </button>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
