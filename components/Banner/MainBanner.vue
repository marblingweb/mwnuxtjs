<template>
  <div class="header-container">
    <div class="slider-container" style="background-image:url('/assets/files/slider/slider-bg-antracite.jpg')">
      <div class="slider-line left" />
      <div class="slider-line right" />
      <transition name="in">
        <div v-if="sliderText==true" class="slider-text-container">
          MARBLINGWEB
        </div>
      </transition>
      <div class="slider-brush" />
      <div :style="[{'left':sliderPositionX+'%'},{'top':sliderPositionY+'%'}]" class="slider-image-container">
        <transition-group name="in">
          <div v-for="(image,index) in sliders" :key="image.id" v-if="sliderNo==index" :style="{'background-image':'url('+image.foto+')'}" class="slider-image" />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sliderNo: '0',
      sliderText: false,
      sliderPositionX: '',
      sliderPositionY: '',
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      sliders: 'webconfig/sliders'
    })
  },
  created () {
    setTimeout(() => {
      this.slider()
    }, 1500)
    setTimeout(() => {
      this.sliderText = true
    }, 100)
  },
  methods: {
    playSliderMove (event) {
      this.sliderPositionX = 50 + event.pageX / 100
      this.sliderPositionY = 50 + event.pageY / 100
    },
    stopSliderMove () {
      this.sliderPositionX = 50
      this.sliderPositionY = 50
    },
    slider () {
      setInterval(() => {
        if (this.sliderNo < this.sliders.length - 1) {
          this.sliderNo++
        } else {
          this.sliderNo = 0
        }
      }, 6000)
    }
  }
}
</script>
