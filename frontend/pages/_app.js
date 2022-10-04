import React from "react";
import "../styles/globals.css";
import wrapper from "../state/store";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};
//export default App
export default wrapper.withRedux(App);
