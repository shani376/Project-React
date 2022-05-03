import React, { useState, useEffect } from 'react';
import axios from 'axios';

// פונקציה שיוצרת משתנה מסוג context
// זהוא מעין קומפוננטה / מחלקה שצריך להשתמש בה במקומות שרוצים ליצור קונטקסט
export const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
    const {children}  = props;
    console.log(children);
    const [user, setUser] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setUser({ name: 'aaaa', birthday: '10-11-2012' });
        }, 2000);
    }, []);

    const userOptions = {
        user,
        async login(username, password) {
            try {
                const {  data: user} = await axios.post('http://localhost:8080/user/login', {
                    username,
                    password
                });
                if (user?.name) {
                    console.log('user exists');
                }
                debugger
            } catch (error) {
                console.error('error to sign in', error);
                alert('error');
            }
        },
        logout() {
            alert('logout');
            setUser({ name: '' })
        },
        update() {},
    }

    return <UserContext.Provider value={userOptions} >
        {  children }
    </UserContext.Provider>
}