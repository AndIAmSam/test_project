import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { RecordItem } from './models/api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  products: RecordItem[] = [];
  currentPage = 0; 
  pageSize = 4; 
  totalPages = 0; 

  constructor(private apiService: ApiService) {} 

  ngOnInit() {
    const apiUrl = 'http://api.redalyc.org/search/subject(Ciencias naturales),sizePage(50)/output(json)/download(yes)';
    this.apiService.get(apiUrl)
      .subscribe((data: any) => { 
        if (data.searchRetrieveResponse) {
          this.products = data.searchRetrieveResponse.records; 
          this.totalPages = Math.ceil(this.products.length / this.pageSize);
        } 
      });
  }
}
