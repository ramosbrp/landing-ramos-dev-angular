import { Component } from '@angular/core';
import { ServicosTabComponent } from "../tabs/servicos-tab/servicos-tab.component";


@Component({
  selector: 'app-servicos',
  imports: [ServicosTabComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

}
