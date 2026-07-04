import React from "react";
import { Button } from "@mui/material";
import AddressCard from "../../AddressCard/AddressCard";
import CartItem from "./CartItem";

const OrderSummary = () => {
  return (
    <div>
      {/* Address Section */}
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard />
      </div>

      {/* Cart & Price Details */}
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        {/* Cart Items */}
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>

        {/* Price Details */}
        <div className="px-5 sticky top-0 h-screen mt-5 lg:mt-0">
          <div className="border"></div>

          <p className="uppercase font-bold opacity-60 pb-4">
            Price Details
          </p>

          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>$265</span>
            </div>

            <div className="flex justify-between pt-3 text-green-600">
              <span>Discount</span>
              <span>50%</span>
            </div>

            <div className="flex justify-between pt-3 text-green-600">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between pt-3 font-bold">
              <span>Total Amount</span>
              <span className="text-green-600">$1278</span>
            </div>
          </div>

          <Button
            variant="contained"
            className="w-full mt-5"
            sx={{
              px: "2rem",
              py: "1rem",
              bgcolor: "#9155fd",
            }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;