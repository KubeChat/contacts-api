import {Table, Column, Model, PrimaryKey, CreatedAt} from 'sequelize-typescript';

@Table({ tableName: 'user_image' })
export class UserImage extends Model<UserImage> {
  
  @PrimaryKey
  @Column
  public email!: string;

  @Column({field: 'image_url'})
  public imageUrl!: string;
}
