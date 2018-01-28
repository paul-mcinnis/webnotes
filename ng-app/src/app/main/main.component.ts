import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Web Notes';
  apiPath = 'domain/api/';
  apiUrl = '';
  docUrl = '';
  data = '';

  constructor(
    @Inject(DOCUMENT) private doc: any,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.apiUrl = doc.location.protocol + '//' + doc.location.host + '/' + this.apiPath;
  }

  ngOnInit() {
    this.docUrl = this.route.snapshot.url.toString();
    if (this.docUrl === '') {
      this.docUrl = this.genRandomString(9);
      this.router.navigate(['./' + this.docUrl]);
    }
    this.getInitData();
  }

  genRandomString(length: number) {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = length; i > 0; i--) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }

  onKey() {
    const body = {
      data: this.data,
    };
    this.http.put(this.apiUrl + 'update', body).subscribe(
      (rs) => {
        console.log('update resp = ' + rs.toString());
      }
    );
  }

  getInitData() {
    this.http.get(this.apiUrl + 'getdata/' + this.docUrl).toPromise()
      .then( (rs) => {
        this.data = rs.toString();
        console.log('get resp = ' + rs.toString());
      });
  }
}
