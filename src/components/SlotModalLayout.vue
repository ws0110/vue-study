<template>
  <div class="modal-container">
    <header>
      <!-- Named Slot -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- Default  Slot -->
      <slot></slot>
    </main>
    <footer>
      <!-- Named Slot -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style scoped>
.modal-container {
  border: 1px solid #ddd;
}
</style>
