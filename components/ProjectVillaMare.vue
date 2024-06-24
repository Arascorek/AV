<!-- components/ProjectVillaMare.vue -->
<template>
    <div class="project">
      <h3>Villa Mare</h3>
      <a href="../pages/projects/Villa Mare/output/index.html">
        <img src="../pages/projects/Villa Mare/output/preview.jpg" alt="Villa Mare">
      </a>
      <p>Wirtualna wycieczka po Villa Mare</p>
    </div>
  </template>
  
  <script setup lang="ts">
  // Nie ma potrzeby dodawania skryptu w tym prostym komponencie
  </script>
  
  <style scoped>
  .project {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
  }
  .project img {
    max-width: 100%;
    height: auto;
  }
  </style>
  