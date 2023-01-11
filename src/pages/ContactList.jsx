import {useState} from "react";
import ContactItem from "../components/ContactItem";
import {Link} from "react-router-dom";

const ContactList = () => {
    const contact = [
        {id: '1', image: 'https://via.placeholder.com/300', name: 'MohammadReza', phone: '09391886467'},
        {id: '2', image: 'https://via.placeholder.com/300', name: 'Amir', phone: '09197967973'},
        {id: '3', image: 'https://via.placeholder.com/300', name: 'Mahmoud', phone: '09197967970'},
    ]
    const [contacts, setContacts] = useState(contact)
    return (
        <>
            <div className="container-fluid py-3">
                <div className="d-flex justify-content-between mb-3">
                    <h3 className="mb-0">Contact List</h3>
                    <Link to="/contact-modify" className="btn btn-success">Add Contact</Link>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {
                        contacts.map(c => <div className="col"><ContactItem key={c.id} contact={c}/></div>)
                    }
                </div>
            </div>
        </>
    )
}

export default ContactList;
