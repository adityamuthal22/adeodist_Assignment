import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import RepoListPage from "./pages/RepoListPage";
import RepoDetailsPage from "./pages/RepoDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/repos" element={<RepoListPage />} />
          <Route path="/repos/:id" element={<RepoDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
