import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 
  @Input() title: string="";
  @Input() description: string="";
  @Input() amount: string="";
  shadow_class: string=""
  
  dict: any = {
    "Pago": "paid",
    "Transferencia": "transfer_within_a_station",
    "Cuenta": "account_circle",
    "Autorizacion": "vpn_key"
  }
  constructor() { 
 
  }

  ngOnInit(): void {
  }

}



