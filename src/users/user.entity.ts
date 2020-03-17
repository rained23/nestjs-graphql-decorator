import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(type => Int)
  userId: number;
  username: string;
  password: string;
}