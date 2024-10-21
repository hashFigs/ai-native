export const storeTokenInLocalStorage = (token:string) => {
    localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};


