import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { GithubUserModel } from 'src/app/shared/models/github-user.model';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {
  user$!: Observable<GithubUserModel>;

  constructor(private githubService: GithubService) {}

  onUsernameSearch(name: string) {
    this.user$ = this.githubService.getUserByName(name);
  }

}
