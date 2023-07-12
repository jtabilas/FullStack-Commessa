import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [commessa, setCommessa] = useState([]);

    // GET operation with fetch API
    useEffect(() =>{
      const fetchCommessa = async () => {
        const response = await fetch('http://localhost:8080/commessa');
        const data = await response.json();
        console.log(data);
        setCommessa(data);
      };
      fetchCommessa();
    },[]);

    // DELETE operation with fetch API
    const deleteCommessa = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            let response = await fetch(
                `http://localhost:8080/commessa/${id}`,
                {
                    method: 'DELETE',
                }
            );
        if (response.status === 200) {
            setCommessa(
               commessa.filter((comm) => {
                  return comm.id !== id;
               })
            );
         } else {
            return;
         }
        }
     };


  return (
    <div className="container">
        <div className="py-4">
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Note</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        commessa.map((commessa)=>(
                            <tr key={commessa.id}>
                            <th scope="row" key={commessa.id}>{commessa.id}</th>
                            <td>{commessa.titolo}</td>
                            <td>{commessa.descrizione}</td>
                            <td>{commessa.note}</td>
                            <td>
                                <Link className="btn btn-primary mx-2"  to={`/viewcommessa/${commessa.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/editcommessa/${commessa.id}`} >Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={() => deleteCommessa(commessa.id)}>Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
