import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [NotFoundComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [NotFoundComponent, SpinnerComponent, MatCardModule],
})
export class SharedModule {}
