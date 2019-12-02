<template>
  <div class="about">
    <h1>About us</h1>
    <AboutUs :userList="userList"/>
  </div>
</template>

<script>
  import * as Initiator from 'app-core/app-service/Initiator.js';

  import * as UserService from 'app-core/domain-service/UserService.js';

  import AboutUs from "@/components/AboutUs.vue";

  // load user from mocked backend
  Initiator.userInitiator.loadUserFromServer();

  // Add one more user
  UserService.userService.addUser('Andreas');

  export default {
    name: "about",
    data: () => {
      return {
        userList: UserService.userService.userList
      }
    },
    components: {
      AboutUs
    }
  };

</script>
