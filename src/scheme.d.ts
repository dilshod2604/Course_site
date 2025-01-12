interface IUserRequest {
  name?: string;
  email: string;
  password: string;
  isAggree?: boolean;
}

interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  isAggree: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IUserSignInRequest {
  email: string;
  password: string;
}



