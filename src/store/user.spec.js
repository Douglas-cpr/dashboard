import useStore from '../hooks/useStore'
import {
  cleanCurrentUser,
  resetUserStore,
  setApiKey,
  setCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    const store = useStore()

    setCurrentUser({ name: 'Douglas' })
    expect(store.User.currentUser.name).toBe('Douglas')
  })

  it('should set api_key on current user', () => {
    const store = useStore()

    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    const store = useStore()

    setCurrentUser({ name: 'Douglas' })
    expect(store.User.currentUser.name).toBe('Douglas')

    cleanCurrentUser()
    expect(store.User.currentUser).toEqual({})
  })
})
