import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-order',
  templateUrl: './multiple-order.component.html',
  styleUrls: ['./multiple-order.component.css']
})
export class MultipleOrderComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
