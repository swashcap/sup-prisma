import 'perish'
import faker from 'faker'
import { prisma, Post, User } from '../generated/prisma-client'

const fill = (min: number, max: number) =>
  Array.from(new Array(faker.random.number({ max, min })))

const getUser = (): User => ({
  email: faker.internet.email(),
  id: faker.random.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
})

const getPost = (): Post => ({
  id: faker.random.uuid(),
  published: faker.random.boolean(),
  title: faker.lorem.words(
    faker.random.number({
      max: 10,
      min: 5,
    })
  ),
})

const main = async () =>
  await Promise.all([
    fill(2, 5).map(() =>
      prisma.createUser({
        ...getUser(),
        posts: {
          create: fill(1, 3).map(() => getPost()),
        },
      })
    ),
  ])

main()
