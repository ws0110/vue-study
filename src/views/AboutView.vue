<template>
  <div class="about">
    <h1>This is an about page</h1>
    <NestedComponentVue />
    <EventParentComponentVue />

    <EmitParentComponentVue />

    <SlotUseModalLayoutVue />

    <CompositionAPIVue />

    <MixInVue />

    <StoreAccessVue />
  </div>
</template>
<script>
import NestedComponentVue from "@/components/NestedComponent.vue";
import EventParentComponentVue from "@/components/EventParentComponent.vue";
import EmitParentComponentVue from "@/components/EmitParentComponent.vue";
import SlotUseModalLayoutVue from "@/components/SlotUseModalLayout.vue";
import CompositionAPIVue from "@/components/CompositionAPI.vue";
import MixInVue from "@/components/MixIn.vue";
import StoreAccessVue from "@/components/StoreAccess.vue";

export default {
  components: {
    NestedComponentVue,
    EventParentComponentVue,
    EmitParentComponentVue,
    SlotUseModalLayoutVue,
    CompositionAPIVue,
    MixInVue,
    StoreAccessVue,
  },
};
</script>
