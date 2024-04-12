import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../styles/global.css";
import Navbar from '../components/navbar/Navbar';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  );
}