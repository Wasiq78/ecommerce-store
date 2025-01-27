import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductHeader() {
  const [btnName, setBtnName] = useState("ALL");

  return (
    <div className="mt-40">
      <div className="flex container flex-col gap-10 justify-center  items-center">
        <h3 className="text-3xl font-bold">{btnName}</h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            to="all"
            onClick={() => setBtnName("ALL")}
            className="outline outlinne-2 outline-gray-400 px-4 text-lg whitespace-nowrap transition-all delay-300 ease-in hover:outline-gray-600"
          >
            All
          </Link>
          <Link
            to="furnitures"
            onClick={() => setBtnName("FURNITURES")}
            className="outline outlinne-2 outline-gray-400 px-4 whitespace-nowrap text-lg transition-all delay-300 ease-in hover:outline-gray-600"
          >
            Furnitures
          </Link>
          <Link
            to="kitchen"
            onClick={() => setBtnName("KITCHEN")}
            className="outline outlinne-2 outline-gray-400 px-4 text-lg whitespace-nowrap transition-all delay-300 ease-in hover:outline-gray-600"
          >
            Kitchen
          </Link>
          <Link
            to="lamps"
            onClick={() => setBtnName("LAMPS")}
            className="outline outlinne-2 outline-gray-400 px-4 text-lg whitespace-nowrap transition-all delay-300 ease-in hover:outline-gray-600"
          >
            Lamps
          </Link>
          <Link
            to="electronics"
            onClick={() => setBtnName("ELECTRONICS")}
            className="outline outlinne-2 outline-gray-400 whitespace-nowrap px-4 text-lg transition-all delay-300 ease-in hover:outline-gray-600"
          >
            Electronics
          </Link>
          <Link
            to="chairs"
            onClick={() => setBtnName("CHAIRS")}
            className="outline outlinne-2 outline-gray-400 px-4 text-lg whitespace-nowrap transition-all delay-300 ease-in hover:outline-gray-600"
          >
            Chairs
          </Link>
          <Link
            to="skincare"
            onClick={() => setBtnName("SKIN CARE")}
            className="outline outlinne-2 outline-gray-400 px-4 text-lg whitespace-nowrap transition-all delay-300 ease-in hover:outline-gray-600"
          >
            Skin Care
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
