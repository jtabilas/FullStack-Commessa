package com.example.commessa.service;
import com.example.commessa.model.Commessa;

import java.util.List;

public interface CommessaService {
    // save operation
    Commessa saveCommessa(Commessa commessa);
    // read operation
    List<Commessa> fetchCommessa();
    Commessa getCommessa(Integer id);

    // update operation
    Commessa updateComessa(Commessa commessa, Integer id);
    // delete operation
    void deleteCommessa(Integer id);
}
