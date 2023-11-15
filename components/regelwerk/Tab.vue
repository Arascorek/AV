<template>
  <p
    class="w-40 block py-2 text-center cursor-pointer bg-white lg:w-80 lg:py-4 lg:text-lg 2xl:text-xl"
    @click="changeLabel(props.text)"
  >
    {{ props.text }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});

const emit = defineEmits();

const changeLabel = (e?: string) => {
  const newValue = e;
  emit('updateLabel', newValue);
};
</script>
