import Landingpage from "landing/Landingpage";
import SingIn from "pages/signIn/SingIn";
import SingUp from "pages/signUp/SignUp";
import NotFound from "pages/notFoundPage/NotFound";
import Homepage from "pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeStore } from "common/Store.js";
import { useStore } from "zustand";

function App() {
  const { accessToken } = useStore(ThemeStore);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SingUp />} />
        {accessToken && <Route path="/home" element={<Homepage />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
