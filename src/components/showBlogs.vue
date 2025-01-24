
    


<template>
    <div id="show-blogs" v-theme:column="'wide'">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search" />
        <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
            <router-link :to="'/blog/' + blog.id">
                <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            </router-link>
            <article>{{ blog.body | snippet }}</article>
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
    },
    filters: {
      'to-uppercase'(value) {
        return value.toUpperCase();
      }
    },
    directives: {
      rainbow: {
        bind(el) {
          el.style.color = '#' + Math.random().toString().slice(2, 8);
        }
      }
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
  #show-blogs a {
    color: #444;
    text-decoration: none;
  }
  </style>
  