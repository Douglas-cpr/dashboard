<template>
  <Content-loader
    class="flex flex-col items-center rounded"
    width="100%"
    height="300px"
  >
    <Content-loader
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animation-duration="2s"
    />

    <Content-loader
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animation-duration="2.3s"
    />

    <Content-loader
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animation-duration="2.7s"
    />
  </Content-loader>
</template>

<script>
import ContentLoader from '@/components/ContentLoader'

export default {
  components: { ContentLoader }

}
</script>
