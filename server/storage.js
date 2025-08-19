import { randomUUID } from "crypto"
// NOTE: You don’t need to import types from @shared/schema in JS.
// If you still want schema validation, you can import runtime schema objects instead.

export class MemStorage {
  constructor() {
    this.users = new Map()
    this.consultationRequests = new Map()
  }

  async getUser(id) {
    return this.users.get(id)
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    )
  }

  async createUser(insertUser) {
    const id = randomUUID()
    const user = { ...insertUser, id }
    this.users.set(id, user)
    return user
  }

  async createConsultationRequest(insertRequest) {
    const id = randomUUID()
    const request = {
      ...insertRequest,
      id,
      status: "pending",
      createdAt: new Date(),
    }
    this.consultationRequests.set(id, request)
    return request
  }

  async getConsultationRequests() {
    return Array.from(this.consultationRequests.values())
  }
}

export const storage = new MemStorage()
