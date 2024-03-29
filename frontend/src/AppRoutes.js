import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail";
import FoodPage from "./pages/RestaurantDetail/Food/FoodPage";
import CartPage from "./pages/Cart/CartPage";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Login from "./pages/Login/Login";
import CreateAccountRestaurant from "./pages/CreateAccountRestaurant/CreateAccountRestaurant";
import LoginRestaurant from "./pages/LoginRestaurant/LoginRestaurant";
import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import OrderStatus from "./pages/OrderStatus/OrderStatus";
import RestaurantDashboard from "./pages/RestaurantDashboard/RestaurantDashboard";
import EditMenu from "./pages/RestaurantDashboard/EditMenu/EditMenu";
import React, { useState } from "react";
import UserContext from "./UserContext";
import AddRestaurantDetails from "./pages/AddRestaurantDetails/AddRestaurantDetails";
import CustomerBankDetails from "./pages/CustomerBankDetails/CustomerBankDetails";
import OwnerBankDetails from "./pages/OwnerBankDetails/OwnerBankDetails";
import EditMenuCreate from "./pages/RestaurantDashboard/EditMenu/EditMenuCreate";
import EditMenuUpdate from "./pages/RestaurantDashboard/EditMenu/EditMenuUpdate";
import OrderContext from "./OrderContext";

export default function AppRoutes() {
  const [user, setUser] = useState(null);
  const [orderID, setOrderID] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <OrderContext.Provider value={{ orderID, setOrderID }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/restaurantdetail" element={<RestaurantDetail />} />
          <Route
            path="/restaurantoage/search/:searchTerm"
            element={<RestaurantDetail />}
          />
          <Route
            path="/restaurantdetail/tag/:tag"
            element={<RestaurantDetail />}
          />
          <Route
            path="/restaurantdetail/:RestaurantID"
            element={<RestaurantDetail />}
          />
          <Route path="/cart/" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/customerbankdetail" element={<CustomerBankDetails />} />
          <Route path="/loginrestaurant" element={<LoginRestaurant />} />
          <Route
            path="/createaccountrestaurant"
            element={<CreateAccountRestaurant />}
          />
          <Route path="/ownerbankdetail" element={<OwnerBankDetails />} />
          <Route
            path="/addrestaurantdetails"
            element={<AddRestaurantDetails />}
          />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/orderstatus" ƒ element={<OrderStatus />} />
          <Route
            path="/restaurantdashboard"
            element={<RestaurantDashboard />}
          />
          <Route path="/restaurantdashboard/edit" element={<EditMenu />} />
          <Route path="/editmenucreate" element={<EditMenuCreate />} />
          <Route path="/editmenuupdate/:MenuID" element={<EditMenuUpdate />} />
          <Route path="/foodpage/:MenuID" element={<FoodPage />} />
        </Routes>
      </OrderContext.Provider>
    </UserContext.Provider>
  );
}
