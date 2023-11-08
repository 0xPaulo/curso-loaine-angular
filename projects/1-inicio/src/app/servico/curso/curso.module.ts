import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoService } from '../../service/servico/curso.service';

@NgModule({
  declarations: [CursoComponent],
  imports: [CommonModule],
  // providers: [CursoService],
  exports: [CursoComponent],
})
export class CursoModule {}
