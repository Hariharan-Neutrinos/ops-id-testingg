//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('sed')
export class sed {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
}
