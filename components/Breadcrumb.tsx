import React from "react";

const Breadcrumb = () => {
  return (
    <div className="h-10 w-full bg-black text-white">
      <div className="container mx-auto flex h-full items-center gap-2 px-4 text-sm">
        <p>Home</p>
        <p>|</p>
        <p>Deadpool & Wolverine</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
