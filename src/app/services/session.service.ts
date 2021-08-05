import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user: string = "user";
  password: string = "user";
  api_url = environment.api_url;
  session_id = ""
  path_cookie = "http://localhost:7777"
  logOutApiUri = "localhost:7777/portalserver/services/rest/api/v1" + "/private/channels/bne/legacy/authenticate/login"


  setSessionCookie(key:string,value:string){
    let setString=`${key}=${value}`
    document.cookie=setString
    console.log(setString)
  }

  mock_cards = 
  [
    {
      ruta: "assets/img/pagos.png",
      titulo: "PAGOS"
    },
    {
     ruta: "assets/img/Autorizaciones.png",
     titulo: "AUTORIZACIONES"
    },
    {
     ruta: "assets/img/cuentas.png",
     titulo: "CUENTAS"
   },
   {
     ruta: "assets/img/transferencias.png",
     titulo: "TRANSFERENCIAS"
   },     
  ]


  constructor(private http: HttpClient) { }

  getItems_mock():any{
    return this.http.get('/assets/mock/cards.json').toPromise()
  }

  getItems():any{
   let rute = this.api_url + "/portalserver/services/rest/api/v1/private/get/items"
   let headers:HttpHeaders = this.appendAuthHeaders(new HttpHeaders())
   //this.setSessionCookie("JSESSIONID",this.session_id);
   return this.http.get(rute,{headers:headers,withCredentials:true}).toPromise()
  }

  appendAuthHeaders(headers: HttpHeaders): HttpHeaders{
    headers = headers.append("Accept","*/*")
    //headers = headers.append("Content-Type","application/json")
    return headers
  }

  public logOut(){
    return this.http.get(this.logOutApiUri).toPromise()
  }

  private getCookie(name: string) {
    //console.log("COOKIES");
    //console.log(document.cookie);
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
  }

}
