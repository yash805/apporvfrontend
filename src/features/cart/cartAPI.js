export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(process.env.REACT_APP_BACKEND + "/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' }
    })
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch(process.env.REACT_APP_BACKEND + "/cart?user="+userId)
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(process.env.REACT_APP_BACKEND + "/cart/"+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' }
    })
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch(process.env.REACT_APP_BACKEND + "/cart/"+itemId, {
      method: "DELETE",
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json()
    resolve({data:{id:itemId}});
  }
  );
}

export function resetCart(userId) {
  return new Promise(async (resolve) => {
 const response = await fetchItemsByUserId(userId)
 const items = response.data;
 for(let item of items){
      await deleteItemFromCart(item.id)
 }
 resolve({status:'success'})

})
}
