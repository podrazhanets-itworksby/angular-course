import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendErrorMessagesComponent } from 'src/app/shared/modules/bacendErrorMessages/components/backendErrorMessages/backend-error-messages.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
