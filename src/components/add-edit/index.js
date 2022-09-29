import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, handleEdit, updateProduct } from "../../store/action";
function AddEditPopup(props) {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.edit);
  const [edit, setEdit] = useState(false);
  // Variables
  const { open, setOpen } = props;
  //   Functions
  const close = () => {
    dispatch(handleEdit(null));
    return setOpen(false);
  };
  const handler = (e) => {
    return new Promise((r) =>
      r(
        edit
          ? dispatch(updateProduct(state?._id, e))
          : dispatch(createProduct(e))
      )
    ).then(() => {
      setOpen(false);
      return reset();
    });
  };
  // Effect
  useEffect(() => {
    if (state) {
      setEdit(true);
      setValue("name", state?.name);
      setValue("price", state?.price);
    } else {
      setEdit(false);
    }
  }, [state]);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <form onSubmit={handleSubmit(handler)}>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                  <h1 className="text-2xl border-b text-opacity-75 pb-4 font-medium text-primary">
                    {edit ? "Edit" : "Add"} Product
                  </h1>
                  <div className="my-4">
                    <label
                      htmlFor="name"
                      className="block text-md mb-2 font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className={`block w-full rounded-md ${
                          errors?.name ? "border-red-500" : "border-gray-500"
                        } border shadow-sm p-3 focus:ring-primary focus:border-primary`}
                        placeholder="XYZ Product"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please Enter Name...",
                          },
                        })}
                      />
                    </div>
                    <p
                      className="mt-2 text-sm text-red-500"
                      id="email-description"
                    >
                      {errors?.name?.message}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block text-md mb-2 font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className={`block w-full rounded-md ${
                          errors?.price ? "border-red-500" : "border-gray-500"
                        } border shadow-sm p-3 focus:ring-primary focus:border-primary`}
                        placeholder="$100.000"
                        {...register("price", {
                          required: {
                            value: true,
                            message: "Please Enter Price...",
                          },
                        })}
                      />
                    </div>
                    <p
                      className="mt-2 text-sm text-red-500"
                      id="email-description"
                    >
                      {errors?.price?.message}
                    </p>
                  </div>
                  <div className="w-full flex-col pt-4 flex">
                    <button
                      type="submit"
                      className="w-full bg-primary hover:border hover:border-primary transition-all hover:bg-white hover:text-primary text-white rounded-full p-3"
                    >
                      {edit ? "Update" : "Submit"}
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="w-full transition-all text-red-500 border border-red-500 mt-4 rounded-full p-3 hover:bg-red-500 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </form>
      </Dialog>
    </Transition.Root>
  );
}
export default AddEditPopup;
