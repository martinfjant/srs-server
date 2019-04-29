export interface JwtPayload {
  email: string;
  role: 'user' | 'admin';
}
