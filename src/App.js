import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Slider from "./components/Slider/Slider";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <Layout>
        <div>Body</div>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
