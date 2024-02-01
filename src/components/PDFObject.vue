<script setup>
import PDFObject from "pdfobject";
import { onMounted, ref, onUpdated } from "vue";

const props = defineProps({
  url: { type: String, required: true },
  options: { type: Object, required: false }
});

const pdfContainer = ref(null);

const initPDF = () => {
  PDFObject.embed(props.url, pdfContainer.value, props.options);
};

onMounted(initPDF);
onUpdated(initPDF);
</script>

<template>
    <div ref="pdfContainer"></div>
</template>