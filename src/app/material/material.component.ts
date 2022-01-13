import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sort } from '@angular/material/sort';

export interface People { 
  name: string
  mail: string
  tel: string
  age: number
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  message: string
  data: People[]
  sortedData:People[]

  constructor() { }

  ngOnInit(): void {
    this.data = [
      { name: 'Taro', mail: 'taro@yamada', tel: '090-999-999', age: 35 },
      { name: 'Hanako', mail: 'hanako@yamada', tel: '080-999-999', age: 27 },
      { name: 'Sachiko', mail: 'sachiko@yamada', tel: '070-999-999', age: 49 },
      { name: 'Mami', mail: 'mami@yamada', tel: '060-999-999', age: 18 },
      { name: 'Jiro', mail: 'jiro@yamada', tel: '050-999-999', age: 52 },
    ];
    this.sortedData = this.data.slice()
  }

  sortData(sort: Sort) { 
    const data = this.data.slice()
    if (!sort.active || sort.direction === '') { 
      this.sortedData = data
      return
    }
    
    this.sortedData = data.sort((a, b) => { 
      const asc = sort.direction == 'asc' ? 1 : -1
      switch (sort.active) { 
        case 'name': return (a.name < b.name ? 1 : -1) * asc;
        case 'mail': return (a.mail < b.mail ? 1 : -1) * asc;
        case 'tel': return (a.tel < b.tel ? 1 : -1) * asc;
        case 'age': return (a.age < b.age ? 1 : -1) * asc;
        default: return 0
      }
    })
  }
}
