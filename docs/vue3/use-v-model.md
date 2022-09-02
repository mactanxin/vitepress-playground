使用 useVModel 实现双向数据绑定

 ```javascript
export function useVModel(props, name) {
	const emit = getCurrentInstance().emit
	return computed({
		get() {
			return props[name]
		}

		set(v) {
			emit(`update:${name}`, v)
		}
	})
}
```

```vue
<script>
export default defineComponent({
	setup(props) {
		const value = useVModel(props, 'value')
		return { value }
	}
})
</script>

<template>
	<input v-model="value" />
</template>
```
