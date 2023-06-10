



const Card = (props) => {

    const { id, name, email } = props;

    return (
        <div key={id} className="card-container">
            <img alt="monster" className="img-fluid" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>


    )
}

export default Card