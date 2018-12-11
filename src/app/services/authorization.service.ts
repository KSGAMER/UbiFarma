import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from './local.service';

@Injectable()
export class AuthorizationService {
    user: Observable<firebase.User>;
    private log: boolean;
    constructor(private firebaseAuth: AngularFireAuth, private router: Router, private toastr: ToastrService, private localService: LocalService) {
        this.user = firebaseAuth.authState;
    }

    login(email: string, password: string): boolean {
        this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
            // console.log('Informacion adicional '+value.additionalUserInfo.username);
            // console.log('');
            // console.log('Credencial '+value.credential);
            // console.log(value.user.uid);
            // value.user.getIdToken().then(item => {
            //     console.log(item.)
            // })
            // alert('Bienvenido a UbiFarma');
            this.log = true;
            this.localService.id = value.user.uid;
            this.router.navigate(['load']);
        })
        .catch(err => {
            this.toastr.warning('Correo o Contraseña Incorrectos', '¡Advertencia!');
            this.log = false;
            this.router.navigate(['login']);
        });
        return this.log;
    }

    logStatus() {
        return this.log;
    }

    logOut() {
        return this.firebaseAuth.auth.signOut(), this.log == false;
    }
}