import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProviderService } from 'src/app/service/http-provider.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-commessa',
  templateUrl: './add-commessa.component.html',
  styleUrls: ['./add-commessa.component.css']
})
export class AddCommessaComponent implements OnInit {
  addCommessaForm: commessaForm = new commessaForm();

  currentTime: Date | undefined;

  @ViewChild("commessaForm")
  commessaForm!: NgForm;
  isSubmitted: boolean = false;
  
  constructor(private router: Router,
    private httpPovider : HttpProviderService, private toastr : ToastrService
    ) {}

  ngOnInit(): void {
    this.updateCurrentTime(); 
    setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
  }

  // update time for the form
  updateCurrentTime() {
    this.currentTime = new Date();
    this.addCommessaForm.dataOraCreazione = this.currentTime.toISOString();
    this.addCommessaForm.dataOraAggiornamento = this.currentTime.toISOString();
  }

  AddCommessa(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpPovider.postCommessa(this.addCommessaForm).subscribe(
        (response) => {
              this.toastr.success('Data added successfully','Success');
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
  dataOraCreazione: string='';
  dataOraAggiornamento: string='';
  idOrganizzazioneCliente: string='';
  idRifCliente: string='';
  idUtente: string='';
}
