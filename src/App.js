import {Routes, Route, useLocation } from 'react-router-dom';
import WelcomePage from './pages/Welcome';

import Login from './pages/Login';
import TabsFilled from './pages/Testing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PromptPack from './pages/PromptPack';
import AddOns from './pages/AddOns';
import Signup from './component/Signup';
import Prompts from './pages/Prompts';
import Prompt from './pages/Prompt';
import Bots from './pages/Bots';
import Account from './pages/Account';
import SavedPrompts from './pages/SavedPrompts';
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard';

function App() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
      <Routes>
        <Route path='/' element={<WelcomePage />}>
          <Route index element={<WelcomePage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/testing' element={<TabsFilled />} />
        <Route path='/prompt-packs' element={<PromptPack />} />
        <Route path='/bots' element={<Bots />} />
        <Route path='/add-ons' element={<AddOns />} />
        <Route path='/prompts' element={<Prompts />} />
        <Route path='/saved-prompts' element={<SavedPrompts />} />
        <Route
          path='/prompt/:category/:title/:description'
          element={<Prompt />}
        />
        <Route path='/account' element={<Account />} />
      </Routes>
  );
}

export default App;
