
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema(
  {
    timestamps: true
  }
)
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  age: number;
  
}

export const UserSchema = SchemaFactory.createForClass(User);