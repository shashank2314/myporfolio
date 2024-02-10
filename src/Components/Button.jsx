import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-2 rounded-[25px] font-bold  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-blue-900 text-white border-white  border-2 hover:bg-white hover:text-blue-900 hover:border-blue-900" : "bg-white border-blue-900 text-blue-900 border-2 hover:border-white hover:text-white hover:bg-blue-900"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;