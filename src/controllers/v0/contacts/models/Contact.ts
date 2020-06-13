import {Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { UserImage } from './UserImage';

@Table({ indexes: [{ unique: false, fields: ['userEmail'] },] })
export class Contact extends Model<Contact> {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public userEmail!: string;

  @ForeignKey(() => UserImage)
  @Column
  public contactEmail!: string;

  @BelongsTo(() => UserImage)
  public contactImage?: UserImage;

  @Column
  public contactName!: string;

  short() {
    return {
      name: this.contactName,
      imageUrl: this.contactImage.imageUrl
    }
  }
}
