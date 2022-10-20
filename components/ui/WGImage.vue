<script setup lang="ts">
import { NImage } from 'naive-ui'
import { Image } from 'types'
interface ImageCompProps {
  image: Image
  altText?: string
  fluid?: boolean
  lazy?: boolean
}
const { image, altText, fluid, lazy } = withDefaults(
  defineProps<ImageCompProps>(),
  {
    image: null,
    altText: '',
    fluid: true,
    lazy: false,
  }
)
const { host: HOST } = useFetchConfig()
const options = computed(() => {
  return {
    width: image?.original?.width,
    height: image?.original?.height,
    alternateText: image?.original?.alt || '',
    originalSrc: image?.original?.src,
    originalFallbackSrc: image?.original_fallback?.src,
    tabSrc: image?.tab?.src || null,
    tabFallbackSrc: image?.tab_fallback?.src || null,
    mobileSrc: image?.mobile?.src || null,
    mobileFallbackSrc: image?.mobile_fallback?.src || null,
  }
})
</script>
<template>
  <picture>
    <source
      v-if="options.mobileSrc"
      media="(max-width:480px)"
      :srcset="HOST + options.mobileSrc"
      type="image/webp"
    />
    <source
      v-if="options.mobileFallbackSrc"
      media="(max-width:480px)"
      :srcset="HOST + options.mobileFallbackSrc"
    />
    <source
      v-if="options.tabSrc"
      media="(max-width:1024px)"
      :srcset="HOST + options.tabSrc"
      type="image/webp"
    />
    <source
      v-if="options.tabFallbackSrc"
      media="(max-width:1024px)"
      :srcset="HOST + options.tabFallbackSrc"
    />

    <source
      v-if="options.originalFallbackSrc"
      :srcset="HOST + options.originalSrc"
    />

    <n-image
      v-if="lazy"
      class="wg-img"
      :src="
        HOST +
        (options.originalFallbackSrc
          ? options.originalFallbackSrc
          : options.originalSrc)
      "
      :alt="options.alternateText"
      :width="options.width"
      :height="options.height"
      object-fit="cover"
      lazy
      preview-disabled
    ></n-image>

    <n-image
      v-else
      class="wg-img"
      :src="
        HOST +
        (options.originalFallbackSrc
          ? options.originalFallbackSrc
          : options.originalSrc)
      "
      :alt="options.alternateText"
      :width="options.width"
      :height="options.height"
      object-fit="cover"
      preview-disabled
    ></n-image>
  </picture>
</template>
<style scoped lang="scss">
/* scoped styles code goes here */
.wg-img :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.full-height {
  .wg-img :deep(img) {
    height: 100%;
    width: auto;
  }
}
/* .logo-img {
  .wg-img {
    height: auto;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center center;
    max-width: 220px;
  }
} */
.full-width {
  .wg-img :deep(img) {
    width: 100%;
  }
}

.dark-overlay {
  height: 100%;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    min-height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
  }

  .wg-img {
    height: 100%;
    width: 100%;
  }
}

@include full-gen('xs', 'height');
@include full-gen('sm', 'height');
@include full-gen('md', 'height');
@include full-gen('lg', 'height');
@include full-gen('xl', 'height');

@include full-gen('xs', 'width');
@include full-gen('sm', 'width');
@include full-gen('md', 'width');
@include full-gen('lg', 'width');
@include full-gen('xl', 'width');
</style>
