import { SetMetadata } from '@nestjs/common';

export const RequirePermission = (...permissions: string[]) =>
  SetMetadata('require-permission', permissions);
