import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Item } from '../models/Item';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cards:Item[] = []
  cards_loaded = false
  cards_failed = false
  constructor(private session: SessionService) { }

  ngOnInit(): void {
    this.getItems();
    console.log(this.cards);
  }


  async getItems(){
    if(!this.cards_loaded){
      this.session.getItems()
        .then((cards: any) => 
          {
            this.cards = cards["cards"];
            this.cards_loaded = true;
            this.cards_failed = false;
          })
        .catch((error:any) =>
          {
            console.log("Promise(http) rejected with \n" + JSON.stringify(error));
            this.cards_failed = true;
          });
    }
  }

  @HostListener('window:message', ['$event']) onPostMessage(event:any) {
    if(event.data["JSESSIONID"]){
      this.session.session_id = event.data["JSESSIONID"];
      this.getItems();
    }
  }

}
