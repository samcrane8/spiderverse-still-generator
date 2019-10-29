import { Component } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="guy"
  stills: any;
  backgroundImage: any;
  constructor(private http: HttpClient) {
  }

  async ngOnInit() {
    await this.http.get('static_files/')
    .subscribe(response => {
      this.stills = response
      let length = this.stills.length
      let random_selection = Math.floor(Math.random() * Math.floor(length))
      console.log(this.stills[random_selection].name)
      console.log(`guy: ${random_selection}`)
      this.backgroundImage = `static_files/${encodeURIComponent(this.stills[random_selection].name)}`
        
      }
    );
  }

  getUrl() {
    console.log(this.backgroundImage)
    return this.backgroundImage
  }
}
