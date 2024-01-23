import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserValue = (props) => {
    const [ user, setUser ] = useState({ name: null,
                                        branch: null,
                                        year: null,
                                        email: null,
                                        phone: null,
                                        password: null,
                                        role: null })

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            { props.children }
        </UserContext.Provider>
    );
};