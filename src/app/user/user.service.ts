import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {IUser, IUserCredentials} from './user.model';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user.asObservable();
  }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http
      .post<IUser>('/api/Catalog/SignIn', credentials)
      .pipe(map((user: IUser) => {
        this.user.next(user); // cashing and admit the current value of the user
        return user;
      }));
  }

  signUp(user: IUser): Observable<IUser> {
    return this.http
      .post<IUser>('/api/User/Register', user)
      .pipe(map((user: IUser) => {
        this.user.next(user);
        return user;
      }));
  }

  signOut() {
    this.user.next(null);
    this.router.navigate(['/home']);
  }
}
