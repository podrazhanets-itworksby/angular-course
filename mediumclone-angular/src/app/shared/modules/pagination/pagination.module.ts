import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/modules/pagination/components/pagination/pagination.component';
import { UtilService } from 'src/app/shared/services/util.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilService],
})
export class PaginationModule {}
