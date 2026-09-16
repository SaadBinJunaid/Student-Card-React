function Card({ name, classname, imageUrl, grade }){
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>Class: {classname}</p>
            <p>Grade: {grade}</p>
        </div>
    )
}

export default Card