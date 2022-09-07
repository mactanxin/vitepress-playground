## 类型安全的Provide/Inject
使用 Vue 提供的 `InjectionKey<T>` 类型工具来在不同的上下文中共享类型

```javascript
// context.ts

import { InjectionKey } from 'vue'

export interface UserInfo {
  id: number
  name: string
}

export const injectKeyUser: InjectionKey<UserInfo> = Symbol()
```

之后使用

```javascript
// parent.vue
import { provide } from 'vue'
import { injectKeyUser } from './context' // 上文中建立的 Symbol

export default {
  setup () {
    provide(injectKeyUser, {
      id: '7', // 类型错误, 应该是 number
      name: 'Xin'
    })
  }
}

// child.vue

import { inject } from 'vue'
import { injectKeyUser } from './context'

export default {
  setup() {
    const user = inject(injectKeyUser) // 获取到类型 
    // UserInfo | undefined
    // 不确定child一定在parent下面
    if (user) {
      console.log(user.name) // Xin
    }
  }
}

```
