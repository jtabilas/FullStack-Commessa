package com.example.serverapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="Organizazzione")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Organizazzione {
    @Id
    private Integer id;
    private String OrganizzazioneCliente;
}
