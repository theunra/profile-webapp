export default function ScrollableImageView(images){
    return (
        <>
        <div className='col' style={{
            overflow: "auto",
            whiteSpace: "nowrap",
            padding: 0,
        }}>
            {images.map((img)=><img src={`${img.src}`}></img>)}            
        </div>
      </>
    )
}