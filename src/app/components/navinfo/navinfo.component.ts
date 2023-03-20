import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navinfo',
  templateUrl: './navinfo.component.html',
  styleUrls: ['./navinfo.component.css']
})
export class NavinfoComponent {
  @Input() title: string = '';
}
