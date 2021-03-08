import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  data: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getBTCData();
  }
  getBTCData() {
    this.http.get(`${environment.api}/btc`).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
