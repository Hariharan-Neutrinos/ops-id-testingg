//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('entity_2')
export class entity_2 {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name1', nullable: false, type: 'text', primary: false })
  name1: string;
  @Column({ name: 'name2', nullable: false, type: 'text', primary: false })
  name2: string;
  @Column({ name: 'name3', nullable: false, type: 'text', primary: false })
  name3: string;
  @Column({ name: 'name4', nullable: false, type: 'text', primary: false })
  name4: string;
  @Column({ name: 'name5', nullable: false, type: 'text', primary: false })
  name5: string;
}
