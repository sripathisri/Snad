export const AUTHENTICATION_ROUTES = [
  {path: '',loadChildren:()=> import("../authentication/authentication-routing.module").then(x=>x.AuthenticationRoutingModule) }
];
