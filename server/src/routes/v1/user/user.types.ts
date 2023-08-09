export interface RegisterRequestBody {
  email: string;
  name: string;
  password: string;
}

export interface GetUserQuery {
  filter: 'accepted' | 'not-accepted' | 'all' | undefined;
}

export interface AcceptUserQuery {
  id: string;
}

export interface DeleteUserQuery {
  id: string;
}
