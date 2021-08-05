import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-dash-navbar1',
  templateUrl: './dash-navbar1.component.html',
  styleUrls: ['./dash-navbar1.component.css']
})
export class DashNavbar1Component implements OnInit {

  @Input() moral_user: string="";
  @Input() cuenta: string="";
  logOut_url: string = environment.backbase_url + environment.logOut_url;
  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }

  clickLogOut(){
    this.session.logOut()
      .then((response) =>{
        console.log("LogOut Success")
        console.log(response)
      })
      .catch((error)=>{
        console.log("LogOur Error")
        console.log(error)
      })
  }

}
