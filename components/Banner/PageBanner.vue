<template>
  <div class="container-banner">
    <div :style="{'background-image':'url('+image+')'}" class="image medium" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['image']
}
</script>
