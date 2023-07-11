package com.example.commessa.service;

import com.example.commessa.model.Commessa;
import com.example.commessa.repository.CommessaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommessaServiceImpl implements CommessaService{

    @Autowired
    private  CommessaRepository commessaRepository;

    // Save operation
    @Override
    public Commessa saveCommessa(Commessa commessa){
        return commessaRepository.save(commessa);
    }

    // Read operation
    @Override
    public List<Commessa>  fetchCommessa(){
        return commessaRepository.findAll();
    }

    // Read operation by id
    @Override
    public Commessa getCommessa(Integer id){
        return commessaRepository.findById(id).orElseThrow();
    }

    // Update operation
    @Override
    public Commessa updateComessa(Commessa commessa, Integer id){
        Commessa commessaToUpdate = commessaRepository.findById(id).orElseThrow();

        commessaToUpdate.setDataOraAggiornamento(commessa.getDataOraAggiornamento());
        commessaToUpdate.setDataOraCreazione(commessa.getDataOraCreazione());
        commessaToUpdate.setDescrizione(commessa.getDescrizione());
        commessaToUpdate.setTitolo(commessa.getTitolo());
        commessaToUpdate.setIdUtente(commessa.getIdUtente());
        commessaToUpdate.setNote(commessa.getNote());
        commessaToUpdate.setIdOrganizzazioneCliente(commessa.getIdOrganizzazioneCliente());
        commessaToUpdate.setIdUtente(commessa.getIdUtente());
        commessaToUpdate.setIdRifCliente(commessa.getIdRifCliente());

        return commessaRepository.save(commessaToUpdate);
    }

    // Delete operation
    @Override
    public void deleteCommessa(Integer id){
        commessaRepository.deleteById(id);
    }


}
