import UserItem from "../components/UserItem";
import {Link} from "react-router-dom";

const UserList = () => {
    const users = [
        {id: '1', image: 'https://via.placeholder.com/300', name: 'MohammadReza', phone: '09391886467'},
        {id: '2', image: 'https://via.placeholder.com/300', name: 'Amir', phone: '09197967973'},
        {id: '3', image: 'https://via.placeholder.com/300', name: 'Mahmoud', phone: '09197967970'},
    ]

    return (
        <>
            <div className="container-fluid py-3">
                <div className="d-flex justify-content-between mb-3">
                    <h3 className="mb-0">User List</h3>
                    <Link to="/user-manager/user-modify" className="btn btn-success">Add User</Link>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {
                        users.map(u => <div className="col">
                            <Link className="text-decoration-none" to={`/user-manager/user-modify/${u.id}`}> <UserItem
                                key={u.id} user={u}/> </Link>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default UserList;
