const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // Check product if exists
      const exist = state.find((x) => x._id === product._id);
      if (exist) {
        // Increase Quantity
        return state.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty + 1, sub_total: (x.qty + 1) * x.price } : x
        );
      }

      return [
        ...state,
        {
          ...product,
          qty: 1,
          sub_total: product.price
        },
      ];

    case "DELITEM":
      const exist1 = state.find((x) => x._id === product._id);
      if (exist1.qty === 1) {
        return state.filter((x) => x._id !== exist1._id);
      } else {
        return state.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty - 1, sub_total: (x.qty - 1) * x.price } : x
        );
      }

    case "RMVITEM":
      const exist2 = state.find((x) => x._id === product._id);
      if (exist2.qty) {
        return state.filter((x) => x._id !== exist2._id);
      }

    default:
      return state;
      
  }
};

export default handleCart;
