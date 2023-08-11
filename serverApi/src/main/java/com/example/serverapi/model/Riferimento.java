package com.example.serverapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="Riferimento")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Riferimento {
    @Id
    private Integer id;
    private String RiferimentoCliente;
}
