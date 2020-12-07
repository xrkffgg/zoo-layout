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

<Layout title='zoo-layout' vSlots={slots}></Layout>

//template

<template>
    <Layout title='zoo-layout'>
        <div slot="header">header</div>
        <div>main</div>
    </Layout>
</template>

```