import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

const AccountList = () => {

    const [state, setData] = useState({users: ''});
    
    useEffect(() => {
        fetch("/users")
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((data) => console.log(data))
          .catch((err) => {
            console.log(err.message);
          });
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">User List</div>
                        <div className="card-body">
                          <table>
                              <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                              </thead>
                              <tbody>
                              {   
                                state?.users?.data ? 
                                    state?.users?.data?.map((user) => (
                                            <tr key={user?.id}>
                                                <td>{user?.id}</td>
                                                <td>{user?.name}</td>
                                                <td>{user?.email}</td>
                                            </tr>
                                    )) : null
                              }
                              </tbody>
                          </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountList;