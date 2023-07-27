import { Component, OnInit, Type } from '@angular/core';
import { HttpProviderService } from 'src/app/service/http-provider.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})

export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS: {[name: string]: Type<any>} = {
  deleteModal: NgModalConfirm
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResult = '';
  commessaList: any = [];
  constructor(private httpProvider : HttpProviderService,
    private router : Router, private modalService: NgbModal, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getAllCommessa();
  }
  // GET commessa
  async getAllCommessa(){
    this.httpProvider.getAllCommessa().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.commessaList = resultData;
        }
      }
    },
    (error : any) => {
      if (error) {
        if (error.status == 404) {
          if (error.error && error.error.message) {
            this.commessaList = [];
          }
        }
      }
    });
  }

  AddCommessa() {
    this.router.navigate(['AddCommessa'])
  }


  deleteCommessaConfirm(commessa: any){
    this.modalService.open(MODALS['deleteModal'],
    {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.deleteCommessa(commessa);
    },
      (reason => {}));
  }


  deleteCommessa(commessa: any) {
    this.httpProvider.deleteCommessaById(commessa.id).subscribe(
      (response) => {
        // show the successful message
        this.toastr.success('Data deleted successfully', 'Success');
        this.getAllCommessa();
      },
      (error) => {
        // show the error
        this.toastr.error('Something is wrong', 'Error');
      }
    );
  }


}
