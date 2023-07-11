import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/it';
import dataOrg from '../data/organizzazioneCliente.json';
import dataRif from '../data/riferimentoCliente.json';
import dataUtente from '../data/utente.json';


export default function ViewCommessa() {

    const [commessa, setCommessa] = useState([]);
    const { id } = useParams();

    

    // GET operation with fetch API
    useEffect(() => {
        const fetchCommessa = async () => {
            const response = await fetch(`http://localhost:8080/commessa/${id}`);
            const data = await response.json();
            console.log(data);
            setCommessa(data);
        };
        fetchCommessa();
    }, [id]);

    // function for parsing date and time
    const formatDateItalian = (dateString) => {
        const date = moment(dateString).locale('it'); 
        return date.format('DD/MM/YYYY HH:mm:ss');
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
                    <th scope="col">Customer organization </th>
                    <th scope="col">Customer reference </th>
                    <th scope="col">Utente </th>
                    <th scope="col">Creation date and time</th>
                    <th scope="col">Date and time update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                            <tr>
                            <th scope="row" key={commessa.id}>{commessa.id}</th>
                            <td>{commessa.titolo}</td>
                            <td>{commessa.descrizione}</td>
                            <td>{commessa.note}</td>
                            {/* find real name by id */}
                            <td>
                            {
                                commessa &&
                                dataOrg.find(item => item.id === commessa.idOrganizzazioneCliente) ?
                                dataOrg.find(item => item.id === commessa.idOrganizzazioneCliente)["Organizzazione Cliente"] :
                                "N/A"
                            }
                            </td>
                            <td>
                            {commessa &&
                                dataRif.find(item => item.id === commessa.idRifCliente) ?
                                dataRif.find(item => item.id === commessa.idRifCliente)["Riferimento Cliente"] :
                                "N/A"
                            }
                            </td>
                            <td>{commessa &&
                                dataUtente.find(item => item.id === commessa.idUtente) ?
                                dataUtente.find(item => item.id === commessa.idUtente)["Utente"] :
                                "N/A"
                            }
                            </td>
                            <td>{formatDateItalian(commessa.dataOraCreazione)}</td>
                            <td>{formatDateItalian(commessa.dataOraAggiornamento)}</td>
                            </tr>
                    }
                </tbody>
            </table>
            
             <Link className="btn btn-primary mx-2" to="/">Back</Link>
                            
        </div>
    </div>
  )
}
