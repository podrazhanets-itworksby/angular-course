import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponet } from 'src/app/shared/modules/top-bar/components/topBar/top-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopBarComponet],
  exports: [TopBarComponet],
})
export class TopBarModule {}
