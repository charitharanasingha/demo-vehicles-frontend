import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


interface Vehicle {
  bac: string;
  vin: string;
  ctpStatus: string;
  onstarStatus: string;
  createdAt: string;
  color: string;
  stockNumber: string;
  year: number;
}
@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent {
  searchTerm: string = '';
  page = 1;
  pageSize = 3;
  collectionSize: number = 100;
  currentRate = 8;
  vehicles: Vehicle[] = [];
  allVehicles: Vehicle[] = [];
  isLoading: boolean = true;
  bac: string | null = null; 
  name: string | null = null; 

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.bac = this.route.snapshot.paramMap.get(
      'bac'
    );
    this.name = localStorage.getItem('dealer_name');

    this.http
      .get<Vehicle[]>(
        `${environment.apiUrl}/vehicles/${this.bac}`
      )
      .subscribe((data: Vehicle[]) => {
        this.collectionSize = data.length;
        this.vehicles = data;
        this.allVehicles = this.vehicles;
        this.isLoading = false;
      });
  }

  search(event: any): void {
    const searchFilter = event.target?.value?.toLowerCase();
    const filteredVehicles = this.allVehicles.filter(
      ({
        bac,
        vin,
        ctpStatus,
        onstarStatus,
        createdAt,
        color,
        stockNumber,
        year,
      }) =>
        bac.toLowerCase().includes(searchFilter) ||
        vin.toLowerCase().includes(searchFilter) ||
        ctpStatus.toLowerCase().includes(searchFilter) ||
        onstarStatus.toLowerCase().includes(searchFilter) ||
        createdAt.toLowerCase().includes(searchFilter) ||
        color.toLowerCase().includes(searchFilter) ||
        stockNumber.toLowerCase().includes(searchFilter) ||
        year === searchFilter
    );
    this.vehicles = filteredVehicles;
    this.calculateCollectionSize();
  }

  calculateCollectionSize(): void {
    this.collectionSize = this.vehicles.length;
  }
}
