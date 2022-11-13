export interface GithubUserModel {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
  blog: string;
  email: string;
  company: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: Date;
  bio: string;
}
