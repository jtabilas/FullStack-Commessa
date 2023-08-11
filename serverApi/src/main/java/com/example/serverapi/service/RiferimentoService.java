package com.example.serverapi.service;

import com.example.serverapi.model.Riferimento;
import com.example.serverapi.repository.RiferimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiferimentoService {

    @Autowired
    private RiferimentoRepository riferimentoRepository;

    public List<Riferimento> getAllRiferimento () {
        return (List<Riferimento>) riferimentoRepository.findAll();
    }



}
