import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent implements OnInit {

  @Input('titleLabel') titleLabel = '';
  @Input() color = '';
  @Input() icon = '';
  @Input() value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
