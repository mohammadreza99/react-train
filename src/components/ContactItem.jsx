const UserItem = ({user}) => {
    return (
        <div className="card">
            {/*<img src={user.image} className="card-img-top" alt={user.name}/>*/}
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.phone}</p>
            </div>
        </div>
    )
}

export default UserItem;
