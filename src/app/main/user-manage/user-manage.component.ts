import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  username: string;
  position: number;
  age: number;
  gender: string;
  email: string;
  name: string;
  role: string;
}

/** Constants used to fill up our data base. */
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    username: 'sonia',
    name: 'Sonia',
    age: 21,
    gender: 'f',
    email: 'sonia@gmail.com',

    role: 'user',
  },
  {
    position: 2,
    username: 'amita',
    name: 'Amita',

    age: 21,
    gender: 'f',
    email: 'abc@gmail.com',

    role: 'user',
  },
  {
    position: 3,
    username: 'sonia',
    name: 'Sonia',

    age: 21,
    gender: 'f',
    email: 'sonia@gmail.com',

    role: 'user',
  },
  {
    position: 4,
    username: 'a',
    name: 'Sonia',

    age: 21,
    gender: 'm',
    email: 'abc@gmail.com',
    role: 'user',
  },
  {
    position: 5,
    username: 's',
    name: 'Sonia',

    age: 21,
    gender: 'm',
    email: 's@gmail.com',
    role: 'user',
  },
  {
    position: 6,
    username: 'abc',
    name: 'Sonia',

    age: 21,
    gender: 'f',
    email: 'abc@gmail.com',

    role: 'user',
  },
  {
    position: 7,
    username: 'sonia',
    name: 'Sonia',

    age: 21,
    gender: 'f',
    email: 'sonia@gmail.com',

    role: 'user',
  },
];
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent {
  displayedColumns: string[] = [
    'position',
    'username',
    'name',
    'age',
    'gender',
    'email',

    'role',
  ];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CreateUserComponent, { width: '50%' });
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
}
