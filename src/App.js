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
      <Route path="/prompt/:title" element={<Prompt />} />


    </Routes>
  </BrowserRouter>
  );
}

export default App;
