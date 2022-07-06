import { ContactsComponent } from './contacts.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes : Routes = [
  {
    path : '',
    component : ContactsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
