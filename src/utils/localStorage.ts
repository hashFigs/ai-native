export const storeTokenInLocalStorage = (token:string) => {
    localStorage.setItem('authToken', token);
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('authToken');
};


