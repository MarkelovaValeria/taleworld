const CardCourse = ({path, description}) => {
    return(
        <div>
            <img src={path} alt="" />
            <p>{description}</p>
        </div>
    )
}

export default CardCourse