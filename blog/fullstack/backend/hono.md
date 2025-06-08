# Hono

- [Hono](https://hono.dev/)


## 使用vitest测试Hono接口


::: code-group

```ts [index.ts]
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

export const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000

console.log(`Server is running: http://127.0.0.1:${port}`)

serve({
  fetch: app.fetch,
  port
})
```

```ts [index.test.ts]
import { describe, test ,expect} from 'vitest'
import { app } from '../src/index'

describe('hono app tes', () => {
    test('root test', async () => {
        const res = await app.request('/')
        console.log(res);
        expect(res.status).toBe(200)
        expect(await res.text()).toBe('Hello Hono!')
    })
})
```

:::
