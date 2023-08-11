package com.example.serverapi.service;

import com.example.serverapi.model.Utentee;
import com.example.serverapi.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UtenteService {

    @Autowired
    private UtenteRepository utenteRepository;

    public List<Utentee> getAllUtente() {
        return (List<Utentee>) utenteRepository.findAll();
    }
}
