package com.example.serverapi.service;

import com.example.serverapi.model.Organizazzione;
import com.example.serverapi.repository.OrganizazzioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizazzioneService {

    @Autowired
    private OrganizazzioneRepository organizazzioneRepository;

    public List<Organizazzione> getAllOrganizzazione() {
        return (List<Organizazzione>) organizazzioneRepository.findAll();
    }

}
