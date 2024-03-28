import * as React from 'react';

/** components */

/** styles */
import '../css/main.css';

export default function Main() {
    const [account, setAccount] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isShowPass, setShowPass] = React.useState(false);

    const onChangeAccount = (event) => {
        const text = event.target.value;
        setAccount(text);
    };

    const onChangePassword = (event) => {
        const text = event.target.value;
        setPassword(text);
    };

    const onSubmit = (data) => {
        console.log('data: ', account, ' - ', password);
        fetch('https://localhost:8080', {
            method: 'post',
            body: { account, password },
        });
        alert(`Ban dang login
        Account: ${account}
        Password: ${password}`);
    };

    const handleUpdateShow = () => {
        setShowPass(!isShowPass);
    };

    return (
        <main className="main">
            <div className="form-login">
                <label htmlFor="account">Account:</label>
                <div className="input-password-wrap">
                    <input
                        name="account"
                        type="text"
                        value={account}
                        onChange={onChangeAccount}
                    />
                </div>

                <label htmlFor="password">Password:</label>
                <div className="input-password-wrap">
                    <input
                        name="password"
                        type={isShowPass ? 'text' : 'password'}
                        value={password}
                        onChange={onChangePassword}
                    />
                    <button onClick={handleUpdateShow} className="button-show">
                        {isShowPass ? 'hide' : 'show'}
                    </button>
                </div>

                <div className="button-login-wrap">
                    <button onClick={onSubmit} className="button-login">
                        Login
                    </button>
                </div>
            </div>
        </main>
    );
}
