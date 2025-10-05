export interface userInfoType {
  username: string;
  role: string;
}

export interface sideBarType {
  path: string;
  access: string[];
  title: string;
  icon: React.ReactElement;
}
export interface RouteItem  {
  path: string;
  component: React.ReactElement;
  access: string[];
};

export interface job{
    title: string,
    Description: string,
    Location: string,
    Salary: string,
    Experience: string,
}
export interface ProfileData {
  name: string;
  number: string;
  role: string;
  experience: string;
  company: string;
  skills: string;
  salary: string;
}
export interface Profileinfo{
  name: string;
  number: string;
  date: string;
  role: string;
  experience: string;
  company: string;
  skills: string;
  salary: string;
}
export interface Job {
  title: string;
  company: string;
  location: string;
  skills: string;
  salary: string;
  description: string;
}