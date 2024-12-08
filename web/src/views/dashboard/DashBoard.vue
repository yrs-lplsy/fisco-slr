<script>
import AsideComponent from "@/components/dashboard/AsideComponent.vue";
import HeaderComponent from "@/components/dashboard/HeaderComponent.vue";
// import MainBodyComponent from "@/components/dashboard/MainBodyComponent.vue";
import TagComponent from "@/components/dashboard/TagComponent.vue";

export default {
  components: {
    // MainBodyComponent,
    TagComponent,
    HeaderComponent,
    AsideComponent,
  }
}

</script>

<template>
  <div>
    <el-container>
      <el-aside class="aside" width="auto">
        <AsideComponent />
      </el-aside>
      <el-container>
        <el-header class="header">
          <HeaderComponent />
        </el-header>
        <el-main class="main">
          <TagComponent />
<!--          <MainBodyComponent />-->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>



.header,
.main{
  padding: 0;
  margin: 0;
}
</style>