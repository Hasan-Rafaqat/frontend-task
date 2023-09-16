import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ListTasks from "./pages/ListTasks";
import PageNotFound from "./pages/PageNotFound";
import CreateTask from "./pages/CreateTask";
import BulkDelete from "./pages/BulkDelete";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-tasks" element={<ListTasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/bulk-delete" element={<BulkDelete />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
