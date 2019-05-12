import { createParamDecorator } from '@nestjs/common';

export const CtxUser = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.user,
);
