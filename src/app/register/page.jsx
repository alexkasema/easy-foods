"use client";

import {signIn} from "next-auth/react";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    const handleFormSubmit = async(ev) => {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });
        console.log(response);
        if (response.ok) {
            setUserCreated(true);
            setEmail('');
            setPassword('');
        }
        else {
            setError(true);
        }
        setCreatingUser(false);
    }
  return (
    <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Create Account</h1>
        {userCreated && (
            <div className="my-4 text-center">
            User created.<br />
            Now you can{' '}
            <Link className="underline" href={'/login'}>Login &raquo;</Link>
            </div>
        )}
        {error && (
            <div className="my-4 text-center">
            Invalid user data
            </div>
        )}
        <form className="block max-w-xs mx-auto " onSubmit={handleFormSubmit}>
            <input type="email" placeholder="email" value={email}
                disabled={creatingUser}
                onChange={ev => setEmail(ev.target.value)} />
            <input type="password" placeholder="password" value={password}
                disabled={creatingUser}
                    onChange={ev => setPassword(ev.target.value)}/>
            <div className="flex items-center justify-center">
                <button className="btn-primary" type="submit" disabled={creatingUser}>
                Register
                </button>
            </div>
            <div className="my-4 text-center text-gray-500">
            or login with provider
            </div>
            <button
                onClick={() => signIn('google', {callbackUrl:'/'})}
                className=" btn-default gap-4">
                <Image src={'/google.png'} alt={'google'} width={24} height={24} 
            />
            Login with google
            </button>
            <div className="text-center my-4 text-gray-500 border-t pt-4">
                Existing account?{' '}
                <Link className="underline" href={'/login'}>Login here &raquo;</Link>
            </div>
        </form>
    </section>
  )
}

export default RegisterPage;