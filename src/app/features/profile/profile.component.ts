import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  title = 'Decoded ID Token';

  user$ = this.authService.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));

  constructor(private authService: AuthService) { }
}

// user$ = of({
//   nickname: 'Customer',
//   name: 'One Customer',
//   picture: 'https://cdn.auth0.com/blog/hello-auth0/auth0-user.png',
//   updated_at: '2021-05-04T21:33:09.415Z',
//   email: 'customer@example.com',
//   email_verified: false,
//   sub: 'auth0|12345678901234567890',
// } as UserProfileModel);
