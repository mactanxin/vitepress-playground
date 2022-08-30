# 状态共享

由于组合式API天然提供的灵活性, 状态可以独立于组件被创建和使用.
不一定需要使用 VueX / Pinia

	不支持 SSR

```javascript

// shared.ts
import { reactive } from 'vue'

export const state = reactive({
	foo: 1,
	bar: 'hello'
})
```

```javascript
// A.vue

import { state } from './shared.ts'

state.foo += 1;
```

```javascript
// B.vue

import { state } from './shared.ts'

console.log(state.foo) // 2 
```

## 兼容SSR的状态共享
// Vue Router v4 也使用类似的方式
```javascript
// 插件
export const myStateKey: InjectionKey<MyState> = Symbol()

export function createMySate () {
	const state = {
		/* ... */
	}
	return {
		install(app: App) {
			app.provide(myStateKey, state)
		}
	}
}

export function useMyState(): MyState {
	return inject(myStateKey)!
}
```

```javascript
// main.ts

const app = createApp(App)

app.use(createMyState)
```
