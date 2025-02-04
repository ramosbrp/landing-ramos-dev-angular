import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'form-contato',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './form.contato.html',
  styleUrl: './form.contato.scss'
})
export class FormContato {
}
