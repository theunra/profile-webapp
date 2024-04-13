export default function ProjectDescription(projectDesc, roles){
    return (
        <>
            <div className='col-8 d-block' style={{
            }}>
            <div style={{
                fontWeight: "600",
                fontSize: "30pt",
                color: "#074173",
            }}>Description</div>
            <div style={{
                fontSize: "16pt",
            }}>{projectDesc}</div>
            <div style={{
                fontWeight: "600",
                fontSize: "30pt",
                color: "#074173",
            }}>Role</div>
            {roles.map((role =>{
                return (
                    <>
                    <div style={{
                        fontSize: "20pt"
                    }}>{role.name}</div>
                    <ul>
                        {role.works.map((work)=>{
                            return (
                                <li>{work}</li>
                            );
                        })}
                    </ul>
                    </>
                ); 
            }))}
            
            
            </div>
        </>
    );
}