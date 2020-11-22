import React from "react";
import Head from "next/head";
import {RecoilRoot} from "recoil";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

const App = ({Component, pageProps}) => (
    <RecoilRoot>
        <Head>
            <title>Counters!</title>
            <meta name="viewport" content="width=device-width, initial-scale=" />
        </Head>
        <Component {...pageProps} />
    </RecoilRoot>
);

export default App;