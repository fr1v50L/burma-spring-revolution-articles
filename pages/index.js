import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Burma Spring Revolution Articles</title>
      </Head>
      <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
        <Hero />
      </div>
    </React.Fragment>
  );
}
