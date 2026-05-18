import React, { useContext, useEffect } from "react";

import chickenPizza from "/chicken.png";
import pepperoniPizza from "/pepperoni.png";
import chickenNewPizza from "/chickennew.png";
import PizzaContext from "../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import {
  setSizePrice,
  setCrustPrice,
  setToppingsPrice,
} from "../../Redux/Features/PizzaPriceSlice";

import {
  removeFromCart,
  PizzaCartDecrement,
  addToCart,
} from "../../Redux/Features/PizzaCart";

const PizzaCustomize = () => {



  const {
    selectedPizza,
    setSelectedPizza,
    size,
    setSize,
    crust,
    setCrust,
    toppings,
    setToppings,
    isAddToCartEnabled,
    setIsAddToCartEnabled,
  } = useContext(PizzaContext);


  const dispatch = useDispatch();

  const { basePrice, sizePrice, crustPrice, toppingsPrice } = useSelector(
    (state) => state.PizzaPrice,
  );


  const cartItems = useSelector((state) => state.PizzaCart.items);
  const cartCount = cartItems.length;

  const PizzaFinalPrice = basePrice + sizePrice + crustPrice + toppingsPrice;


  const currentItem = selectedPizza
    ? cartItems.find(
      (i) =>
        i.pizzaName === selectedPizza.pizzaName &&
        i.size?.price === size?.price &&
        i.crust?.price === crust?.price &&
        i.toppings?.price === toppings?.price
    )
    : null;

  const qty = currentItem ? currentItem.qty : 0;


  useEffect(() => {
    if (qty < 1) {
      setIsAddToCartEnabled(false);
    } else {
      setIsAddToCartEnabled(true);
    }
  }, [qty]);

  useEffect(() => {
    if (selectedPizza) {

      setSize({
        name: "Regular",
        price: 249
      });

      setCrust(null);

      setToppings(null);

      dispatch(setSizePrice(249));
      dispatch(setCrustPrice(0));
      dispatch(setToppingsPrice(0));
    }
  }, [selectedPizza]);

  if (!selectedPizza) return null;

  return (
    <div className="no-scrollbar fixed inset-0 bg-black/90 flex justify-center items-center z-50 overflow-y-auto ">
      <div className="bg-[black] border border-[#ffffff3c] rounded-4xl text-white pizza-customize m-auto max-w-lg px-8">
        <span
          onClick={() => setSelectedPizza(null)}
          className="absolute top-4 right-4 cursor-pointer text-xl"
        >
          <span className="material-symbols-outlined">close</span>
        </span>
        <div className="relative">
          <img
            src={selectedPizza.pizzaImg}
            alt=""
            className="w-full h-[260px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute">
            <h4 className="text-4xl font-extrabold">
              {selectedPizza.pizzaName}
            </h4>
            <p className="text-lg text-[#ffffffbb] max-w-md">
              {selectedPizza.dis}
            </p>
          </div>
        </div>

        <div className="mt-30 flex flex-col gap-6">
          <div className="flex flex-col gap-2 mt-6">
            <h5>CHOOSE SIZE</h5>
            <div className="text-md flex gap-3">
              <span
                onClick={() => {
                  setSize({ name: "Regular", price: 249 });
                  dispatch(setSizePrice(249));
                }}
                className={`${size?.price === 249 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Regular &nbsp; ₹<span className="text-sm">249</span>{" "}
              </span>
              <span
                onClick={() => {
                  setSize({ name: "Medium", price: 299 });
                  dispatch(setSizePrice(299));
                }}
                className={`${size?.price === 299 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer px-3 py-1.5 rounded-xl`}
              >
                Medium &nbsp; ₹<span className="text-sm">299</span>{" "}
              </span>
              <span
                onClick={() => {
                  setSize({ name: "Large", price: 349 });
                  dispatch(setSizePrice(349));
                }}
                className={`${size?.price === 349 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"} cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Large &nbsp; ₹<span className="text-sm">349</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5>CHOOSE CRUST</h5>
            <div className="text-md flex gap-3">
              <span
                onClick={() => {
                  if (crust?.price === 99) {
                    setCrust(null);
                    dispatch(setCrustPrice(0));
                  } else {
                    setCrust({ name: "Thin", price: 99 })
                    dispatch(setCrustPrice(99));
                  }
                }}
                className={`${crust?.price === 99 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Thin&nbsp;&nbsp;₹<span className="text-sm">99</span>{" "}
              </span>
              <span
                onClick={() => {
                  if (crust?.price === 149) {
                    setCrust(null);
                    dispatch(setCrustPrice(0));
                  } else {
                    setCrust({ name: "Cheese Burst", price: 149 })
                    dispatch(setCrustPrice(149));
                  }
                }}
                className={`${crust?.price === 149 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Cheese-brust &nbsp;&nbsp; ₹
                <span className="text-sm">149</span>{" "}
              </span>
              <span
                onClick={() => {
                  if (crust?.price === 199) {
                    setCrust(null);
                    dispatch(setCrustPrice(0));
                  } else {
                    setCrust({ name: "pan", price: 199 })
                    dispatch(setCrustPrice(199));
                  }
                }}
                className={`${crust?.price === 199 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Pan &nbsp;&nbsp;₹<span className="text-sm">199</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5>CHOOSE TOPPINGS</h5>
            <div className="text-md flex gap-3">
              <span
                onClick={() => {
                  if (toppings?.price === 149) {
                    setToppings(null);
                    dispatch(setToppingsPrice(0));
                  } else {
                    setToppings({ name: "Olive", price: 149 });
                    // setToppings(149);
                    dispatch(setToppingsPrice(149));
                  }
                }}
                className={`${toppings?.price === 149 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Olive&nbsp;&nbsp;₹<span className="text-sm">149</span>{" "}
              </span>
              <span
                onClick={() => {
                  if (toppings?.price === 179) {
                    setToppings(null);
                    dispatch(setToppingsPrice(0));
                  } else {
                    setToppings({ name: "Corn", price: 179 })
                    // setToppings(179);
                    dispatch(setToppingsPrice(179));
                  }
                }}
                className={`${toppings?.price === 179 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Corn &nbsp;&nbsp; ₹<span className="text-sm">179</span>{" "}
              </span>
              <span
                onClick={() => {
                  if (toppings?.price === 249) {
                    setToppings(null);
                    dispatch(setToppingsPrice(0));
                  } else {
                    setToppings({ name: "Extra Cheese", price: 249 });
                    dispatch(setToppingsPrice(249));
                  }
                }}
                className={`${toppings?.price === 249 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Extra Cheese&nbsp;&nbsp;₹
                <span className="text-sm">249</span>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex my-8 px-4  text-black gap-8 ">
          {qty > 0 ? (
            <span className=" rounded-2xl w-full font-[500] border bg-[#e77a59ea] flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  dispatch(
                    PizzaCartDecrement({
                      pizzaName: selectedPizza.pizzaName,
                      size,
                      crust,
                      toppings,
                    }),
                  );
                }}
                className=" px-2 flex rounded-lg bg-[#e0d5d5ea]"
              >
                <span className="material-symbols-outlined ">remove</span>
              </button>{" "}
              <span className="text-[#ffffff] text-2xl font-extrabold">
                {qty}
              </span>{" "}
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: selectedPizza.id,
                      pizzaImg: selectedPizza.pizzaImg,
                      pizzaName: selectedPizza.pizzaName,
                      pizzaPrice:
                        basePrice + sizePrice + crustPrice + toppingsPrice,
                      size,
                      crust: crust,
                      toppings,
                    }),
                  );
                }}
                className=" px-2 flex rounded-lg bg-[#e0d5d5ea]"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </span>
          ) : (
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: selectedPizza.id,
                    pizzaName: selectedPizza.pizzaName,
                    pizzaImg: selectedPizza.pizzaImg,
                    pizzaPrice:
                      basePrice + sizePrice + crustPrice + toppingsPrice,
                    size,
                    crust,
                    toppings,
                  }),
                );
              }}
              className="text-xl w-full font-extrabold text-white  border-0 border bg-[#ff784d] text-md rounded-xl flex justify-center items-center gap-3"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              Add to Cart
            </button>
          )}

          <div className="text-white flex flex-col items-end font-extrabold">
            <h6 className="text-[14px] text-[#ffffffe0] ">TOTAL</h6>
            <span className="text-2xl">₹{qty > 0 ? PizzaFinalPrice * qty : PizzaFinalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomize;
