import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, isAuthenticated, setIsAuthenticated, userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};