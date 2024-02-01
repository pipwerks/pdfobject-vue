# pdfobject-vue
A PDFObject component for Vue 3 projects

Creates a `<PDFObject>` Vue component. Pass the URL of the PDF via the `url` parameter (String), and any desired options via the `:options` (Object). Note the binding via colon `:options`. PDFObject options are explained at [PDFObject.com](https://pdfobject.com). 

Assumes PDFObject has been installed via NPM. `npm install pdfobject`

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