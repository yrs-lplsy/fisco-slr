<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import {computed} from "vue";

export default {
  components: {
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()
    const menuData = store.state.tab.menu
    const getMenu = computed(() => {
      return menuData
    })
    // eslint-disable-next-line vue/return-in-computed-property
    const test = computed(() => {
      console.log(route.name)
    })
    const handleOpen = (key, keyPath) => {
      // console.log(key, keyPath)
      return key, keyPath
    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
      return key, keyPath
    }
    const loadPage = (item) => {
      router.push({name: item.name})
    }

    return {
      handleOpen,
      handleClose,
      loadPage,
      getMenu,
      test,
      route,
    }
  }
}


</script>

<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#78bb7b"
      class="el-menu-vertical-demo"
      :default-active="route.name"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
      :collapse="!$store.state.tab.isCollapse"
  >
    <el-menu-item index="home" style="color: #fff;text-decoration: none;">
      <img src="../../assets/logo.png" class="system-logo">
      <span v-show="$store.state.tab.isCollapse" style="font-weight: bold; ">猪肉安全溯源系统</span>
    </el-menu-item>
    <el-menu-item
        @click="loadPage(item)"
        v-for="item in getMenu"
        :key="item.name"
        :index="item.name"
    >
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      <template #title>{{ item.label }}</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.system-logo {
  width: 36px;
  height: 36px;
}

.el-menu-vertical-demo {
  height: 100vh;
}

.el-menu {
  border-right: none;
}

.system-logo {
  width: 36px;
  height: 36px;
}
</style>