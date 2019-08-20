import { Injectable,EventEmitter } from '@angular/core';
import { Books } from '../../models/Books';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CheckinService{
     checkBooks = new BehaviorSubject<any[]>([]);
}