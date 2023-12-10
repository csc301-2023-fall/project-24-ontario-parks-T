const oneImage = (props) => {
    const path = props.path;
    return(
        <img className="mx-auto d-block img-fluid" src={path} alt="" style={{width: 100 + "px", height: 100 + "px"}}/>
    )
}

export default oneImage;