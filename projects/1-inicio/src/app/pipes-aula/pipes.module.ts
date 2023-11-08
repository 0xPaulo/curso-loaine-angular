import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAulaComponent } from './pipes-aula.component';
import { CamelCasePipe } from '../pipes/camel-case.pipe';
import { CriandoPipeComponent } from './criando-pipe/criando-pipe.component';
import { FiltroArrayPipe } from '../pipes/filtro-array.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PipesAulaComponent,
    CamelCasePipe,
    CriandoPipeComponent,
    FiltroArrayPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [PipesAulaComponent],
})
export class PipesModule {}
