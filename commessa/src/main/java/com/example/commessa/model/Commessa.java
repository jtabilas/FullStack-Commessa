package com.example.commessa.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;

@Entity
public class Commessa {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(length = 50)
    private String titolo;
    @Column(length = 200)
    private String descrizione;
    private String note;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
    private Date dataOraCreazione;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm")
    private Date dataOraAggiornamento;
    private int idOrganizzazioneCliente;
    private int idRifCliente;
    private int idUtente;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getDataOraCreazione() {
        return dataOraCreazione;
    }

    public void setDataOraCreazione(Date dataOraCreazione) {
        this.dataOraCreazione = dataOraCreazione;
    }

    public Date getDataOraAggiornamento() {
        return dataOraAggiornamento;
    }

    public void setDataOraAggiornamento(Date dataOraAggiornamento) {
        this.dataOraAggiornamento = dataOraAggiornamento;
    }

    public int getIdOrganizzazioneCliente() {
        return idOrganizzazioneCliente;
    }

    public void setIdOrganizzazioneCliente(int idOrganizzazioneCliente) {
        this.idOrganizzazioneCliente = idOrganizzazioneCliente;
    }

    public int getIdRifCliente() {
        return idRifCliente;
    }

    public void setIdRifCliente(int idRifCliente) {
        this.idRifCliente = idRifCliente;
    }

    public int getIdUtente() {
        return idUtente;
    }

    public void setIdUtente(int idUtente) {
        this.idUtente = idUtente;
    }
}