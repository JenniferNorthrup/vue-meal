<template>
  <main>
    <top></top>
    <content>
      <router-view name="frontRouter"></router-view>
    </content>
    <bottom></bottom>
  </main>
</template>

<script>
  export default {
  name: 'front',
  data () {
  return {
  msg: 'Welcome to EatWell'
}
}
}
</script>
