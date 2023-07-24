package com.example.commessa;

import com.example.commessa.model.Commessa;
import com.example.commessa.exception.IdChangeNotAllowedException;
import com.example.commessa.repository.CommessaRepository;
import com.example.commessa.service.CommessaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class CommessaApplicationTests {

    @Autowired
    CommessaRepository commessaRepository;

    @Autowired
    CommessaService commessaService;

    int commessaId = 1;

    @Test
    public void inserimentoNuovaCommessa() {
        Commessa commessa = new Commessa();
        commessa.setId(commessaId);
        commessa.setTitolo("test titolo");
        commessa.setDescrizione("test desc");
        commessa.setNote("test note");
        commessa.setDataOraCreazione(new Date());
        commessa.setDataOraAggiornamento(new Date());
        commessa.setIdUtente(31);
        commessa.setIdRifCliente(24);
        commessa.setIdOrganizzazioneCliente(43);

        //salvo la commessa
        commessaRepository.save(commessa);
        // trova la commessa appena creata by id
        assertNotNull(commessaRepository.findById(commessaId).get());
    }

    @Test
    public void AggiornamentoCommessa() {
        Commessa updatedCommessa = this.commessaRepository.findById(commessaId).get();
        // modifico il titolo
        updatedCommessa.setTitolo("new title");
        commessaRepository.save(updatedCommessa);
        assertNotNull(updatedCommessa);
        // verifico se è stato aggiornato correttamente
        assertNotEquals("test titolo", commessaRepository.findById(commessaId).get().getTitolo());
    }

    @Test
    public void InserimentoNuovaCommessaNoDup() {
        Commessa commessa = new Commessa();
        commessa.setId(commessaId);
        commessa.setTitolo("test4 titolo");
        commessa.setDescrizione("test2 desc");
        commessa.setNote("test2 note");
        commessa.setDataOraCreazione(new Date());
        commessa.setDataOraAggiornamento(new Date());
        commessa.setIdUtente(316);
        commessa.setIdRifCliente(264);
        commessa.setIdOrganizzazioneCliente(643);

        // verifico se l'id è già presente
        boolean result = commessaRepository.existsById(commessaId);
        //se è gia presente mi lancia l'eccezzione
        if (result) {
            throw new DataIntegrityViolationException("Commessa con ID duplicato");
        }
        // altrimenti salva le modifiche
        else {
            commessaRepository.save(commessa);
        }
    }


    @Test
    public void AggiornamentoCommessaNoIdChange() {
        Commessa commessaToUpdate = commessaRepository.findById(commessaId).orElse(null);
        assertNotNull(commessaToUpdate, "La commessa con l'ID specificato non esiste nel database");

        // salva l'ID originale
        int originalId = commessaToUpdate.getId();

        // prova a cambiare l'ID
        int updateId = 4;
        commessaToUpdate.setId(updateId);


        // verifica che l'eccezione venga lanciata quando si prova a salvare l'entità con l'ID cambiato
        assertThrows(IdChangeNotAllowedException.class, () -> commessaService.updateComessa(commessaToUpdate,originalId));

        // verifica che l'ID non sia stato cambiato nel database
        Commessa updatedCommessa = commessaRepository.findById(commessaToUpdate.getId()).orElse(null);
        assertNotNull(updatedCommessa, "La commessa con l'ID " + updateId + " non esiste nel database");
    }

    @Test
    public void EliminazioneCommessa() {
        // prima di eliminare controllo se la commessa è presente nel db
        Commessa deleteCommessa = commessaRepository.findById(commessaId).orElse(null);
        assertNotNull(deleteCommessa, "La commessa con l'ID specificato non esiste nel database");

        commessaRepository.deleteById(deleteCommessa.getId());
        // verifica la corretta eliminazione della commessa nel db
        Optional<Commessa> commessa = this.commessaRepository.findById(commessaId);
        assertFalse(commessa.isPresent());
    }






}
