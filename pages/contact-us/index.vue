
<template>
  <div>
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to contact us:</p>
    <ul>
      <li>Email: arascorgpt@googlemail.com</li>
      <li>Phone: +123-456-7890</li>
    </ul>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  const mailtoLink = `mailto:arascorgpt@googlemail.com?subject=Contact%20Form&body=Name:%20${name.value}%0AEmail:%20${email.value}%0AMessage:%20${message.value}`;
  window.location.href = mailtoLink;
};
</script>

<style scoped>
/* Styles for the contact us page */
</style>
