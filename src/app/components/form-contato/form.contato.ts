import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../../services/api/api.service';
import { EmailService } from '../../../services/email.service/email.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'form-contato',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, MatButtonModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.contato.html',
  styleUrl: './form.contato.scss'
})
export class FormContato {

  formulario: FormGroup;

  readonly name = new FormControl('', [Validators.required]);
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly message = new FormControl('', [Validators.required]);

  errorMessage = signal('');

  constructor(private fb: FormBuilder, private emailService: EmailService) {

    this.formulario = fb.group({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Informe um email válido.');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Email inválido.');
    } else {
      this.errorMessage.set('');
    }
  }

  enviarFormulario() {
    if (this.formulario.invalid) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    this.emailService.sendEmail(this.formulario.value).subscribe({
      next: () => {
        alert('Email enviado com sucesso!');
        this.formulario.reset();
      },
      error: (err) => {
        console.error('Erro ao enviar email:', err);
        alert('Erro ao enviar email. Tente novamente mais tarde.');
      },
      complete: () => {
        // Independente do resultado, desativa o loading
        // this.isLoading = false;
      }
    });
  }





}
