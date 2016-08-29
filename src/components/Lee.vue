<template>
	<div class="lee">
		<h1>{{msg}}</h1>
		<button v-on:click="clickme">Click!</button>
	</div>
</template>
<script>
export default {
  props: [
    'myattr'
  ],
  data () {
    return {
      msg: 'hello from lee!'
    }
  },
  methods: {
    clickme () {
      console.log(this.myattr)
    }
  }
}
</script>

<style>
.lee{color:red;}
</style>
