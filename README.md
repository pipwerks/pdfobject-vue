# pdfobject-vue
A PDFObject component for Vue 3 projects

Creates a `<PDFObject>` Vue component, enabling easy PDF embedding in any Vue 3 project. Pass the URL of the PDF via the `url` parameter (String), and any desired options via the `:options` (Object). Note the binding via colon `:options`. 

A full list of PDFObject options (and examples) can be found at [PDFObject.com](https://pdfobject.com). 

Assumes PDFObject has also been installed via NPM. `npm install pdfobject`

## Example

In your vue file, such as App.vue:
```
<PDFObject url="/pdf/sample.pdf" :options="{ height: '500px', pdfOpenParams: { view: 'FitV' }}" />
```

In main.js
```
import { createApp } from 'vue';
import App from './App.vue';
import PDFObjectVuePlugin from 'pdfobject-plugin';

const app = createApp(App);
app.use(PDFObjectVuePlugin);
app.mount('#app');
```

## Links
PDFObject documentation https://pdfobject.com

PDFObject source code https://github.com/pipwerks/pdfobject

Test project for this plugin/component: https://github.com/pipwerks/PDFObject-Vue-Test

NPM: https://www.npmjs.com/package/pdfobject-vue 
