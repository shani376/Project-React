import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user.context';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const SignIn = () => {
    const { login }  = useContext(UserContext);
    // controlled 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signin = (e) => {
        e.preventDefault();
        login(username, password);
        setUsername('');
        setPassword('');
    }

    return <form onSubmit={signin}>
        <Input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}  prefix={<UserOutlined />} /> <br />
        <Input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit"> sign in </button>
    </form>
}


