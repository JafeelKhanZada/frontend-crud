import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, getEditProduct } from "../../store/action";
function Table() {
  // Hooks
  const [data, setData] = useState([]);
  const state = useSelector((state) => state?.products);
  const dispatch = useDispatch();
  // Functions
  const remove = (id) => dispatch(deleteProduct(id));
  const edit = (id) => dispatch(getEditProduct(id));
  // Effects
  useEffect(() => {
    if (state) {
      setData(state);
    }
  }, [state]);
  return (
    <>
      <div className="h-[500px] min-w-full shadow-md overflow-auto rounded-md bg-white">
        <table className="min-w-full divide-y divide-gray-300 rounded-md overflow-hidden">
          <thead className="bg-primary">
            <tr>
              <th
                scope="col"
                className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-white sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-white"
              >
                Price
              </th>

              <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 bg-white">
            {data.map((product) => (
              <tr
                key={product._id}
                className="hover:bg-gray-50 select-none cursor-pointer transition-all"
              >
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {product.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {product.price}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <span
                    onClick={edit.bind(this, product?._id)}
                    className="cursor-pointer select-none text-primary mr-4"
                  >
                    Edit
                  </span>
                  <span
                    onClick={remove.bind(this, product?._id)}
                    className="cursor-pointer select-none text-red-400"
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Table;
