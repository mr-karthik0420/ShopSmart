import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import AdminNavbar from '../AdminNavbar';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock users data for demo
    const mockUsers = [
      { _id: '1', username: 'john_doe', email: 'john@example.com' },
      { _id: '2', username: 'jane_smith', email: 'jane@example.com' },
      { _id: '3', username: 'bob_wilson', email: 'bob@example.com' },
    ];
    setUsers(mockUsers);
  }, []);

  const deleteData = (userId) => {
    setUsers(users.filter(user => user._id !== userId));
    alert('User deleted successfully');
  };

  return (
    <div>
      <AdminNavbar />
      <div style={{ paddingTop: '12vh' }}>
        <h1 className='text-center'>Users Management</h1>
        <div style={{ display: "flex", justifyContent: "center", marginTop: '2rem' }}>
          <Table striped bordered hover style={{ width: "80%" }}>
            <thead>
              <tr>
                <th>Sl/No</th>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button 
                      onClick={() => deleteData(item._id)} 
                      style={{ border: 'none', color: 'red', background: 'none' }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Users;