package com.example.serverapi.controller;

import com.example.serverapi.model.Organizazzione;
import com.example.serverapi.model.Riferimento;
import com.example.serverapi.model.Utentee;
import com.example.serverapi.service.OrganizazzioneService;
import com.example.serverapi.service.RiferimentoService;
import com.example.serverapi.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class ApiController {

    @Autowired
    private UtenteService utenteService;

    @Autowired
    private RiferimentoService riferimentoService;

    @Autowired
    private OrganizazzioneService organizazzioneService;

    @GetMapping("/utenti")
    public List<Utentee> getAllUtenti () {
        return utenteService.getAllUtente();
    }

    @GetMapping("/riferimenti")
    public List<Riferimento> getAllRiferimenti () { return riferimentoService.getAllRiferimento();}

    @GetMapping("/organizazzioni")
    public List<Organizazzione> getAllOrganizazzioni () { return organizazzioneService.getAllOrganizzazione();}

}
