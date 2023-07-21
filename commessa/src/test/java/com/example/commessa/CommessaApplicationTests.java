package com.example.commessa;

import com.example.commessa.model.Commessa;
import com.example.commessa.repository.CommessaRepository;
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

    // questa funzione da qualche problema
    @Test
    public void AggiornamentoCommessaNoIdChange() {

        // Ottieni la commessa dal database
        Commessa commessa = commessaRepository.findById(commessaId).orElse(null);
        assertNotNull(commessa, "La commessa con l'ID specificato non esiste nel database");

        // Salva l'ID originale
        int originalId = commessa.getId();

        commessa.setId(4);

        // il problema si presenta da qui.
        assertThrows(DataIntegrityViolationException.class, () -> commessaRepository.save(commessa));

        // Verifica che l'ID non sia stato cambiato nel database
        Commessa updatedCommessa = commessaRepository.findById(commessaId).orElse(null);
        assertNotNull(updatedCommessa, "La commessa con l'ID specificato non esiste nel database");
        assertEquals(originalId, updatedCommessa.getId(), "L'ID della commessa non dovrebbe essere cambiato dopo il tentativo di aggiornamento");
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
