import { Student } from '../../domain/entities/students'

export interface StudentRepository {
  findById(id: string): Promise<Student | null>
}
