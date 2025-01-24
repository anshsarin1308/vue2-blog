

<template>
    <div id="show-blogs">
      <h1>List Blog Titles</h1>
      <input type="text" v-model="search" placeholder="search blogs" />
      <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
        <h2>{{ blog.title }}</h2>
      </div>
    </div>
  </template>
  
  <script>
import { store } from '../store';
  export default {

    computed: {
      filteredBlogs() {
        return this.$store.getters.filteredBlogs;
      },
      search: {
        get() {
          return this.$store.state.search;
        },
        set(value) {
          this.$store.dispatch('updateSearch', value);
        }
      }
    },
    created() {
      this.$store.dispatch('fetchBlogs');
    }
  };
  </script>
  
  <style>
  #show-blogs {
    max-width: 800px;
    margin: 0px auto;
  }
  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
  </style>
  