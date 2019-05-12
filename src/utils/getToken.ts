import { UnauthorizedException } from '@nestjs/common';

const getToken = (payload: any): string => {
  if (
    payload.req.headers.authorization &&
    payload.req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    const token = payload.req.headers.authorization.split(' ')[1];
    return token;
  }
  throw new UnauthorizedException();
};
export default getToken;
