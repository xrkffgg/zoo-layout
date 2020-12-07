# zoo-layout

## install

```
npm install @zoo-js/layout
// or
yarn add @zoo-js/layout
```

## use
```javascript
import { createApp } from 'vue'
import Layout from '@zoo-js/layout'
createApp().use(Layout)

//jsx

const slots = {
    header: () => <div>header</div>,
    default: () => <div>main</div>
}

<Layout title={name: 'xx', url: 'xx'} vSlots={slots}></Layout>

//template

<template>
    <Layout title={
        name: 'xx',
        url: 'xxx'
    }>
        <div slot="header">header</div>
        <div>main</div>
    </Layout>
</template>

```