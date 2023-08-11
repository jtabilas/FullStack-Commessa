package com.example.serverapi.repository;

import com.example.serverapi.model.Organizazzione;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.repository.CrudRepository;

public interface OrganizazzioneRepository extends CrudRepository<Organizazzione, Integer> {
}
