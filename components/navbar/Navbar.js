import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function NavbarButton(content, isCurrentPage, onClick){
    let bgcolor, tcolor;
    if(isCurrentPage) {
        bgcolor = "#074173";
        tcolor = "white";
    } else {
        bgcolor = "white";
        tcolor = "#074173";
    }

    return (
        <>
        <button style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            padding: "5px",
            backgroundColor: bgcolor,
        }} onClick={onClick}>
            <div className="" style={{
                // paddingTop: "10px",
                // paddingBottom: "10px",
                paddingLeft: "5px",
                paddingRight: "5px",
                fontSize: "18pt",
                fontWeight: "500",
                color: tcolor,
            }}>{content}</div>
        </button>
        </>
    );
}

export default function Navbar(){
    const route = useRouter();
    const [url, setUrl] = useState("/");

    useEffect(()=>{
        setUrl(route.pathname)
    },[route])

    return (
        <>
        <div className="row" style={{
            padding: "12px",
            paddingLeft: "40px",
            borderBottom: "2px solid #074173",
            width: "100%",
            margin: 0
        }}>
            <div className="col-8">
                <button style={{
                    border: "none",
                    background: "none",
                    height: "100%",
                    fontSize: "20pt",
                    fontWeight: "500",
                    color: '#074173',
                }}>
                    DIANDRA
                </button>
            </div>
            <div className="col">{NavbarButton("Home", url == '/', ()=>{route.push('/')})}</div>
            <div className="col">{NavbarButton("About", url == '/about', ()=>{route.push('/about')})}</div>
            <div className="col">{NavbarButton("Works", url.match('/works'), ()=>{route.push('/works')})}</div>
            <div className="col">{NavbarButton("Contacts", url == '/contacts', ()=>{route.push('/contacts')})}</div>
        </div>
        
        
        </>
    );
}