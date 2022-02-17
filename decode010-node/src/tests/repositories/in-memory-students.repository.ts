import { Student } from '../../domain/entities/students'
import { StudentRepository } from './../../application/repositories/StudentRepository'

export class InMemoryStudentsRepository implements StudentRepository {
  public items: Student[] = []

  findById(id: string): Promise<Student | null> {
    const student = this.items.find((student) => student.id === id)

    if (!student) return Promise.resolve(null)
    return Promise.resolve(student)
  }
}
