import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from './role';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

public loginUserFromRemote(user : User):Observable<any>{
    return  this.http.post<any>("http://localhost:8010/login",user)
}
public signupUserFromRemote(user : User):Observable<any>{
  return  this.http.post<any>("http://localhost:8010/registeruser",user)
}

public getUsers():Observable<User[]>{
  return  this.http.get<User[]>("http://localhost:8010/listusers")
}

public getIdByUser(user : User):Observable<number>{
  return this.http.get<number>(`http://localhost:8010//finduser/${user}`)
}

}
