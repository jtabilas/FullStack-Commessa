import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AddCommessa() {

    let navigate = useNavigate();

    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [updateDateTime, setUpdateDateTime] = useState(null);

    const [commessa, setCommessa] = useState({
        titolo:"",
        descrizione:"",
        note:"",
        dataOraCreazione:"",
        dataOraAggiornamento:"",
        idOrganizzazioneCliente:"",
        idRifCliente:"",
        idUtente:"",
    });

    const {titolo, descrizione, note, idOrganizzazioneCliente, idRifCliente, idUtente} = commessa;

    // function for add current time
    useEffect(() => {
        const timer = setInterval(() => {
          setCommessa((prevCommessa) => ({
            ...prevCommessa,
            dataOraCreazione: new Date().toISOString(),
            dataOraAggiornamento: new Date().toISOString(),
          }));
        }, 1000); // Update the current time every second
      
        return () => {
          clearInterval(timer); // clean the component when finish 
        };
      }, []);

    const onInputChange=(e)=> {
        setCommessa({...commessa, [e.target.name]:e.target.value})
    }

    // POST operation with API Fetch
    const onSubmit = async (e) => {
        e.preventDefault();
    
          await fetch('http://localhost:8080/commessa', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(commessa),
          });
        alert("Complete!")
        navigate("/")
      };

    useEffect(() => {
        const currentDateTime = Date.now();
        setSelectedDateTime(currentDateTime);
        setUpdateDateTime(currentDateTime);
      }, []);

    const handleDateTimeChange = (dateTime) => {
      setSelectedDateTime(dateTime);
      setCommessa({ ...commessa, dataOraCreazione: dateTime });
    };

    const handleUpdateDateTimeChange = (dateTime) => {
        setUpdateDateTime(dateTime);
        setCommessa({ ...commessa, dataOraAggiornamento: dateTime });
      };

  return (
    <div className="container">
    
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"> Commessa Form</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="titolo" className="form-tabel">
                        Title
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    name="titolo"
                    value={titolo}
                    onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descrizione" className="form-tabel">
                        Description
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    name="descrizione"
                    value={descrizione}
                    onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="note" className="form-tabel">
                        Note
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    name="note"
                    value={note}
                    onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="idOrganizzazioneCliente" className="form-tabel">
                    Id Organizzazione Cliente
                    </label>
                    <input 
                    type={"number"}
                    className="form-control"
                    name="idOrganizzazioneCliente"
                    value={idOrganizzazioneCliente}
                    onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="idRifCliente" className="form-tabel">
                    Id Riferimento Cliente
                    </label>
                    <input 
                    type={"number"}
                    className="form-control"
                    name="idRifCliente"
                    value={idRifCliente}
                    onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="idUtente" className="form-tabel">
                    Id Utente
                    </label>
                    <input 
                    type={"number"}
                    className="form-control"
                    name="idUtente"
                    value={idUtente}
                    onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="DateTime" className="form-tabel">
                    Date and time creation
                    </label>
                    <br />
                    <DatePicker
                    selected={selectedDateTime}
                    onChange={handleDateTimeChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={1}
                    dateFormat="dd/MM/yyyy HH:mm"
                    className="form-control"
                    name="dateTime"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="UpdateDateTime" className="form-tabel">
                    Date and time update
                    </label>
                    <br />
                    <DatePicker
                    selected={updateDateTime}
                    onChange={handleUpdateDateTimeChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={1}
                    dateFormat="dd/MM/yyyy HH:mm"
                    className="form-control"
                    name="UpdateDateTime"
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Sumbit</button>
                <Link className="btn btn-outline-danger mx-2" type="submit" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    
    </div>
  )
}
