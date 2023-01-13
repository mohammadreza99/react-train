const ContactItem = ({contact}) => {
    return (
        <div className="card">
            <img src={contact.image} className="card-img-top" alt={contact.name}/>
            <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">{contact.phone}</p>
            </div>
        </div>
    )
}

export default ContactItem;
