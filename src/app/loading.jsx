import Logo from "@/components/layouts/Logo";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h2 className="text-5xl font-bold animate-pulse">LOADING...</h2>
      <div className="animate-ping">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default loading;
