<template>
  <div class="homeComponent">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'homeComponent',
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  watch: {
    user(auth) {
      if (!auth) {
        this.$router.push('/login');
      }
    },
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">

</style>
