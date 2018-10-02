import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user = 'USUARIO';
  response: any;


  /* getRandomSrc() {
    let n = 856;
    let random = Math.floor(Math.random() * n);
    save the info in differents variables and use them in html
  } */

  imagen(n:number){
    let imgSrc = this.response.photos[n].img_src;
    return imgSrc;
  }



  ngOnInit(){

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=";
    let key = "aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM";
    let obs = this.http.get(url+key);
    obs.subscribe((response) => {
      this.response = response;
    }
  };

  constructor(private http: HttpClient) { }

}
