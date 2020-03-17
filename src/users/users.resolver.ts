import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/user.decorator';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService
  ) { }

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return this.usersService.findOne(user.username)
  }
}
