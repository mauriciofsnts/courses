import { Submission } from '../../domain/entities/submission'
import { StudentRepository } from './../repositories/StudentRepository'
import { ChallengeRepository } from '../repositories/ChallengesRepository'

type CreateChallengeSubmissionRequest = {
  studentId: string
  challengeId: string
}

export class CreateChallengeSubmission {
  constructor(
    private studentRepository: StudentRepository,
    private challengeRepository: ChallengeRepository
  ) {}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = await this.studentRepository.findById(studentId)

    if (!student) {
      throw new Error('Student does not exist.')
    }

    const challenge = await this.challengeRepository.findById(challengeId)

    if (!challenge) {
      throw new Error('Challenge does not exists.')
    }

    const submission = Submission.create({ studentId, challengeId })
    return submission
  }
}
