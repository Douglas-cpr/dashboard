import useStore from '../hooks/useStore'
import { setGlobalLoading } from './global'

describe('GlobalStore', () => {
  it('should set global loading when pass a boolean param', () => {
    const store = useStore()

    setGlobalLoading(true)
    expect(store.Global.isLoading).toEqual(true)
  })

  it('should set global loading when pass a string param', () => {
    const store = useStore()

    setGlobalLoading('test2')
    expect(store.Global.isLoading).toEqual(true)
  })

  it('should set global loading to false', () => {
    const store = useStore()

    setGlobalLoading(true)
    expect(store.Global.isLoading).toEqual(true)

    setGlobalLoading(false)
    expect(store.Global.isLoading).toEqual(false)
  })
})
