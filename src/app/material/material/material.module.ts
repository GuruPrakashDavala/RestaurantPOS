import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatCardModule,
  MatToolbarModule,
  MatBadgeModule
  ];

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
