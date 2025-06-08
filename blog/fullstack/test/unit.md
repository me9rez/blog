# 单元测试

- [vitest](https://vitest.dev/)
- [mocha](https://mochajs.org/)
- [sinon](https://sinonjs.org/)
- [ava](https://github.com/avajs/ava)
- [manten](https://github.com/privatenumber/manten)


## vitest

### vitest测试typeorm配置

::: tip 使用swc代替vite中的esbuild,并配置装饰器支持
1. [rollup-plugin-swc3](https://www.npmjs.com/package/rollup-plugin-swc3)
2. [unplugin-swc](https://github.com/unplugin/unplugin-swc)
:::

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { swc } from 'rollup-plugin-swc3';

export default defineConfig({
    esbuild: false, // [!code focus]
    plugins: [
        swc({
            jsc: {
                target: 'esnext',
                parser: {
                    syntax: 'typescript',
                    dynamicImport: true,
                    decorators: true,
                },
                transform: {
                    legacyDecorator: true,
                    decoratorMetadata: true,
                },
            },
        }),
    ],
    test: {
        testTimeout: 10 * 60 * 1000,
    },
})
```