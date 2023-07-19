// Adding Item to Cart

export const addCart = (product) =>{
  return {
    type: "ADDITEM",
    payload: product
  }
}

// Delete to Cart

export const delCart = (product) =>{
  return {
    type: "DELITEM",
    payload: product
  }
}

// Remove Item

export const rmvCart = (product) =>{
  return {
    type: "RMVITEM",
    payload: product
  }
}


