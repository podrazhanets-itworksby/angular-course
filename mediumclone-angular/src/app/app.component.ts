import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from 'src/app/auth/store/actions/get-current-user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
  constructor(private store: Store) {}
}
