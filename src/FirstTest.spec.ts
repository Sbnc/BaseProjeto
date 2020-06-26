// Testando o teste xD

import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Bert'

  expect(user.name).toEqual('Bert')
})
