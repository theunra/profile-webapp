import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import smartcoffee_vbanner from '../../public/smartcoffee_vbanner.png';
import karhutla_vbanner from '../../public/karhutla_vbanner.png';
import brin_vbanner from '../../public/brin_vbanner.png';
import aeroponik_vbanner from '../../public/aeroponik_vbanner.png';

export default function Works() {
  const router = useRouter();

  function BannerItem(name, image, onClick){
    return (
      <button className='col' style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        border: "none",
      }} onClick={onClick}>
        <div className='d-block' style={{
          height: "100%",
          color: "white",
          fontSize: "40pt",
          fontWeight: "500",
          alignItems: "center",
          alignContent: "center",
          // backgroundColor : "red",
          textAlign: "center"
        }}>
          <span>{name}</span>
        </div>
      </button>
    );
  }

  function RouteTo(route){
    router.push('/works/' + route )
  }
  
  

  return (
    <>
    <Head>
        <title>My works</title>
    </Head>
    <div className='row' style={{
      width: "100%",
      height: "100vh",
      margin: 0,
      position: "relative",
      color: "#074173"
    }}>
      {BannerItem(<>Karhutla<br/>Project</>, karhutla_vbanner, ()=>{RouteTo('');})}
      {BannerItem(<>Aeroponik<br/>Project</>, aeroponik_vbanner, ()=>{RouteTo('aeroponik');})}
      {BannerItem(<>Integrated<br/>Watershed<br/>Monitoring<br/>System</>, brin_vbanner, ()=>{RouteTo('');})}
      {BannerItem(<>Smart<br/>Coffee<br/>Roaster</>, smartcoffee_vbanner, ()=>{RouteTo('smart-coffee');})}
    </div>
    </>
  );
}