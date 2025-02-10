export interface AuthState {
    data?: AuthResponse;
    Authloading: boolean;
    Autherror: boolean;
}

export interface AuthResponse {
  response: Response;
  token: string;
  user: User;
}

interface Response {
  code: number;
  message: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserLgoinCredentials {
  email: string;
  password: string;
}
