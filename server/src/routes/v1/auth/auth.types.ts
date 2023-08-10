export interface AdminLoginBody {
  id: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface RefreshTokenHeader {
  qid: string;
}
