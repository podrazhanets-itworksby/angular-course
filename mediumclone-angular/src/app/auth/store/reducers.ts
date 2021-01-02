import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import { AuthStateInterface } from 'src/app/shared/types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({ ...state, isSubmitting: true })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
