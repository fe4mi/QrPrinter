"use server";
import React from "react";
// import QRCode from "react-qr-code";
import Navbar from "../components/navbar";
import { fetchProduct } from "../lib/data";
import Link from "next/link";
// import QrButtonGenerate from "../components/QR/qrButtonGenerate";
const Home = async () => {
  const products = await fetchProduct();

  console.log(products);

  return (
    <>
      <Navbar />
      {/* <QrButtonGenerate /> */}

      {/* {products?.map((product)=>(
          <div key={product.id}>
           
      

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={product.img}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.marke}</h2>
            <p>{product.model}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{product.price}</button>
            </div>
          </div>
        </div>
        </div>
        ))} */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Witaj w PureTouch QR Printer</h1>
            <p className="py-6">
              Generuj i drukuj kody za darmo!
            </p>
            <Link href="/test"><button className="btn btn-primary">Zaczynajmy!</button></Link>
            
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by PureTouch </p>
  </aside>
</footer>
    </>
  );
};
export default Home;
