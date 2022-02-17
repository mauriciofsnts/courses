import { Challenge } from '../../domain/entities/challenge'
import { ChallengeRepository } from './../../application/repositories/ChallengesRepository'

export class InMemoryChallengesRepository implements ChallengeRepository {
  public items: Challenge[] = []

  findById(id: string): Promise<Challenge | null> {
    const challenge = this.items.find((ch) => ch.id === id)

    if (!challenge) return Promise.resolve(null)
    return Promise.resolve(challenge)
  }
}
