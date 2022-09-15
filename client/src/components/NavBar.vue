<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-survival101">
    <div class="container">
      <a class="navbar-brand" href="#">
        <h2>Game</h2>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bookmark">Bookmark</router-link>
          </li>
        </ul>
        <form class="form-inline">
          <div class="input-group">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search Anything Here..."
              class="form-control"
              v-model="input"
            />
            <span class="input-group-addon"><button>Search</button></span>
          </div>
        </form>
        <ul class="nav bg-light ms-auto">
          <li><a href="#">LogOut</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "pinia";
import { mapState } from "pinia";
import { useCustomStore } from "../stores/index";
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    changePage() {
      this.$router.push("/");
    },
    // ...mapActions(useCounterStore, ["filterByName", "logOut", "showBookmark"]),
    handleSearch() {
      //   this.filterByName(this.input);
      //   console.log("kepencet");
    },
    logout() {
      this.logOut();
      this.$router.push("/login");
    },
    fetchBookmark() {
      //   console.log("hahahahah");
      this.showBookmark();
    },
  },
};
</script>

<style>
.container {
  max-width: 960px;
}
.navbar-survival101 {
  background-color: #0d6efd;
}
.navbar-survival101 .navbar-brand {
  margin-right: 2.15rem;
  padding: 3px 0 0 0;
  line-height: 36px;
}

.navbar-survival101 .navbar-brand img {
  vertical-align: baseline;
}

.navbar-expand-lg .navbar-nav .nav-link {
  color: #fff;
}

.search-box {
  position: relative;
  height: 34px;
}
.search-box input {
  border: 0;
  border-radius: 3px !important;
  padding-right: 28px;
  font-size: 15px;
}

.search-box .input-group-btn {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
}

.search-box .input-group-btn button {
  background-color: transparent;
  border: 0;
  padding: 4px 8px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 20px;
}

.search-box .input-group-btn button:hover,
.search-box .input-group-btn button:active,
.search-box .input-group-btn button:focus {
  color: rgba(0, 0, 0, 0.4);
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.7rem;
    padding-left: 0.7rem;
  }

  .search-box {
    width: 300px !important;
  }
}

.caroulsel {
  width: 100%;
  overflow: hidden;
  padding: 5px 0 5px 5px;
}

.caroulsel-wrap {
  white-space: nowrap;
  font-size: 0;
}

.caroulsel-wrap a {
  display: inline-block;
  width: 134px;
  height: 92px;
  background-color: silver;
  border: #ccc 1px solid;
  margin-right: 5px;
}
</style>
