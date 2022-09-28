import { useFetch } from "../helper/usefetch";
import { toast } from "react-toastify";
// Constant
export const GET_ALL_PRODUCTS = "GET ALL PRODUCTS [APP][PRODUCTS]";
export const HANDLE_LOADER = "HANDLE LOADER [APP][PRODUCTS]";
export const HANDLE_EDIT = "HANDLE EDIT PRODUCT [APP][PRODUCTS]";
// Functions
export const toggleLoader = () => {
  return {
    type: HANDLE_LOADER,
  };
};

export const getAllProduct =
  (skip = 0, take = 1000) =>
  (dispatch) => {
    dispatch(toggleLoader());
    return useFetch
      .get("product", {
        params: {
          skip,
          take,
        },
      })
      .then((res) => {
        const {
          data: { result },
        } = res;
        dispatch(toggleLoader());
        return dispatch({
          type: GET_ALL_PRODUCTS,
          payload: result,
        });
      });
  };

export const createProduct = (payload) => (dispatch) => {
  dispatch(toggleLoader());
  return useFetch
    .post("product", payload)
    .then(() => {
      toast.success("Product Created!");
      dispatch(toggleLoader());
      return dispatch(getAllProduct());
    })
    .catch(() => {
      dispatch(toggleLoader());
      toast.error("Something Went Wrong!");
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch(toggleLoader());
  return useFetch
    .delete(`product/${id}`)
    .then(() => {
      toast.success("Product Deleted!");
      dispatch(toggleLoader());
      return dispatch(getAllProduct());
    })
    .catch(() => {
      dispatch(toggleLoader());
      toast.error("Something Went Wrong!");
    });
};

export const handleEdit = (payload) => {
  return {
    type: HANDLE_EDIT,
    payload,
  };
};

export const getEditProduct = (_id) => (dispatch) => {
  return useFetch.get(`product/${_id}`).then((res) => {
    const {
      data: { result },
    } = res;
    return dispatch(handleEdit(result));
  });
};

export const updateProduct = (id, payload) => (dispatch) => {
  dispatch(toggleLoader());
  return useFetch
    .patch(`product/${id}`, payload)
    .then(() => {
      toast.success("Product Updated!");
      dispatch(toggleLoader());
      return dispatch(getAllProduct());
    })
    .catch(() => {
      dispatch(toggleLoader());
      toast.error("Something Went Wrong!");
    });
};
