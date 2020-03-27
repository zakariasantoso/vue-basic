<template>
  <div class="user-profile-page">
    <side-bar :menus="menus" :isOpen="isSideBarOpen">
      
    </side-bar>
    <div class="up-content">
      <app-button @click="isSideBarOpen = !isSideBarOpen">{{isSideBarOpen ? '&lt;' : '&gt;' }}</app-button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/frames/AppSideBar"
import AppButton from "../components/frames/AppButton"
export default {
  components: {
    SideBar,
    AppButton
  },
  data: () => {
    return {
      menus: [
        {
          title: "Account",
          href: "/profile/account"
        },
        {
          title: "Setting",
          href: "/profile/setting"
        },
        {
          title: "Privacy",
          href: "/profile/privacy"
        },
        {
          title: "Log Out",
          href: "/"
        }
      ],
      isSideBarOpen: false
    }
  }

}
</script>

<style lang="scss">
.user-profile-page {
  display: flex;
  height: 100%;
  .up-content {

  }
}
</style>