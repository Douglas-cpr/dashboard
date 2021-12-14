import mockAxios from 'axios'
import UserService from './users'

jest.mock('axios')

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return a user information when pass null param', async () => {
    const user = {
      id: 'eab759f8-f238-4ff9-ae91-ee1558982329',
      name: 'Igor Halfeld',
      email: 'igor@igor.me',
      apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165',
      createdAt: 1599264000000
    }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await UserService(mockAxios).getMe()

    expect(response.data).toHaveProperty('id')
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toHaveProperty('apiKey')
    expect(response.data).toHaveProperty('createdAt')
  })

  it('should return a user information when pass random string param', async () => {
    const user = {
      id: 'eab759f8-f238-4ff9-ae91-ee1558982329',
      name: 'Igor Halfeld',
      email: 'igor@igor.me',
      apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165',
      createdAt: 1599264000000
    }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await UserService(mockAxios).getMe('test')

    expect(response.data).toHaveProperty('id')
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toHaveProperty('apiKey')
    expect(response.data).toHaveProperty('createdAt')
  })

  it('should return an api key when pass null param', async () => {
    const apiKey = {
      apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: apiKey })
    })

    const response = await UserService(mockAxios).generateApiKey()

    expect(response.data).toHaveProperty('apiKey')
  })

  it('should return an api key when pass string param', async () => {
    const apiKey = {
      apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: apiKey })
    })

    const response = await UserService(mockAxios).generateApiKey('test')

    expect(response.data).toHaveProperty('apiKey')
  })
})
