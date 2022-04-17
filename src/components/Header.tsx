import React, { useState } from 'react';
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3ListRpcProviders,
  web3UseRpcProvider,
} from '@polkadot/extension-dapp';
import { Link } from 'react-router-dom';

const Header = () => {
  const menus2 = [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '/register',
      title: 'Register Project',
    },
    {
      url: '/dao',
      title: 'April DAO',
    },
    // {
    //   url: '/about',
    //   title: 'About',
    // },
  ];

  const [accounts, setAccounts] = useState<string[]>([]);

  const connectWallet = async () => {
    const allInjected = await web3Enable('AprilDao');
    const allAccounts = await web3Accounts();
    setAccounts(allAccounts.map((item) => item.address));
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
                <div className="relative inline-block text-white">
                  {accounts.length > 0 && (
                    <Link to="/me">{accounts[0].substring(0, 10)}</Link>
                  )}

                  {accounts.length === 0 && (
                    <button
                      className="border border-violet-200 px-4 py-2 rounded"
                      onClick={connectWallet}
                    >
                      Connect wallet
                    </button>
                  )}
                  <div
                    id="myDropdown"
                    className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                  >
                    <input
                      type="text"
                      className="drop-search p-2 text-gray-600"
                      placeholder="Search.."
                      id="myInput"
                    />
                    <a
                      href="#"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fa fa-user fa-fw"></i> Profile
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fa fa-cog fa-fw"></i> Settings
                    </a>
                    <div className="border border-gray-800"></div>
                    <a
                      href="#"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                    </a>
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
