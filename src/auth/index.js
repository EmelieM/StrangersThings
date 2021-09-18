export function storeUser(token){
    localStorage.setItem('token', JSON.stringify(token));
}

export function getToken(){
    const myToken = JSON.parse(localStorage.getItem('token'));
    return myToken
}

export function clearCurrentUser(){
    localStorage.removeItem('currentUser')
    setIsLoggedIn(false)
}