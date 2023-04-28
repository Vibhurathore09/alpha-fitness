import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from "./Component/NavBar";
import ExerciseDetail from "./Component/ExerciseDetail";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";

const App = () => {
  return (
    <div>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </Box>
    </div>
  );
};

export default App;
