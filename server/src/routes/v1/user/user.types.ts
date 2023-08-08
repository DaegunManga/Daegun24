export interface RegisterRequestBody {
  email: string;
  name: string;
}

export interface GetUserQuery {
  filter: 'accepted' | 'not-accepted' | 'all' | undefined;
}

export interface AcceptUserBody {}
