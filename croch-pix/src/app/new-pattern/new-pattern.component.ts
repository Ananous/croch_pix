import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/components/button/button.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-new-pattern',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent, FooterComponent],
  templateUrl: './new-pattern.component.html',
  styleUrls: ['./new-pattern.component.scss']
})
export class NewPatternComponent {
  gridSize = 16;
  grid: string[][] = [];
  colorControl = new FormControl('#b23a48');

  constructor(private router: Router) {
    this.initGrid();
  }

  initGrid() {
    this.grid = Array.from({ length: this.gridSize }, () =>
      Array.from({ length: this.gridSize }, () => '#ffffff')
    );
  }

  paintCell(row: number, col: number) {
    this.grid[row][col] = this.colorControl.value || '#b23a48';
  }

  clearGrid() {
    this.initGrid();
  }

  savePattern() {
    console.log('Patron sauvegardé :', this.grid);
    alert('✨ Patron sauvegardé avec succès !');
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
