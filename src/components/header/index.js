import React from "react";

function Header(props) {
  // Variable
  const { setOpen } = props;
  // Functions
  const toggle = () => setOpen(true);
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-2xl font-bold tracking-wider text-gray-900">
          PRODUCTS
        </h1>
        <p className="my-5 text-sm text-gray-700">
          A list of all the products including price and name.
        </p>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          onClick={toggle}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-opacity-90 transition-all focus:outline-none sm:w-auto"
        >
          Add Products
        </button>
      </div>
    </div>
  );
}

export default Header;
