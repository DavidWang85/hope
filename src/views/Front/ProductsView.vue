<template>
  <LoadingPlugin :active="isLoading" :is-full-page="fullPage" :z-index="1060">
    <div class="loadingio-spinner-dual-ball-eq2qwqnc1x">
      <div class="ldio-tw1s1a7kdy9">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingPlugin>
  <div class="pages-banner">
    <img
      src="https://images.unsplash.com/photo-1532329683184-6ffd13057d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80"
      alt=""
    />
    <h2 class="pages-banner-title">服務總覽</h2>
  </div>
  <div class="container page-top">
    <div class="mt-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div class="col" v-for="product in products" :key="product.id">
          <div
            class="card shadow border-0 mb-4 position-relative position-relative"
          >
            <div
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
              style="
                height: 200px;
                background-size: cover;
                background-position: center center;
              "
            ></div>
            <a href="#" class="text-dark">
              <i
                class="far fa-heart position-absolute"
                style="right: 16px; top: 16px"
              ></i>
            </a>
            <div class="card-body p-0">
              <div class="mb-0 mt-3">
                <h4 class="text-center">
                  <router-link
                    class="text-dark text-decoration-none"
                    :to="`/product/${product.id}`"
                  >
                    {{ product.title }}
                  </router-link>
                </h4>
              </div>
              <p class="text-muted mt-3">NT$ {{ product.price }}</p>
              <p
                class="card-text text-muted mb-0"
                style="height: 3.5rem; overflow: hidden"
              >
                {{ product.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PaginationCom
        :pages="pagination"
        @get-products="getProducts"
      ></PaginationCom>
    </div>
  </div>
</template>

<script>
import PaginationCom from "@/components/PaginationCom";

export default {
  components: {
    PaginationCom,
  },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
