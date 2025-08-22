"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react"


export default function Navbar() {

  const { data : session, status } = useSession();
  console.log(session);


  return (

    <div className="pb-16">



      <nav className="navbar bg-orange-100 shadow-sm fixed top-0 w-full z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/products"}>Products</Link></li>

          { status == "authenticated" ? (
      <>
      <li><Link href={"/dashboard/add-product"}>Add Product</Link></li>
      </>) : (
        <>
            
        </>
    )}

        
      </ul>
    </div>
    
    <Link href={"/"} className="btn btn-ghost text-xl">Next JS</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/products"}>Products</Link></li>
      

          { status == "authenticated" ? (
      <>
      <li><Link href={"/dashboard/add-product"}>Add Product</Link></li>
      </>) : (
        <>
            
        </>
    )}


      
    </ul>
  </div>
  <div className="navbar-end">

    { status == "authenticated" ? (
      <>
      <button className="btn" onClick={() => signOut()}> Log Out </button>
      </>) : (
        <>
            <Link href={"/login"}>
    <button className="btn">Login</button>
    </Link>
        </>
    )}


  </div>
</nav>



    </div>
    
  );
}
