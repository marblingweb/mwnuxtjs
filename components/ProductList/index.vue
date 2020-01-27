<template>
  <div>
    <nuxt-link :style="{'background-image':'url(/'+product.foto+')'}" :to="'/projelerimiz/'+product.link" tag="li" class="project-item">
      <div class="project-text">
        <div>
          <h1>{{ product.baslik | uppercase }}</h1>
          <h2>/{{ product.parentbaslik }}</h2>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['product']
}
</script>
