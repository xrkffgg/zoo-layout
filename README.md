# zoo-layout

[![](https://img.shields.io/npm/v/@zoo-js/layout?style=flat-square)](https://www.npmjs.com/package/@zoo-js/layout)

Layout for zoo-js.
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
