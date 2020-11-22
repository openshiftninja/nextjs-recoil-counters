import Head from 'next/head'
import React from "react";
import Counters from "../components/Counters";

export default function Home() {
  return (
    <div className="rootContainer">
      <Head>
        <title>Counters!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Counters />
    </div>
  )
}
