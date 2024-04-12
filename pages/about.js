import Head from 'next/head';
import selfphoto from '../public/fotodiri.png';

export default function About() {
  return (
    <>
    <Head>
        <title>About me</title>
    </Head>
    <div className='row' style={{
      width: "100%",
      margin: 0,
      position: "relative",
    }}>
      <div className='col' style={{
        width: "100%",
        height: "20vh",
        background: "linear-gradient(90deg, rgba(7,65,115,1) 0%, rgba(13,123,217,1) 100%)",
       }}>
      </div>
      <div style={{
        width: "14vw",
        height: "14vw",
        position: "absolute",
        top: "2vw",
        right: "4vw",
        borderRadius: "1000px",
        backgroundImage: `url(${selfphoto.src})`,
        backgroundSize: "cover",
      }}></div>
    </div>
    <div className='row' style={{
      width: "100%",
      margin: 0
    }}>
      <div className='col'>
        <div className='row'>
          <div className='col'>
            <span style={{
              fontSize: "24pt",
              fontWeight: "600",
            }}>Profile</span>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <span style={{
              fontWeight: "500",
            }}>My name is Diandra Rizqy Yodatama, undergraduate Electronics and Instrumentation student at Universitas Gadjah Mada. I am interested in embedded systems, IoT and control systems. Experienced as a hardware and software programmer in several projects and  activities.</span>
          </div>
        </div>
      </div>
      <div className='col-4'></div>
    </div>
    </>
        
  );
}