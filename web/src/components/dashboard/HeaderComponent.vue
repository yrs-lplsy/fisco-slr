<script>
import { useStore } from 'vuex'

export default {
  components: {

  },
  setup() {
    const store = useStore()
    const changeMenuState = () => {
      store.commit('stateMenu', store.state.tab.isCollapse)
    }

    const logout = () => {
      // console.log("退出登录")
      alert("退出登录")
    }

    return {
      changeMenuState,
      logout,
    }
  }
}

</script>

<template>
  <el-row class="header-container">
    <div @click="changeMenuState" class="icon" v-show="!$store.state.tab.isCollapse">
      <el-icon size="30" color="#545c64">
        <Fold />
      </el-icon>

    </div>
    <div class="icon" v-show="$store.state.tab.isCollapse" @click="changeMenuState">
      <el-icon size="30" color="#545c64">
        <Expand />
      </el-icon>
    </div>
    <!-- </el-col> -->
    <el-col :span="20">
<!--      <BreadCrumb />-->
      <p>BreadCrumb</p>
    </el-col>
    <el-col :span="2" class="col-3">
      <div class="info-dropdown">
        <img class="photo" src="../../assets/logo.png" alt="">
        <el-dropdown :hide-on-click="false" trigger="click" class="dropdown">
                    <span class="el-dropdown-link">
<!--                        {{ $store.state.user.username }}-->
                        <p>yrs</p>
                        <el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
          <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>
                  个人信息
                </el-dropdown-item>
              <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
</template>

<style lang="less" scoped>
.header-container {
  height: 56px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px rgba(61, 61, 61, 0.1);

  .icon {
    height: 56px;
    width: 56px;
    display: flex;
    margin: 0;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  .icon:hover {
    background-color: #F9F9F9;
  }


  .col-3 {
    height: 56px;
    cursor: pointer;
    display: flex;
    align-items: center;

    .info-dropdown {
      display: flex;
      margin-right: 0;
      align-items: center;

      .photo {
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }

      .el-dropdown-link {
        margin-left: 8px;
        display: flex;
        align-items: center;
      }

      .dropdown {
        height: 56px;
      }
    }
  }

  .col-3:hover {
    background-color: #F9F9F9;
  }
}
</style>