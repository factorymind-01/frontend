<style scoped>
    @import url("./styles/app.scss");
</style>

<template class="box_app">
  <v-app>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
