import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile: any;

  constructor(private http: HttpClient, private msal: MsalService) {}

  async ngOnInit() {
    const account = this.msal.instance.getActiveAccount();
    console.log('active account:', account);
    if (!account) return;

    const result = await this.msal.instance.acquireTokenSilent({
      scopes: ['User.Read'],
      account
    });

    console.log('acquired token:', result);

    this.http
      .get('https://graph.microsoft.com/v1.0/me', {
        headers: { Authorization: `Bearer ${result.accessToken}` }
      })
      .subscribe(data => {
        console.log("MS Graph /me response:", data);
        this.profile = data;
      });
  }
}
