import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AsyncService } from './async.service';
import { Person } from '../models/person.interface';

@Injectable()
export class UserResolver implements Resolve<any> {
    constructor(private asyncService: AsyncService , private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.asyncService.getStuff();
    }
}