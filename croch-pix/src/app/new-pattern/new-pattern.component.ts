import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/components/button/button.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SubtitleComponent } from '../shared/components/subtitle/subtitle.component';

@Component({
  selector: 'app-new-pattern',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent, FooterComponent,SubtitleComponent],
  templateUrl: './new-pattern.component.html',
  styleUrls: ['./new-pattern.component.scss']
})
export class NewPatternComponent {
  gridSizeControl = new FormControl(16);
  grid: string[][] = [];
  colorControl = new FormControl('#000000');

  history: string[][][] = [];
  currentStep: number = -1;

  constructor(private router: Router) {
    this.initGrid();
  }

  isPainting = false;

  startPainting(row: number, col: number) {
    this.isPainting = true;
    this.paintCell(row, col);
  }

  stopPainting() {
    this.isPainting = false;
  }

  hoverPaint(row: number, col: number) {
    if (this.isPainting) {
      this.paintCell(row, col);
    }
  }

  initGrid() {
    const size = this.gridSizeControl.value ?? 16;
    this.grid = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => '#ffffff')
    );
    this.pushHistory();
  }

  pushHistory() {
    this.history = this.history.slice(0, this.currentStep + 1);
    const gridClone = this.grid.map(row => [...row]);
    this.history.push(gridClone);
    this.currentStep++;
  }

  paintCell(row: number, col: number) {
    this.grid[row][col] = this.colorControl.value || '#b23a48';
    this.pushHistory();
  }

  get usedColors(): string[] {
    const colorsSet = new Set<string>();
    this.grid.forEach(row => {
      row.forEach(cell => {
        colorsSet.add(cell);
      });
    });
    return Array.from(colorsSet);
  }

  selectUsedColor(color: string) {
    this.colorControl.setValue(color);
  }

  clearGrid() {
    this.initGrid();
    this.pushHistory();
  }

  undo() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.grid = this.history[this.currentStep].map(row => [...row]);
    }
  }

  redo() {
    if (this.currentStep < this.history.length - 1) {
      this.currentStep++;
      this.grid = this.history[this.currentStep].map(row => [...row]);
    }
  }

  canUndo(): boolean {
    return this.currentStep > 0;
  }

  canRedo(): boolean {
    return this.currentStep < this.history.length - 1;
  }
  canClear(): boolean {
    return this.grid.some(row => row.some(cell => cell !== '#ffffff'));
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
