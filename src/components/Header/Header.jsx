"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useContext } from "react";
import { CartContext } from "../AuthProvider/AuthProvider";
import ShoppingCart from "../Icons/ShoppingCart";

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">
          Hello, {userName}
        </Link>
        <button onClick={() => signOut()} className="bg-primary btn-primary">
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"} className="btn-primary">
          Register
        </Link>
      </>
    );
  }
}

const Header = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  const { cartProducts } = useContext(CartContext);
  let userName = userData?.name || userData?.email;

  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header>
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href={"/"} className="text-primary font-semibold text-2xl">
            Easy Foods
          </Link>
          <Link
            href={"/"}
            className="hover:-translate-y-2 duration-500 transition-all"
          >
            Home
          </Link>
          <Link
            href={"/menu"}
            className="hover:-translate-y-2 duration-500 transition-all"
          >
            Menu
          </Link>
          <Link
            href={"/#about"}
            className="hover:-translate-y-2 duration-500 transition-all"
          >
            About
          </Link>
          <Link
            href={"/#contact"}
            className="hover:-translate-y-2 duration-500 transition-all"
          >
            Contact
          </Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute mr-3 -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <AuthLinks status={status} userName={userName} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
