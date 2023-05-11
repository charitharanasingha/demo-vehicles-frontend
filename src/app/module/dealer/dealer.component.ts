import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Dealer {
  brand: string;
  bac: string;
  name: string;
  city: string;
  state: string;
  country: string;
}
@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss'],
})
export class DealerComponent {
  searchTerm: string = '';
  page = 1;
  pageSize = 3;
  collectionSize: number = 100;
  currentRate = 8;
  dealers: Dealer[] = [];
  allDealers: Dealer[] = [];
  isLoading: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.http
      .get<Dealer[]>('http://localhost:3000/dealers')
      .subscribe((data: Dealer[]) => {
        this.collectionSize = data.length;
        this.dealers = data;
        this.allDealers = this.dealers;
        this.isLoading = false;
      });
  }

  search(event: any): void {
    const searchFilter = event.target?.value?.toLowerCase();
    const filteredDealers = this.allDealers.filter(
      ({ brand, bac, name, city, state, country }) =>
        name.toLowerCase().includes(searchFilter) ||
        city.toLowerCase().includes(searchFilter) ||
        bac.toLowerCase().includes(searchFilter) ||
        brand.toLowerCase().includes(searchFilter) ||
        state.toLowerCase().includes(searchFilter) ||
        country.toLowerCase().includes(searchFilter)
    );
    this.dealers = filteredDealers;
    this.calculateCollectionSize();
  }

  calculateCollectionSize(): void {
    this.collectionSize = this.dealers.length;
  }

  goToVehicles(bac: string, name: string) {
    localStorage.setItem('dealer_name', name);
    this.router.navigate(['/vehicles',bac]);
  }
}
