/**
 * Created by unnKoel on 2017/7/16.
 */
import { helloEndpointRoute } from './routes'

test('helloEndPointRoute', () => {
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndpointRoute(123)).toBe('/ajax/hello/123')
})
