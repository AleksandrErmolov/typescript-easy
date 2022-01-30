import React, { FC, useState } from 'react';

export const Post: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [tokken, setTokken] = useState<string>('')

    console.log("email", email)
    console.log("password", password)


    const getTokken = () => {

        const auth = {
            'email': email,
            'password': password,
        }
        fetch('https://8.react.pages.academy/six-cities/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(auth)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });

    }


    return (

        <div>
            <label>
                e-mail
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            </label>

            <label>
                Пароль
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </label>
            <button onClick={getTokken}>Отправить запрос!</button>

        </div>)
};
