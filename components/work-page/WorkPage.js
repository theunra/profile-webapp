import ProjectDescription from "./ProjectDescription";
import ScrollableImageView from "./ScrollableImageView";

export default function WorkPage(name, projectDescriptions, bannerImg, images){
    return (
        <>
        <div className='row' style={{
          width: "100%",
          margin: 0,
          position: "relative",
        }}>
          <div className='col' style={{
            width: "100%",
            height: "25vh",
            background: "linear-gradient(90deg, rgba(7,65,115,1) 0%, rgba(13,123,217,1) 100%)",
            backgroundImage: `url(${bannerImg.src})`,
            backgroundSize: "cover",
            filter: "brightness(50%)",
           }}></div>
          <div style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            color: "white",
            fontSize: "50pt",
            fontWeight: "600",
          }}>{name}</div>
        </div>
        <div className='row' style={{
          width: "100%",
          margin: 0,
          position: "relative",
          height: "50vh",
          padding: "20px",
        }}>
          {ProjectDescription(projectDescriptions.desc, projectDescriptions.roles)}
          {ScrollableImageView(images)}
        </div>
        </>
      );
}