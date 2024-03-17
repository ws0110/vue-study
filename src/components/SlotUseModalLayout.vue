<template>
  <SlotModalLayout>
    <template #header>
      <h1>Slot1</h1>
    </template>
    <template #default>
      <p>Alert</p>
    </template>
    <template #footer>
      <button type="button">닫기</button>
    </template>
  </SlotModalLayout>

  <SlotModalLayout>
    <template #header>
      <h2>Slot2</h2>
    </template>
    <template #default>
      <p>Confirm</p>
      <p>{{ i18n.ko.hi }}</p>
    </template>
    <template #footer>
      <button type="button">저장</button>
      <button type="button">닫기</button>
    </template>
  </SlotModalLayout>
</template>
<script>
import SlotModalLayout from "./SlotModalLayout";
export default {
  components: { SlotModalLayout },
  inject: ["i18n"],
};
</script>
