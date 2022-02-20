import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {
skislist=[1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
