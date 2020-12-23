import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule
  ]
})
export class MaterialModule { }
