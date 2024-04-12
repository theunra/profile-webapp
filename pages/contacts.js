import Head from 'next/head';

export default function About() {
  return (
    <>
    <Head>
        <title>Contact me</title>
    </Head>
    <div className='row' style={{
      width: "100%",
      margin: 0,
      padding: "20px",
      position: "relative",
      color: "#074173"
    }}>
      <div className='col d-inline-block'>
        <div style={{
          fontSize: "30pt",
          fontWeight: "600",
        }}>Contact Me</div>
        <div className='d-flex' style={{alignItems: "center"}}>
          <i className="bi bi-envelope" style={{fontSize: "20pt", margin: "5px"}}></i>
          <div style={{fontSize: "20px", color: "#1679AB"}}>diandrarizqy8@gmail.com</div>
        </div>        
        <div className='d-flex' style={{alignItems: "center"}}>
          <i class="bi bi-linkedin" style={{fontSize: "20pt", margin: "5px"}}></i>
          <div style={{fontSize: "20px", color: "#1679AB"}}>diandra-rizqyy</div>
        </div>
        <div className='d-flex' style={{alignItems: "center"}}>
          <i className="bi bi-instagram" style={{fontSize: "20pt", margin: "5px"}}></i>
          <div style={{fontSize: "20px", color: "#1679AB"}}>2andrary</div>
        </div>
      </div>
    </div>
    </>
        
  );
}