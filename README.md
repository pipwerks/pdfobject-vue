# pdfobject-vue
A PDFObject component for Vue 3 projects

Creates a `<PdfObject>` Vue component, enabling easy PDF embedding in any Vue 3 project. Pass the URL of the PDF via the `url` parameter (String), and any desired options via the `:options` (Object). Note the binding via colon `:options`. 

**Important:** While PDFObject has always been spelled with capitalized PDF (because it's an acronym), the Vue component uses camelCase `PdfObject`. This is to align with Vue's naming convention which stipulates component names should be comprised of two words.

It's safe to use either `<PdfObject>` or `<pdf-object>`.

A full list of PDFObject options (and examples) can be found at [PDFObject.com](https://pdfobject.com). 

Assumes the PDFObject JS utility has also been installed via NPM. `npm install pdfobject`

## Example

In your vue file, such as App.vue:
```
<PdfObject url="/pdf/sample.pdf" :options="{ height: '500px', pdfOpenParams: { view: 'FitV' }}" />
```

In main.js
```
import { createApp } from 'vue';
import App from './App.vue';
import PDFObjectPlugin from 'pdfobject-vue';

const app = createApp(App);
app.use(PDFObjectPlugin);
app.mount('#app');
```

## Links
PDFObject documentation https://pdfobject.com

PDFObject source code https://github.com/pipwerks/pdfobject

Test project for this plugin/component: https://github.com/pipwerks/PDFObject-Vue-Test

NPM: https://www.npmjs.com/package/pdfobject-vue 
