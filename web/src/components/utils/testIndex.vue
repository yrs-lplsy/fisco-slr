<script>

</script>

<template>
  <div>
    <el-container>
      <el-aside class="aside" width="auto">
        <h1 class="test-aside">Aside</h1>
      </el-aside>
      <el-container>
          <el-header>
            <h1 class="test-header">Header</h1>
            <h1 class="test-tag">tag</h1>
          </el-header>
          <el-main>
            <h1 class="test-main">Main</h1>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.test-aside {
  background-color: aqua;
}

.test-header {
  background-color: bisque;
}

.test-tag {
  background-color: brown;
}

.el-header,
.el-main{
  padding: 0;
  margin: 0;
}
</style>