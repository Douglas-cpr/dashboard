import mockAxios from 'axios'
import AuthService from './auth'

jest.mock('axios')

describe('AuthService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return a token when user login', async () => {
    const token = '123.123.123'

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({ email: 'igor@igor.me', password: '123' })

    expect(response.data).toHaveProperty('token')
    expect(response).toMatchSnapshot()
  })

  it('should return an user when user register', async () => {
    const user = {
      name: 'Douglas',
      password: '123',
      email: 'douglas@test.me'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const reponse = await AuthService(mockAxios).register(user)
    expect(reponse.data).toHaveProperty('name')
    expect(reponse.data).toHaveProperty('password')
    expect(reponse.data).toHaveProperty('email')
    expect(reponse).toMatchSnapshot()
  })

  it('should throw an error when not found', async () => {
    const errors = { status: 404, statusText: 'Not Found'}

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors })
    })

    const response = await AuthService(mockAxios).login({ email: 'igor@igor.me', password: '123' })

    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
  })
})