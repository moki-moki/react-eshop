import * as actionTypes from "../constants/storeConstants";

export const addToCart = (id, qty) => async (dispatch) => {
  const req = await fetch(`/api/products/${id}`);
  const data = await req.json();

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.inStock,
      qty,
    },
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
};
