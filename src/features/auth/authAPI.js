
// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(process.env.REACT_APP_BACKEND + "/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' }
    })
    const data = await response.json()
    resolve({ data })
  }
  );
}

// A mock function to mimic making an async request for data
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try{
      const response = await fetch(process.env.REACT_APP_BACKEND + "/auth/login",{
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json'}
      })
      if(response.ok){
        const data = await response.json()
        resolve({data})
      } else{
        const error = await response.json()
        reject(error)
      }
        
  } catch(error){
    reject(error)
  }

});
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    
    resolve({ data: 'success' })
  }
  );
}