import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  username: string;
  id: number;
  age: number;
  gender: string;
  email: string;
  name: string;
  role: string;
}

/** Constants used to fill up our data base. */
const ELEMENT_DATA: UserData[] = [
  {
    id: 1,
    username: 'K1vya',
    name: 'kavya',
    age: 21,
    gender: 'f',
    email: 'kavya@gmail.com',

    role: 'user',
  },
  {
    id: 2,
    username: 'amita',
    name: 'Amita',

    age: 21,
    gender: 'f',
    email: 'abc@gmail.com',

    role: 'user',
  },
  {
    id: 3,
    username: 'sonia',
    name: 'Sonia',

    age: 21,
    gender: 'f',
    email: 'sonia@gmail.com',

    role: 'user',
  },
  {
    id: 4,
    username: 'Tushar',
    name: 'tushar',

    age: 21,
    gender: 'm',
    email: 'abc@gmail.com',
    role: 'user',
  },
  {
    id: 5,
    username: 's',
    name: 'Sonia',

    age: 21,
    gender: 'm',
    email: 's@gmail.com',
    role: 'user',
  },
  {
    id: 6,
    username: 'abc',
    name: 'Sonia',

    age: 21,
    gender: 'f',
    email: 'abc@gmail.com',

    role: 'user',
  },
  {
    id: 7,
    username: 'AmanV',
    name: 'Aman',

    age: 21,
    gender: 'f',
    email: 'aman@gmail.com',

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
    'id',
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
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
}
