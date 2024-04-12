import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import fukurobot from '../public/fukurobot.png';
import smartcoffee from '../public/smartcoffee.png';

export default function Home() {
  const router = useRouter();

  return (
    <>
    <Head>
        <title>Home</title>
    </Head>
    <div className='row' style={{
      backgroundColor: "#074173",
      height: "100vh",
      width: "100%",
      margin: 0
    }}>
      <div className='col' style={{
          paddingTop: "30vh",
        }}>
        <div className='row'>
          <div className='col'></div>
          <div className='col-6 text-start' style={{
            color: "white",
            fontWeight: "600",
            fontSize: "35pt",
          }}>
            Hi,<br/>I'm <span style={{color: "#5DEBD7"}}>Diandra</span><br/>Nice to meet you
          </div>
          <div className='col'></div>
        </div>
        <div className='row' style={{
        }}>
          <div className='col'></div>
          <div className='col'>
            <button style={{
              border: "none",
              backgroundColor: "white",
              borderRadius: "20px",
              paddingLeft: "30px",
              paddingRight: "30px",
              fontWeight: "500",
              fontSize: "18pt",
              color: "#074173",
            }} onClick={()=>{router.push('/contacts')}}>
              Contact me
            </button>
          </div>
          <div className='col'></div>
        </div>
      </div>
      <div className='col' style={{
        backgroundColor: "red",
      }}>
        <div className='row' style={{
          height: "100%"
        }}>
          <div className='col p-0 m-0' style={{position: "relative"}}>
            <button style={{
              border: "none",
              padding: 0,
              margin: 0,
              width:"100%", 
              height: "100%",
              clipPath: "polygon(0 0, 0 100vh, 100% 0, 0 0)",
              position: "absolute",
              top: 0,
              left: 0,
              display: "inline-flex",
              textAlign: "start",
              backgroundImage: `url(${smartcoffee.src})`,
              backgroundSize: "cover",
              }} onClick={()=>{router.push('/works')}}>
              <span style={{position:"absolute", left: 0, fontSize: "50pt", marginLeft: "30px",fontWeight: "600", color: "white"}}>My<br/>Works</span>
            </button>
            <button style={{
              border: "none",
              padding: 0,
              margin: 0,
              width:"100%", 
              height: "100%",
              clipPath: "polygon(100vh 100%, 0 100vh, 100% 0, 100% 100vh)",
              position: "absolute",
              top: 0,
              left: 0,
              display: "inline-flex",
              alignItems: "flex-end",
              textAlign: "end",
              backgroundImage: `url(${fukurobot.src})`,
              backgroundSize: "cover",
              }} onClick={()=>{router.push('/about')}}>
              <span style={{position:"absolute", right: 0, fontSize: "50pt", marginRight: "30px",fontWeight: "600", color: "white"}}>About<br/>Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
        
  );
}