import {Table, Column, Model, PrimaryKey, CreatedAt} from 'sequelize-typescript';

@Table
export class UserImage extends Model<UserImage> {
  
  @PrimaryKey
  @Column
  public email!: string;

  @Column
  public imageUrl!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();
}
