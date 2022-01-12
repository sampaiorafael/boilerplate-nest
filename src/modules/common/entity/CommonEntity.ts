import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
  
export abstract class CommonEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt: Date;
}
  