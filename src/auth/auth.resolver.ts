import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../users/user.entity';
import { CurrentUser } from './user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver(of => User)
export class AuthResolver {

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return user;
  }
}
