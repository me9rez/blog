# Fastify

- [Fastify](https://www.fastify.io/)


## 使用vitest测试fastify接口


::: code-group

```ts [index.ts]
import Fastify from 'fastify'
import testRoute from './routes/test'

function buildFastify() {
  const fastify = Fastify({
    logger: false,
  })

  fastify.register(testRoute)

  // Run the server!
  fastify.listen({ port: 3000, host: '127.0.0.1' }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log(`服务器启动成功: ${address}`)
  })
  return fastify
}

export { buildFastify }
```

```ts [./route/test.ts]
import type { FastifyInstance } from 'fastify'

interface IHelloQuerystring {
  a: string
}

async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.get<{
    Querystring: IHelloQuerystring
  }>('/hello', async (request, reply) => {
    const query = request.query
    reply.send({ hello: `${query.a}` })
  })

  fastify.post<{
    Body: IHelloQuerystring
  }>('/hello', async (request, reply) => {
    const body = request.body
    reply.send({
      b: `msg ${body.a}`,
    })
  })
}

export default routes
```

```ts [index.test.ts]
import { describe, it, beforeAll, expect } from 'vitest'
import { buildFastify } from '../src/index'
import type { FastifyInstance } from 'fastify'

describe('api server test', () => {
  let fastify: FastifyInstance
  beforeAll(() => {
    fastify = buildFastify()
    return () => {
      fastify.close()
    }
  })

  it('root', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
    })

    console.log(res.json())

    expect(res.json().hello).toBe('world')
  })

  it('get/hello', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/hello',
      query: { a: 'b' },
    })

    expect(res.json().hello).toBe('b')
  })

  it('post/hello', async () => {
    const res = await fastify.inject({
      method: 'POST',
      url: '/hello',
      body: {
        a: 'foo',
      },
    })

    expect(res.json().a).toBe('foo')
  })
})
```

:::
