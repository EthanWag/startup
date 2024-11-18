import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState('');
    const [userName, setUserName] = useState('');

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, authToken, setAuthToken, userName, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
}