import React, {useState} from 'react';
import './Login.css';
import Title from './component/Title/Title';
import Label from './component/Label/Label';
import Input from './component/Input//Input';


const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, SetHasError] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {

            setUser(value);
            SetHasError(false);
        } else {
            if (value.length < 6) {
                setPasswordError(true);
                SetHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value);
                SetHasError(false);
            }
        }
    }
    function ifMatch(param){
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'michelle' && param.pasword === '123456') {
                const { user, pasword } = param; 
                let ac = { user, pasword };
                let account = JSON.stringify(ac);
                localStorage.set('account', account)
                setIsLogin(true);
            } else {
                setIsLogin(false);
                SetHasError(true);
            }
        } else {
            setIsLogin(false);
            SetHasError(true);
        }
    }
    function handleSubmit() {
        let account = { user, password }
        if (account) {
            ifMatch(account
            )
            // console.log('acount', account)
        }
    }
    // console.log('usuario', user)
    // console.log('password', password) 
        return (
            <div className='login-container'>
                { isLogin ?
                    <div className='home-container'>
                        <h1>hola,{user}</h1>
                        <label> Felicitaciones estas loguedo</label>
                    </div>
                    :
                    <div className='login-content'>
                        <Title text='Bienvenido' />
                        {hasError &&
                            <label className='label-alert'>
                                su contraseña o usuario son incorrectos
                        </label>
                        }
                        <Label text='Usuario' />
                        <Input
                            attribute={{
                                id: 'usuario',
                                name: 'usuario',
                                type: 'text',
                                placehorder: 'ingrese su usuario'
                            }}
                            handleChange={handleChange}
                        />
                        <Label text='Contraseña' />
                        <Input
                            attribute={{
                                id: 'contraseña',
                                name: 'contraseña',
                                type: 'password',
                                placehorder: 'ingrese su contraseña'
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                        />
                        {passwordError &&
                            <label className='label-error'>
                                Contraseña invalida
                    </label>
                        }

                        <div
                            className='submit-button-container'>
                            <button
                                onClick={handleSubmit}
                                className='submit-button'>
                                Ingresar
                        </button>
                        
                        </div>

                    </div>
                }
            </div>
        )
    }


export default Login; 
