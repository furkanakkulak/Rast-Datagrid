import { Injectable } from '@angular/core';
import { Data } from '../../models/data-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private localStorageKey = 'dataList';

  constructor() {}

  getDataList(): Data[] {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  addEntry(entry: Data): void {
    const storedData = this.getDataList();
    storedData.push(entry);
    localStorage.setItem(this.localStorageKey, JSON.stringify(storedData));
  }

  clearPopupDataList(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
