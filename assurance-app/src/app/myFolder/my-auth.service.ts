import { AngularFireAuth } from 'angularfire2/auth';
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}
  logout() {
    this.afAuth.auth.signOut();
  }
}