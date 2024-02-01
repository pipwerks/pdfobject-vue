import PDFObjectComponent from './components/PDFObject.vue';

const PDFObjectVuePlugin = {
  install(app) {
    app.component('PDFObject', PDFObjectComponent);
  }
};

export default PDFObjectVuePlugin;