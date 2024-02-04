import PDFObjectComponent from './components/PDFObject.vue';

const PDFObjectVuePlugin = {
  install(app) {
    app.component('PdfObject', PDFObjectComponent);
  }
};

export default PDFObjectVuePlugin;