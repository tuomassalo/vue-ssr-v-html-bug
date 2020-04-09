<template>
  <div id="app">
    <div v-if="foo" v-html="'Foo.'"/>
    <div v-else>
      bar: <bar-component/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BarComponent from "components/BarComponent.vue";
import Vue from "vue";

export default {
  components: {
    "bar-component": BarComponent
  },

  data() {
    return { foo: false };
  }
};
</script>
