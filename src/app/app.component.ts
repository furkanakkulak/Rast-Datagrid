import { Component } from '@angular/core';
import { Data } from './models/data-model';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatagridTask';


  Data: Data = new Data('', '', '');
  DataList: Data[] = [];

  isPopupVisible: boolean;
  searchTerm: string = '';

  pageSize: number = 4;
  currentPage: number = 1;

  constructor(private DataService:DataService) {
    this.isPopupVisible = false;
    this.DataList = this.DataService.getDataList();

  }
  addPopupEntry(): void {
    this.DataService.addEntry(this.Data);
    this.DataList = this.DataService.getDataList();
    this.Data = new Data('', '', '');
    this.isPopupVisible=false
  }

  clearData():void {
    this.Data.sosyalMedyaAdi="";
    this.Data.sosyalMedyaLinki="";
    this.Data.aciklama="";
    this.isPopupVisible=false;
  }

  get filteredData() {
    if (this.searchTerm === '') {
      return this.paginateData(this.DataList);
    } else {
      this.currentPage=1
      const filtered = this.DataList.filter(x => x.sosyalMedyaAdi.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return this.paginateData(filtered);
    }
  }

  paginateData(data: any[]) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return data.slice(startIndex, endIndex);
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  decrease() {
    if (this.pageSize>1) {
      this.pageSize--
    }
  }

  increase() {
    if (this.pageSize<15) {
      this.pageSize++
    }
  }

  get totalPages(): number {
    const totalItems = this.searchTerm === '' ? this.DataList.length : this.filteredData.length;
    return Math.ceil(totalItems / this.pageSize);
  }
}
