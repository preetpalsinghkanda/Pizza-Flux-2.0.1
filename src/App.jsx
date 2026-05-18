import React from "react";
import NavBar from "./Components/NavBar";
import WhyPizzaFlux from "./Components/WhyPizzaFlux/WhyPizzaFlux";
import ReadyOrder from "./Components/ReadyOrder";
import Hero from "./Components/Hero";
import EmptyCart from "./Components/EmptyCart";
import Signup from "./Components/Signup";
import PizzaMenuHero from "./Components/PizzaMenu/PizzaMenuHero";
import PizzaMenu from "./Components/PizzaMenu/PizzaMenu";
import PizzaCustomize from "./Components/PizzaMenu/PizzaCustomize";
import PizzaContext from "./Context/Context";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import FinalCart from "./Components/FinalCart";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <NavBar />
      <div className="flex flex-col gap-35 my-15 ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhyPizzaFlux />
                <ReadyOrder />
              </>
            }
          />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/menu"
            element={
              <>
                {/* <PizzaMenuHero /> */}
                <PizzaMenu />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                {" "}
                <FinalCart />{" "}
              </>
            }
          />
        </Routes>
      </div>

      <PizzaCustomize />
    </div>
  );
};

export default App;
