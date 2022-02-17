import { Challenge } from './../../domain/entities/challenge';
import { Student } from './../../domain/entities/students';

import { CreateChallengeSubmission } from './create-challenge-submission'
import { InMemoryStudentsRepository } from '../../tests/repositories/in-memory-students.repository'
import { InMemoryChallengesRepository } from './../../tests/repositories/in-memory-challenges.repository'

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentsRepository()
    const challengeRepository = new InMemoryChallengesRepository()
    const sut = new CreateChallengeSubmission(studentsRepository,challengeRepository)

    const student = Student.create({
      name: 'Mauricio',
      email: "test@example.com"
    })

    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionUrl: 'http://example.com'
    })

    studentsRepository.items.push(student)
    challengeRepository.items.push(challenge)

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    })

    expect(response).toBeTruthy()
  })
})
