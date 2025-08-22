#  Next.js Product App

A simple product management application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
Users can view products publicly and add products after authentication.  

---

##  Live Demo
[Live Site Link](https://ass10-one.vercel.app/)  

##  GitHub Repository
[GitHub Repo Link](https://github.com/tomal7010/Next.js-Product-App?tab=readme-ov-file)  

---

##  Features
- **Landing Page (`/`)** with Navbar, Hero, Highlights, and Footer  
- **Login (`/login`)** with Google / Credentials using NextAuth.js  
- **Products (`/products`)** - Public product list with details  
- **Product Details (`/products/[id]`)** - View single product info  
- **Add Product (`/dashboard/add-product`)** - Protected route to add products  

---

##  Technologies
- [Next.js 15 (App Router)](https://nextjs.org/)  
- [NextAuth.js](https://next-auth.js.org/)  
- DaisyUI
- Tailwind CSS (UI)  
- Mock API with Next.js Route Handlers  

---

## Route Summary

Route	                             Access	                            Description
/	                                 Public	            Landing page with Hero + Product highlights
/login	                             Public	                  Login page with NextAuth.js
/products                            Public	                        Product list page
/products/[id]	                     Public	                      Product details page
/dashboard/add-product	            Protected	          Add new product (only for logged-in user)
/api/products	                      API	           Fetch all products (GET), add product (POST)

---

## Installation & Setup
- npx create-next-app@latest my-app 
- cd my-app
- npm install -D tailwindcss postcss autoprefixer
- npm install daisyui  
- npm install next-auth
- npm install mongodb
- npm run dev

---

## Deployment
- Push code to GitHub
- Deploy on Vercel
- Add all .env variables in Vercel dashboard
- Site will be live
