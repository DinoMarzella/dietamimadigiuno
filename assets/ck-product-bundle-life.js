const SingleProductCard = {
  template: /*html*/ `
  <li class="flex  pl-0 ml-0 py-2 pt-4">
          
            <img
              :src="featured_image"
              class=" flex-none rounded-md bg-white object-cover object-center 
                !w-[120px]
            lg:!h-[165px] lg:!w-[165px] "
            />
          
          <div class="flex-auto space-y-1 px-2">
            <h3 class="text-gray-900 text-lg font-medium">
              <a >
                {{product?.title}}
              </a>
            </h3>
            <p class="flex-none font-medium text-gray-900">
              {{money(selected_variant?.price)}}
            </p>

            <select
              class="px-2 py-3 rounded-[4px] !my-3 w-[212px] text-black bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
             
              @change="onVariantChange($event)"  
            >  
                <option :key="variant.id" :value="variant.id" v-for="variant in allowedvariants"
                :selected="variant.id == selected_variant_id"
                > 
                  {{variant?.title}}
                </option>  
              
            </select> 
            <button 
            v-if="added_to_cart"
            class="bg-[#73994a] px-8 h-[36px] rounded-[4px] w-[212px] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center text-white"
            @click="ShowCartfn()"
            >
            <span class="font-semibold text-white uppercase ">View Cart</span>
            </button> 
            <button v-else  quantity="1"
            :disabled="loading"
            class="bg-[#73994a] px-8 h-[36px] rounded-[4px] w-[212px] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center text-white"
             @click="addToCart(selected_variant.id)"
            >
          <svg aria-hidden="true" v-if="loading" class="mr-2 w-6 h-6 text-gray-200 animate-spin  fill-[#73994a]" viewBox="0 0 100 101" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
          <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
            
            <span v-else class="font-semibold text-white uppercase ">Add to Bag</span>
            </button>
            
          </div> 
        </li>
 
  `,
  props: ["product"],

  data() {
    let variants = this.product?.variants;
    let selected_variant = variants && variants[0];
    return {
      added_to_cart: false,
     
      selected_variant_id: selected_variant?.id,
      selected_variant: selected_variant,
      loading: false,
    };
  }, 
  methods: {
    onVariantChange(e) {
      const variant_id = e.target.value;
      this.selected_variant_id = variant_id;

      const newVariant = this.product?.variants?.find(
        (variant) => variant.id == variant_id
      );
      if (newVariant) this.selected_variant = newVariant;
    },
    ShowCartfn() {
      window.SuperCart.ShowCartfn()
    },

    money(value) {
      if (!value) return 0;
      return "$" + (value / 100).toFixed(2);
    },
    async addToCart(id) {
      this.loading = true;
      let selling_plan = null;
      let variant_id = id;
      let quantity = 1;
      axios
        .post("/cart/add.js", {
          id: id,
          quantity: quantity,
        })
        .then((response) => {
          this.loading = false;
          this.added_to_cart = true;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
          if (
            error &&
            error.response &&
            error.response.data &&
            error.response.data.description
          ) {
            alert(error.response.data.description);
          }
        });
    },
  },
  computed: {
    allowedvariants() {
      let variants = this.product?.variants;

      let allowedvariants = variants?.filter((variant) => {
        return variant.available;
      });

      return allowedvariants;
    },
    featured_image() {
      let image = this.selected_variant?.featured_image?.src;
      if (!image) {
        image = this.product?.images[0];
      }
      return image;
    },
  },
  mounted() {},
};

if (document.querySelector(".bundle-drawer-section")) {
  const productBundles = Vue.createApp({
    delimiters: ["${", "}"],
    data() {
      return {
        isOpen: false,
        is_added_to_cart: false,
        loading: false,
        adding_to_cart: false,
        isOpening: false,
        modalDetails: {},
        products: [],
      };
    },
    methods: {
      ShowCartfn() { 
        window.SuperCart.ShowCartfn();
      },
      bundleADDToCart() {

        let variants = this.products?.map((product) => {
          return product?.variants[0]?.id;
        }
        );
        let quantity = 1;
        let selling_plan = null;
        this.adding_to_cart = true;
        let items = []
        variants.forEach((variant_id) => {
          items.push({
            id: variant_id,
            quantity: quantity,
          })
        });
 
        store.bulkAddToCart(items, (response) => {
          if (response.status != 422) { 
          // window.location.href = "/checkout";
          // toggleCart.showCart();
          this.is_added_to_cart = true;
          } 
          this.adding_to_cart = false;

        });


      },
      closeBundleDrawer() {
        this.isOpening = false;
        this.loading = false;
        this.is_added_to_cart = false;
        setTimeout(() => {
          this.isOpen = false;
        }, 100);
      },
      async getProductByHandle(handle) {
        let product = await fetch(`/products/${handle}.js`).then((response) =>
          response.json()
        );
        return product;
      },
      async loadProducts(productHandles) {
        let products = [];
        this.loading = true;
        for (let productHandle of productHandles) {
          let product;
          try {
            product = await this.getProductByHandle(productHandle);
            let variants = product?.variants;
            if (variants && variants.length > 0) {
              variants = variants.filter(
                (e) => !e?.title.toLowerCase().includes("subscribe")
              );
            }

            product.variants = variants;
          } catch (e) {
            console.log(e);
          }
          if (product) products.push(product);
        }
        this.products = products;
        this.loading = false;
      },
      async showBundleDrawer(details) {
        this.isOpen = true;
        this.loading = true;
        setTimeout(() => {
          this.isOpening = true;
        }, 700);
        this.modalDetails = details;
        let productHandles = details?.Products;
        let handles = productHandles && productHandles.split(",");
        this.loadProducts(handles);
      },
      money(value) {
        if (!value) return 0;
        return "$" + (value / 100).toFixed(2);
      },
    },
    computed: {
      productBundlePrice() {
        return this.products
          ?.reduce((total, product) => {
            let variant = product?.variants[0];
            return total + parseFloat(variant?.price);
          }, 0)
          .toFixed(2);
      },
    },
    watch: {},
    components: {
      "single-product-card": SingleProductCard,
    },
    created() {},
  }).mount(".bundle-drawer-section");
}
