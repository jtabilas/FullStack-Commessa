package com.example.commessa.controller;

import com.example.commessa.model.Commessa;
import com.example.commessa.service.CommessaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CommessaController {

    @Autowired
    private CommessaService commessaService;

    // save operation
    @PostMapping("/commessa")
    public Commessa saveComessa(@RequestBody Commessa commessa){
        return commessaService.saveCommessa(commessa);
    }

    // read operation
    @GetMapping("/commessa")
    public List<Commessa> fetchCommessa(){
        return commessaService.fetchCommessa();
    }

    // read operation by id
    @GetMapping("/commessa/{id}")
    public Commessa getCommessa(@PathVariable Integer id) {
        return commessaService.getCommessa(id);
    }

    // update operation
    @PutMapping("/commessa/{id}")
    public Commessa updateCommessa(@RequestBody Commessa commessa, @PathVariable Integer id){
        return commessaService.updateComessa(commessa, id);
    }

    // delete operation
    @DeleteMapping("/commessa/{id}")
    public void deleteCommessa(@PathVariable Integer id){
        commessaService.deleteCommessa(id);
    }

}
