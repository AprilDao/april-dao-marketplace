import React, { useEffect } from 'react';
import { Button } from './components/Button';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Mint from './pages/Mint';
import Dao from './pages/Dao';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import Collections from './pages/Collections';
import Launchpad from './pages/Launchpad';
import Apply from './pages/Apply';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main>
          <div className="flex flex-col md:flex-row">
            <NavBar />
            <section>
              <div
                id="main"
                className="main-content flex-1  mt-12 md:mt-2 pb-24 md:pb-5 p-4 text-white"
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/me" element={<Profile />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/launchpad" element={<Launchpad />} />
                  <Route path="/dao" element={<Dao />} />
                  <Route path="/launchpad/:id" element={<Mint />} />
                  <Route path="apply" element={<Apply />} />
                </Routes>
              </div>
            </section>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
