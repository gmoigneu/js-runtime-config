<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ message }}
      </h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'


export default {
  components: {
    Logo
  },
  data () {
    return {
      message: null
    }
  },
  methods: {
    async fetchMessage() {
      await axios.get('/run/config.json').then(m => {
        axios.get(window.location.protocol + '//api.' + window.location.hostname + '/?token=' + m.data.token)
        .then(response => {
          this.message = response.data.message
        })
      })
    }
  },
  mounted () {
    this.fetchMessage()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
