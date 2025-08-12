import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const WelcomePage = lazy(() => import("../../atomic/pages/WelcomePage"));
const DialoguePage = lazy(() => import("../../atomic/pages/DialoguePage"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/chat" element={<DialoguePage />} />
      </Routes>
    </BrowserRouter>
  );
};
