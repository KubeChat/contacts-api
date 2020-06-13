import {Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { UserImage } from './UserImage';

@Table({ tableName: 'contacts', indexes: [{ unique: false, fields: ['user_email'] },] })
export class Contact extends Model<Contact> {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column({field: 'user_email'})
  public userEmail!: string;

  @ForeignKey(() => UserImage)
  @Column({field: 'contact_email'})
  public contactEmail!: string;

  @BelongsTo(() => UserImage)
  public contactImage?: UserImage;

  @Column({field: 'contact_name'})
  public contactName!: string;

  short() {
    return {
      name: this.contactName,
      imageUrl: this.contactImage.imageUrl
    }
  }
}
