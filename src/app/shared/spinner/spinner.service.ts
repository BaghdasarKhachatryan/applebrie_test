import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loadingEvent$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.loadingEvent$.asObservable();

  constructor() {}

  public startLoading() {
    this.loadingEvent$.next(true);
  }

  public finishLoading() {
    this.loadingEvent$.next(false);
  }
}
