import { Component, OnInit, ViewChild } from '@angular/core';
import { IBeer } from '../interfaces/ibeer';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BeerService } from '../beer.service';


@Component({
  selector: 'app-beer-comp',
  templateUrl: './beer-comp.component.html',
  styleUrls: ['./beer-comp.component.css']
})
export class BeerCompComponent implements OnInit {

  displayedColumns: string[] = ['id', 'img', 'name', 'tagline', 'description', 'abv'];
  dataSource: MatTableDataSource<IBeer>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private beerService: BeerService ) { }

  async ngOnInit() {
    const data = await this.beerService.getAll();

    this.dataSource= new MatTableDataSource(data);
    this.dataSource.sort= this.sort;

  }
  applyFilter(filter: string){
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}
