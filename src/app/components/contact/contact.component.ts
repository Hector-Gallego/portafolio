import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  standalone: true,
  template: `
		<div class="modal-header">
			<h4 class="modal-title">Mensaje Enviado con Exito!</h4>
				</div>
		<div class="modal-body">
			<p>Gracias por comunicarte conmigo, pronto estare respondiendo tu mensaje.</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
		</div>
	`,
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formulario: FormGroup = new FormGroup({});
  enviado = false;



  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private modalService: NgbModal) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group({
      names: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  enviarFormulario() {



    if (this.formulario?.valid) {

      console.log("se envio el mensaje de forma correcta");


      this.http.post('https://formspree.io/f/xgejoroz', this.formulario.value).subscribe(
        () => {
          this.formulario?.reset();
          this.enviado = true;
          this.open();

        },
        (error) => {
          console.log(error);
          console.log("algo salio mal");


        }
      );
    }
  }

  open() {
    this.modalService.open(NgbdModalContent);

  }
}
