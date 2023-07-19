import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from 'src/app/service/http-provider.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-commessa',
  templateUrl: './edit-commessa.component.html',
  styleUrls: ['./edit-commessa.component.css']
})
export class EditCommessaComponent implements OnInit {
  
  editCommessaForm : commessaForm = new commessaForm();

  currentTime: Date | undefined;

  @ViewChild("commessaForm")
  commessaForm!: NgForm;
  isSubmitted: boolean = false;

  id : any;

  constructor(private route: ActivatedRoute,
    private httpPovider : HttpProviderService, private toastr : ToastrService,
    private router : Router
    ) {}

  ngOnInit(): void {

    this.updateCurrentTime(); 
    setInterval(() => {
      this.updateCurrentTime();
    }, 1000);

    this.id = this.route.snapshot.params['id'];
    this.getCommessaDetailById();
  }

    // update time for the form
    updateCurrentTime() {
      this.currentTime = new Date();
      this.editCommessaForm.dataOraAggiornamento = this.currentTime.toISOString();
    }

  getCommessaDetailById() {
    this.httpPovider.getCommessaById(this.id).subscribe((data :any) => {
      if (data != null && data.body != null){
        var resultData = data.body;
        if (resultData){
          this.editCommessaForm.titolo = resultData.titolo;
          this.editCommessaForm.descrizione = resultData.descrizione;
          this.editCommessaForm.note = resultData.note;
          this.editCommessaForm.idOrganizzazioneCliente = resultData.idOrganizzazioneCliente;
          this.editCommessaForm.idRifCliente = resultData.idRifCliente;
          this.editCommessaForm.idUtente = resultData.idUtente;
          this.editCommessaForm.dataOraCreazione = resultData.dataOraCreazione;
        }
      }
    }, (error) => {});
  }

  EditCommessa(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpPovider.putCommessa(this.id, this.editCommessaForm).subscribe(
        (response) => {
              this.toastr.success('Data edit successfully','Success');
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500) 
       },
       (error) => {
        this.toastr.error('Something is wrong', 'Error');
       }
    );
    }
  }

}

export class commessaForm {
  titolo: string ='';
  descrizione: string='';
  note: string='';
  dataOraAggiornamento: string='';
  dataOraCreazione: string='';
  idOrganizzazioneCliente: string='';
  idRifCliente: string='';
  idUtente: string='';
}