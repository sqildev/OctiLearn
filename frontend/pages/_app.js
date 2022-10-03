import React from "react";
import Layout from "../components/Layout";
import '../styles/globals.css';

const App = ({Component, pageProps}) => {
    return(
      <Layout className="w-5/6 m-auto">
        <Component {...pageProps}/>
      </Layout>
    )
}

export default App;