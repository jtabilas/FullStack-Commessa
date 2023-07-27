import { Component, OnInit } from '@angular/core';
import { HttpProviderService } from 'src/app/service/http-provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-comessa',
  templateUrl: './view-comessa.component.html',
  styleUrls: ['./view-comessa.component.css']
})
export class ViewComessaComponent implements OnInit {


  id: any;
  CommessaDetail: any = [];

  utenteDetail : any = [];
  organizzazioneDetail : any = [];
  riferimentoDetail : any = [];
  
  constructor(private httProvider : HttpProviderService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCommessaDetailById();
    this.getUtenteDetailById();
    this.getOrganizzazioneDetailById();
    this.getRiferimentoDetailById();
    this.matching();
  }

  getCommessaDetailById() {
    this.httProvider.getCommessaById(this.id).subscribe((data : any) => {
      if (data != null && data.body != null){
        var resultData = data.body;
        if (resultData){
          this.CommessaDetail = resultData;
          this.matching();
        }
      }
    },
    (error : any)=> {})
  }

 
  getUtenteDetailById() {
    this.httProvider.getUtente().subscribe((data : any) => {
      if ( data != null && data.body != null) {
          this.utenteDetail = data.body;
          this.matching();
      }
    })
  }

  getOrganizzazioneDetailById() {
    this.httProvider.getOrganizzazione().subscribe((data : any) => {
      if ( data != null && data.body != null) {
          this.organizzazioneDetail = data.body;
          this.matching();
      }
    })
  }

  getRiferimentoDetailById() {
    this.httProvider.getRiferimento().subscribe((data : any) => {
      if ( data != null && data.body != null) {
          this.riferimentoDetail = data.body;
          this.matching();
      }
    })
  }

  // function for match
  matching() {
    if (this.CommessaDetail && this.utenteDetail) {
      //find utente by id
      const utente = this.utenteDetail.find(
        (utente: any) => utente.id === this.CommessaDetail.idUtente
      );
      if (utente) {
        this.CommessaDetail.idUtente = utente.Utente;
        //console.log(this.CommessaDetail.idUtente);
        //console.log(utente.id);
      }

      //find organizzazione by id
      const organizzazione = this.organizzazioneDetail.find(
        (utente: any) => utente.id === this.CommessaDetail.idOrganizzazioneCliente	
      );
      if (organizzazione) {
        this.CommessaDetail.idOrganizzazioneCliente	 = organizzazione.OrganizzazioneCliente;
        //console.log(organizzazione.id);
      }

      //find riferimento by id
      const riferimento = this.riferimentoDetail.find(
        (utente: any) => utente.id === this.CommessaDetail.idRifCliente		
      );
      if (riferimento) {
        this.CommessaDetail.idRifCliente = riferimento.RiferimentoCliente;
        //console.log(riferimento.id);
      }    
    }
  }
  


}

