import PDFObjectComponent from './components/PDFObject.vue';

const PDFObjectVuePlugin = {
  install(app) {
    app.component('PdfObject', PDFObjectComponent);
  }
};


export { PDFObjectComponent as PdfObject };

export default PDFObjectVuePlugin;
