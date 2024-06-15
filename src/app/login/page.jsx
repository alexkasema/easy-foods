"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <div className="flex items-center justify-center">
          <button
            className="btn-primary"
            disabled={loginInProgress}
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className=" btn-default gap-4 "
        >
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Don&apos;t have an account?{" "}
          <Link className="underline" href={"/register"}>
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
