import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display-body',
  templateUrl: './display-body.component.html',
  styleUrls: ['./display-body.component.css']
})
export class DisplayBodyComponent implements OnInit {

  title: string = "text";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const myData = this.activatedRoute.snapshot.data['name'];

    if(myData == "page1"){
      this.title = "Single Order Details";
    }else if(myData == "page2"){
      this.title = "Multiple Order Details";
    }else{
      this.title = "Reports";
    }

  }

}
