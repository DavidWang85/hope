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
  <div class="container page-top">
    <!-- <div
      style="
        min-height: 400px;
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
      "
      :style="{ background: `url(${product.imageUrl})` }"
    ></div> -->
    <img class="w-100 heightLimit1 img-cover" :src="product.imageUrl" alt="" />
    <div class="row justify-content-between mt-4 mb-7">
      <div class="col-md-7">
        <h2 class="mb-0">{{ product.title }}</h2>
        <p class="fw-bold">NT${{ product.price }}</p>
        <p>{{ product.content }}</p>
        <div class="my-4">
          <img
            v-for="(img, index) in product.imagesUrl"
            :key="index + '123'"
            :src="img"
            alt=""
            class="img-fluid mt-4"
          />
        </div>
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <i class="fas fa-minus"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body pb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="input-group mb-3 border mt-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button"
              id="button-addon1"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
          <input
            type="text"
            class="form-control border-0 text-center my-auto shadow-none"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value="1"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-dark rounded-0 border-0 py-3"
              type="button"
              id="button-addon2"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <a
          href="#"
          @click.prevent="addToCart"
          class="btn btn-dark btn-block rounded-0 py-3"
          >加入購物車</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      product: [],
      isLoading: false,
      fullPage: true,
      id: "",
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.product = res.data.product;
        this.isLoading = false;
        console.log(this.product);
      });
    },
    addToCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: this.id,
        qty: 1,
      };
      this.$http.post(url, { data }).then(() => {
        emitter.emit("get-cart");
      });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
