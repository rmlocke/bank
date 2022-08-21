import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

const AccountList = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/users")
        .then((response) => response.json())
        .then(setData)
        .catch(setError);
    }, []);

    if (loading) {
      //
    }

    if (error) {
      return <pre>{JSON.stringify(error)}</pre>
    }

    if (!data) {
      return null;
    }
    
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
                                data ? 
                                    data.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
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