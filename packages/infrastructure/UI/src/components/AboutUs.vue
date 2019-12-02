<template>
    <ul id="userList">
        <li v-for="user in userList" v-bind:key="user.id">
            {{ user.id }} {{ user.name }}
        </li>
    </ul>
</template>

<script>
  export default {
    name: "AboutUs",
    props: {
      userList:{
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
