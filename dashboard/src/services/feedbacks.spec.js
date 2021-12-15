import mockAxios from 'axios'
import FeedbacksService from './feedbacks'

jest.mock('axios')

describe('FeedbacksService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('shoud return all of feedbacks when pass null param', async () => {
    const feedbacks = [
      {
        apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165',
        createdAt: 1608681600000,
        device: 'Chrome 85.0, macOS 10.14',
        fingerprint: '490135491',
        id: 'eab759f8-f238-4ff9-ae91-ee1558982329',
        page: 'https://feedbacker.com/pricing',
        text: 'Podia ter um botão de solicitar demo 1',
        type: 'IDEA'
      },
      {
        apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165',
        createdAt: 1605225600000,
        device: 'Chrome 85.0, macOS 10.14',
        fingerprint: '490135491',
        id: 'eab759f8-f238-4ff9-ae91-ee1558982329',
        page: 'https://feedbacker.com/pricing',
        text: 'Muito bom!',
        type: 'OTHER'
      }
    ]

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: feedbacks })
    })

    const response = await FeedbacksService(mockAxios).getAll()

    expect(response.data.length).toEqual(feedbacks.length)

    expect(response.data[0]).toHaveProperty('apiKey')
    expect(response.data[0]).toHaveProperty('createdAt')
    expect(response.data[0]).toHaveProperty('device')
    expect(response.data[0]).toHaveProperty('fingerprint')
    expect(response.data[0]).toHaveProperty('id')
    expect(response.data[0]).toHaveProperty('page')
    expect(response.data[0]).toHaveProperty('text')
    expect(response.data[0]).toHaveProperty('type')

    expect(response).toMatchSnapshot()
  })

  it('should return all of feedbacks summary when pass null param ', async () => {
    const feedbacksSummmary = {
      all: 7,
      idea: 3,
      issue: 3,
      other: 1
    }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: feedbacksSummmary })
    })

    const response = await FeedbacksService(mockAxios).getSumary()

    expect(response.data).toHaveProperty('all')
    expect(response.data).toHaveProperty('idea')
    expect(response.data).toHaveProperty('issue')
    expect(response.data).toHaveProperty('other')
  })
})
