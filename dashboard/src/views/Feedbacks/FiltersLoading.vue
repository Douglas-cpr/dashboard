<template>
  <Content-loader
    class="flex flex-col items-center rounded"
    width="100%"
    height="300px"
  >
    <Content-loader
      class="rounded mt-3"
      width="90%"
      height="50px"
      animation-duration="2s"
     />

    <Content-loader
      class="rounded mt-3"
      width="80%"
      height="50px"
      animation-duration="2.3s"
     />

    <Content-loader
      class="rounded mt-3"
      width="90%"
      height="50px"
      animation-duration="2.7s"
     />

    <Content-loader
      class="rounded mt-3"
      width="90%"
      height="50px"
      animation-duration="2.9s"
     />
  </Content-loader>
</template>

<script>
import ContentLoader from '@/components/ContentLoader'

export default {
  components: { ContentLoader }
}
</script>
