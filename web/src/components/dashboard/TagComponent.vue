<script>
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import {onMounted, watch} from "vue";
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const tags = store.state.tab.tags

    const getTags = () => {
      let cur = { name: route.name, meta: route.meta }
      // console.log(cur)
      let flag = true
      for (let tag of tags) {
        if (tag.name === cur.name) {
          flag = false
          break
        }
      }
      if(flag){
        if(cur.name !== "NotFound"){
          store.commit("addTag", JSON.parse(JSON.stringify({...cur, effect: "right"})))
        }
      }
      updateEffect()
    }
    onMounted(() => getTags())
    watch(() => route.name, () => getTags())
    const updateEffect = () => {
      for (let tag of tags) {
        if (tag.name === route.name) tag.effect = 'dark'
        else tag.effect = 'plain'
      }
    }

    const changeMenu = (name) => {
      router.push({ name: name})
    }

    const handleClose = (tag, index) => {
      let length = tags.length - 1
      //删除标签
      store.commit('closeTag', tag)
      //删除后是否跳转
      if (tag.effect === 'plain') return;
      if (index === length) {
        console.log(tags[index - 1])
        router.push({ name: tags[index - 1].name })
      } else {
        console.log(tags[index])
        router.push({ name: tags[index].name })
      }

    }
    return {
      tags,
      changeMenu,
      handleClose,
      getTags,
      updateEffect,
    }
  }
}

</script>

<template>
<!--  <h1>Tag-component</h1>-->
  <div class="flex gap-2 tags">
    <el-tag class="tag" v-for="(tag, index) in tags"
            :key="tag.name"
            :effect="tag.effect"
            :closable="tags.length > 1"
            @click="changeMenu(tag.name)"
            @close="handleClose(tag, index)"
    >
      {{ tag.meta.label }}
    </el-tag>
  </div>
</template>

<style lang="less" scoped>
.tags {
  width: 100%;
  margin-top: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  .tag {
    margin: 0px 10px;
    cursor: pointer;
    margin-bottom: 5px;
  }
}
</style>