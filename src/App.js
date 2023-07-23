import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome";

import Login from "./pages/Login";
import TabsFilled from "./pages/Testing";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PromptPack from "./pages/PromptPack";
import AddOns from "./pages/AddOns";
import Signup from "./component/Signup";
import Prompts from "./pages/Prompts";
import Prompt from "./pages/Prompt";
import Bots from "./pages/Bots";
import Account from "./pages/Account";
import SavedPrompts from "./pages/SavedPrompts";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<WelcomePage />}>
        <Route index  element={<WelcomePage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/testing" element={<TabsFilled />} />
      <Route path="/prompt-packs" element={<PromptPack />} />
      <Route path="/bots" element={<Bots />} />
      <Route path="/add-ons" element={<AddOns />} />
      <Route path="/prompts" element={<Prompts />} />
      <Route path="/saved-prompts" element={<SavedPrompts />} />
      <Route path="/prompt/:category/:title/:description" element={<Prompt />} />
      <Route path="/account" element={<Account />} />


    </Routes>
  </BrowserRouter>
  );
}

export default App;
