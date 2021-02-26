export const apiGetUsers = () => {
    let urlFetch = `http://localhost:5000/users`
    return apiCall(urlFetch, 'GET');
};

export const apiPostUser = (user) => {
    let urlFetch = `http://localhost:5000/user`
    let body = JSON.stringify(user)
  return apiCall(urlFetch, 'POST', body);
};

export const apiPutUser = (userData) => {
  let urlFetch = `http://localhost:5000/user/${userData.id}`
  let body = JSON.stringify(userData)
  return apiCall(urlFetch, 'PUT', body);
};

export const apiGetRightsEnumeration = () => {
    let urlFetch = `http://localhost:5000/user/rights_enumeration`
    return apiCall(urlFetch, 'GET');
  };

export const apiCall = async (url, method, body) => {
    const headers= {};
    headers['Content-Type'] = 'application/json'
    let response = await fetch(url, { method: method, headers: headers, credentials: 'same-origin', body: body })
    return await response.json()
}
