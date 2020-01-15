<template>
  <div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    if(this.$auth.hasToken()) {
      window.location.href = '/dashboard'
    } else {
      window.location.href = '/login'
    }
  }
};
</script>
