import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  countChanged: EventEmitter<number> = new EventEmitter<number>();
  private count: number = 0;

  incrementCount(): void {
    this.count++;
    this.countChanged.emit(this.count);
  }

  getCount(): number {
    return this.count;
  }

}
