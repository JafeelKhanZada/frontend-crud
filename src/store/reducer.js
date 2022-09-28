import { GET_ALL_PRODUCTS, HANDLE_LOADER, HANDLE_EDIT } from "./action";

const init = {
  products: [],
  edit: null,
  loader: false,
};
const Reducer = (state = init, action) => {
  switch (action?.type) {
    case HANDLE_EDIT: {
      return {
        ...state,
        edit: action?.payload,
      };
    }
    case HANDLE_LOADER: {
      return {
        ...state,
        loader: !state.loader,
      };
    }
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action?.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Reducer;
