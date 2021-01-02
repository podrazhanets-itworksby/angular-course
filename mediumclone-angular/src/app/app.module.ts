import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from 'src/app/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
