<template>
  <div>
   

  
  <blogHeader></blogHeader>
  <router-view></router-view>
  </div>
</template>

<script>


import addBlog from './components/addBlog.vue'

import showBlogs from './components/showBlogs.vue'

import listBlog from './components/listBlog.vue'

import blogHeader from './components/blogHeader.vue'






export default {
  components: {
    'addBlog':addBlog,
    'showBlogs':showBlogs,
    'listBlog':listBlog,
    'blogHeader':blogHeader

  },
  data() {
    return {
     
    }
  },
  // 
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}
</style>
