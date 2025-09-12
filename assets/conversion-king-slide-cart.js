var _learnq = _learnq || [];

document.addEventListener("lazybeforeunveil", function (e) {
  var bg = e.target.getAttribute("data-bg");
  if (bg) {
    e.target.style.backgroundImage = "url(" + bg + ")";
    e.target.removeAttribute("data-bg");
    e.target.style.filter = "blur(0px)";
  }
});
// Put your application javascript here
const SingleUpsell = {
  template: /*html*/ `  
  <div class="flex flex-col justify-center items-center bg-[#f2f1f58f] p-4 pb-6 rounded-lg col-span-1 "  v-if="item && !isInCart(item)">
  <div class="w-20 h-20"> 
  <img  :src="current_featured_image" width="1500" height="1500" alt="">
  </div>
  <p class="pt-4 text-center text-black"
  :href="item.url" 
  >{{item.title}}</p> 
<div v-if="item.variants.length>1" class="block">
              <select @change="updateSelectedVariant" class="upsell-select-updated text-black pr-[40px] border-0 border-b-1 border-black focus:outline-none focus:border-black mb-2 !text-[12px] lg:text-[14px] px-2 " 
              :value="current_variant.id"              >
                <option v-for="variant in item.variants" :key="variant.id" :value="variant.id">
                  {{ variant.title }}
                </option>
              </select>
              <span class="text-prolon text-xs font-bold block text-center mb-2" v-if="item.tags.includes('bf-sale')">
               <span v-if="item?.handle?.includes('fasting-shake')">{{moneyDown(current_variant.price*80)}}
              </span>
              <span v-else >{{moneyDown(current_variant.price)}}
              </span>

              </span> 
              <span class="text-prolon text-xs font-bold block text-center mb-2" v-else>
              {{money(current_variant.price*100)}}
              </span> 
</div>
<span v-else class="text-black text-[12px] py-2">
<span>{{item.variants[0].title.replace('Default Title','') }}</span>
 <span class="text-prolon text-xs font-bold block text-center mb-2 mt-2" v-if="item.tags.includes('bf-sale')">
             
              <span>
              {{moneyDown(current_variant.price*80)}}
              </span>   
    </span>   
         <span class="text-prolon text-xs font-bold block text-center mb-2" v-else>
              {{money(current_variant.price*100)}}
              </span>  
</span>
  <div class="w-100">
  
  <button class="flex flex-col justify-center h-10 px-8 bg-white text-prolon rounded-3xl !mx-auto"
   @click="UpsellAddToCart(item)" 
  >
  <div class="flex items-center justify-center cursor-pointer">
  <div class="spinner-loader" v-if="item.loading"> </div>
  <span v-else class="text-xs font-bold">Add</span> 

 

  </div>
  </button>
  </div>
  </div>
 
  `,
  props: ["item", "cart"],

  data() {
    return {
      current_variant: false,
    };
  },
  methods: {
    UpsellAddToCart(item) {
      item.loading = true;
      store.addToCartWithProperties({
        id: this.current_variant.id,
        quantity: 1,
        properties: { upsell: true },
        cb: (response) => {
          item.loading = false;
        },
      });
    },
    moneyDown(value) {
      if (!value) return 0;
      return "€" + Math.floor(value / 100).toFixed(2);
    },
    money(value) {
      if (!value) return 0;
      return "€" + (value / 100).toFixed(2);
    },
    isInCart(item) {
      return (
        this.cart &&
        this.cart.items &&
        this.cart.items.find((i) => i.product_id === item.id)
      );
    },
    updateSelectedVariant(event) {
      const variantId = event.target.value;
      this.current_variant = this.item.variants.find(
        (variant) => variant.id == variantId
      );
    },
  },
  computed: {
    variants() {
      return item.variants;
    },
    current_featured_image() {
      let image = this.item.images[0].src || this.item.images[0];
      if (this.current_variant && this.current_variant.featured_image) {
        image = this.current_variant.featured_image.src;
      }

      return image;
    },
  },
  mounted() {
    if (this.item && this.item.variants && this.item.variants.length > 0) {
      this.current_variant = this.item.variants[0];
    }
  },
};

// Put your application javascript here
const SingleUpsellNew = {
  template: /*html*/ `  
  <div class="flex flex-col justify-center items-center bg-[#f2f1f58f] p-2 px-2 rounded-lg col-span-1 "  v-if="item && !isInCart(item)">
  <div class="flex gap-1 w-full">
    <div class="w-16 h-16"> 
    <img  :src="current_featured_image" width="1500" height="1500" alt="">
    </div>
    <div class="ml-2">
      <p class=" text-left text-black font-semibold text-[14px]"
      :href="item.url" 
      >{{item.title}}</p> 

      <span class="text-prolon text-xs font-bold  text-left mb-2 block " >
      {{money(current_variant.price*100)}}
      </span> 
    </div>

  <div>
  </div>
  </div>
   
  <div v-if="item.variants.length>1" class="block bg-white w-full mt-2">
                <select @change="updateSelectedVariant" class="upsell-select-updated text-black pr-[40px] border-0 border-b-1 border-black focus:outline-none focus:border-black mb-2 !text-[12px] lg:text-[14px] font-semibold px-2 w-full rounded-md"  
                :value="current_variant.id"              >
                  <option v-for="variant in item.variants" :key="variant.id" :value="variant.id">
                    {{ variant.title }}
                  </option>
                </select>
              
  </div>
  <span v-else class="text-black text-[12px] py-2 bg-white w-full font-semibold ">
  <span >{{item.variants[0].title.replace('Default Title','Default Title') }}</span>
  </span>
  <div class="w-full mt-2">
  
  <button class="flex flex-col justify-center h-10 px-8 text-white bg-prolon rounded-md !mx-auto w-full text-center" 
   @click="UpsellAddToCart(item)" 
  >  
  <div class="flex items-center justify-center cursor-pointer text-center mx-auto">
  <div class="spinner-loader" v-if="item.loading"> </div>
  <span v-else class="text-xs font-bold">+ADD</span> 

 

  </div>
  </button>
  </div>
  </div>
 
  `,
  props: ["item", "cart"],

  data() {
    return {
      current_variant: false,
    };
  },
  methods: {
    UpsellAddToCart(item) {
      item.loading = true;
      store.addToCartWithProperties({
        id: this.current_variant.id,
        quantity: 1,
        properties: { upsell: true },
        cb: (response) => {
          item.loading = false;
        },
      });
    },
    moneyDown(value) {
      if (!value) return 0;
      return "€" + Math.floor(value / 100).toFixed(2);
    },
    money(value) {
      if (!value) return 0;
      return "€" + (value / 100).toFixed(2);
    },
    isInCart(item) {
      return (
        this.cart &&
        this.cart.items &&
        this.cart.items.find((i) => i.product_id === item.id)
      );
    },
    updateSelectedVariant(event) {
      const variantId = event.target.value;
      this.current_variant = this.item.variants.find(
        (variant) => variant.id == variantId
      );
    },
  },
  computed: {
    variants() {
      return item.variants;
    },
    current_featured_image() {
      let image = this.item.images[0].src || this.item.images[0];
      if (this.current_variant && this.current_variant.featured_image) {
        image = this.current_variant.featured_image.src;
      }

      return image;
    },
  },
  mounted() {
    if (this.item && this.item.variants && this.item.variants.length > 0) {
      this.current_variant = this.item.variants[0];
    }
  },
};

// Put your application javascript here
function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

let clear = getParam("clear");
let discount = getParam("discount");
if (clear == "1") {
  Cookies.set("provider_code", null, { expires: 700 });
  localStorage.setItem("provider_code", null);
  Cookies.set("discount_code", null);
}
if (discount && discount != "") {
  localStorage.setItem("provider_code", null);
  Cookies.set("provider_code", null, { expires: 700 });
  Cookies.set("discount_code", discount);
  //  localStorage.setItem("discount_code", discount);
}

const local_discount_code = Cookies.get("discount_code");
const isLocal = localStorage.getItem("doLocal");
const allowedGifts = [
  {
    enabled: true,
    handle: "free-the-longevity-diet-book",
    description: "Auto Add Free for orders with prolon",
    variant_id: 42732662259870,
    quantity_to_add: 1,
    match_quantity: false,
    conditions: {
      sku_single_item: {
        operator: ">",
        value: 50,
      },
      skus_in: [
        "PR001",
        "PR002",
        "PR039",
        "PR001-RKBUNDLE",
        "PR002-RKBUNDLE",
        "PR039-RKBUNDLE",
        "PR039-3Boxbundle",
        "PR001-2BOX",
        "PR002-2BOX",
        "PR0039-2BOX",
        "PR001-3BOX",
        "PR002-3BOX",
        "PR0039-3BOX",
        "4boxbulk",
        "PR039-4Boxbundle",
        "3boxbulk",
        "HOLIDAY-BUNDLE",
        "longevity-bundle",
        "if-bundle",
      ],
      product_type_single_item: {
        operator: "!=",
        value: "Upsell",
      },
    },
  },
  {
    enabled: false,
    handle: "free-fasting-shake",
    description: "Auto Add Free fasting shake for orders with prolon",
    variant_id: 43022229602462,
    quantity_to_add: 1,
    match_quantity: false,
    conditions: {
      sku_single_item: {
        operator: ">",
        value: 50,
      },
      skus_in: [
        "PR001",
        "PR002",
        "PR039",
        "PR001-RKBUNDLE",
        "PR002-RKBUNDLE",
        "PR039-RKBUNDLE",
        "PR039-3Boxbundle",
        "PR001-2BOX",
        "PR002-2BOX",
        "PR0039-2BOX",
        "PR001-3BOX",
        "PR002-3BOX",
        "PR0039-3BOX",
        "4boxbulk",
        "PR039-4Boxbundle",
        "3boxbulk",
        "longevity-bundle",
        "if-bundle",
      ],
      // sku_single_item: {
      //   operator: ">",
      //   value: 10,
      // },
      // skus_in: ["HOLIDAY-BUNDLE"],
      // variant_in_cart: [
      //   41640431255710, 41640431124638, 41640431288478, 41640431157406,
      //   41640431321246, 41640431190174,
      // ],
      cart_items: {
        operator: ">=",
        value: 1,
      },
    },
  },
];

const store = Vue.reactive({
  state: {
    cartState: [],
    loadingCart: true,
    updatingCart: false,
    shopify_cart: null,
    recommendedCollection: [],
    allowedGifts: allowedGifts.filter((gift) => gift.enabled),
    upsell_in_cart: false,
  },

  getCart() {
    // this.state.loadingCart = true;
    fetch("/cart.js")
      .then(async (response) => {
        let data = await response.json();
        this.state.loadingCart = false;
        this.state.cartState.unshift(data);
        this.state.updatingCart = false;
        this.state.cartState.length = 1;
        this.checkCart();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async getShopifyCart() {
    return new Promise((resolve) => {
      fetch("/cart?view=slidecart")
        .then(async (response) => {
          let data = await response.json();
          resolve(data);
        })
        .catch((error) => {
          resolve(null);
          console.log(error);
        });
    });
  },
  setCartLoading() {
    this.state.updatingCart = true;
  },
  getRecommendedCollection() {
    fetch("/collections/prolonlife-cart-upsell/products.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products) {
          this.state.recommendedCollection = data.products;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  addToCart(id, quantity, selling_plan, cb) {
    store.setCartLoading();
    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, quantity, selling_plan }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.getCart();
        if (cb) cb(data);
        else toggleCart.showCart();
      })
      .catch((error) => {
        console.log(error);
      });
  },

  addToCartWithProperties({ id, quantity, selling_plan, cb, properties }) {
    store.setCartLoading();

    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id, quantity, selling_plan, properties }],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.getCart();
        if (cb) cb(data);
        else toggleCart.showCart();
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async bulkAddToCart(items, cb) {
    store.setCartLoading();
    await fetch("/cart/clear.js", { method: "POST" });
    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.getCart();
        if (cb) cb(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async bulkAddToCartClear(items, cb) {
    store.setCartLoading();

    // Clearing the cart
    try {
      const clearResponse = await fetch("/cart/clear.js", { method: "POST" });
      if (!clearResponse.ok) {
        throw new Error("Error clearing cart");
      }

      // Adding items to cart
      const addResponse = await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!addResponse.ok) {
        throw new Error("Error adding items to cart");
      }

      const data = await addResponse.json();
      store.getCart();
      if (cb) cb(data);
    } catch (error) {
      console.log(error);

      // Error handling logic
      if (error instanceof Error) {
        // Handle Fetch API errors
        alert(error.message);
      } else {
        // Handle other types of errors (e.g., network issues)
        alert("An unexpected error occurred");
      }

      if (cb) cb(error);
    }
  },

  async bulktUpdateCart(items, cb) {
    store.setCartLoading();
    fetch("/cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updates: items }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.getCart();
        if (cb) cb(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async checkRecommendedUpsells(cart) {
    if (cart) {
      totalRecommendationProductsinCart = 0;
      cart.items.forEach((item) => {
        if (
          item &&
          this.state.recommendedCollection &&
          this.state.recommendedCollection.length > 0
        ) {
          this.state.recommendedCollection.forEach((product) => {
            if (item.product_id == product.id) {
              totalRecommendationProductsinCart++;
            }
          });
        }
      });

      if (
        totalRecommendationProductsinCart > 0 &&
        totalRecommendationProductsinCart == cart.items.length
      ) {
        this.clearCart();
      }
    }
  },
  async processAllowedGifts(cart) {
    let _shopifyCart = await this.getShopifyCart();
    this.state.shopify_cart = _shopifyCart;
    // console.log(_shopifyCart);

    if (cart && cart.items && cart.items.length > 0) {
      let giftsToUpdate = {};

      this.state.allowedGifts.forEach((gift) => {
        let giftInCart = false;
        let giftVariantInCart = false;
        let giftQuantityInCart = 0;
        let giftConditionsMet = true;
        let skus_in = gift.conditions.skus_in;
        let InvalidProductType = false;
        let ConditionalProductQuantity = 0;

        if (gift.conditions.product_type_single_item) {
          if (gift.conditions.product_type_single_item.operator == "!=") {
            InvalidProductType = gift.conditions.product_type_single_item.value;
          }
        }

        cart.items.forEach((item) => {
          let itemCounted = false;
          if (item.variant_id == gift.variant_id) {
            giftVariantInCart = true;
            giftInCart = true;
            giftQuantityInCart = item.quantity;
          }
          if (skus_in && skus_in.length > 0) {
            skus_in.forEach((sku) => {
              if (item.sku == sku) {
                ConditionalProductQuantity += item.quantity;
                itemCounted = true;
              }
            });
          }
          if (
            !itemCounted &&
            gift.conditions.variant_in_cart &&
            gift.conditions.variant_in_cart.length > 0
          ) {
            gift.conditions.variant_in_cart.forEach((variant) => {
              if (item.variant_id == variant) {
                ConditionalProductQuantity += item.quantity;
              }
            });
          }
        });

        if (gift.conditions.cart_total) {
          if (gift.conditions.cart_total.operator == ">=") {
            if (cart.total_price < gift.conditions.cart_total.value) {
              giftConditionsMet = false;
            }
          }
        }

        if (gift.conditions.cart_items) {
          if (gift.conditions.cart_items.operator == ">=") {
            if (cart.item_count < gift.conditions.cart_items.value) {
              giftConditionsMet = false;
            }
          }
        }

        if (gift.conditions.skus_in && gift.conditions.skus_in.length > 0) {
          let skuInCart = false;
          gift.conditions.skus_in.forEach((sku) => {
            let cartItems = cart.items;

            cartItems.forEach((item) => {
              let productType = item.product_type;
              if (
                InvalidProductType &&
                productType.toUpperCase() == InvalidProductType.toUpperCase()
              ) {
              } else if (item.sku.toUpperCase() == sku.toUpperCase()) {
                let price = item.price / 100;
                let pricetoCompare = gift.conditions.sku_single_item;
                if (pricetoCompare.operator == ">") {
                  if (price > pricetoCompare.value) {
                    skuInCart = true;
                  }
                }

                // skuInCart = true;
              }
            });
          });

          if (!skuInCart) {
            giftConditionsMet = false;
          }
        } else if (
          gift.conditions.variant_in_cart &&
          gift.conditions.variant_in_cart.length > 0
        ) {
          giftConditionsMet = false;
          gift.conditions.variant_in_cart.forEach((variant) => {
            cart.items.forEach((item) => {
              if (item.variant_id == variant) {
                giftConditionsMet = true;
              }
            });
          });

          if (!giftConditionsMet) {
            giftConditionsMet = false;
          }
        }

        if (gift.match_quantity && ConditionalProductQuantity > 0) {
          gift.quantity_to_add = ConditionalProductQuantity;
        }

        // // hardcode checked for no free shake A/B Test
        // if (window.no_free_shake == true && gift.variant_id == 43022229602462) {
        //   giftConditionsMet = false;
        // }

        if (giftConditionsMet && !giftInCart && !giftVariantInCart) {
          giftsToUpdate[gift.variant_id] = gift.quantity_to_add;
        } else if (
          giftConditionsMet &&
          giftVariantInCart &&
          giftQuantityInCart != gift.quantity_to_add
        ) {
          giftsToUpdate[gift.variant_id] = gift.quantity_to_add;
        } else if (!giftConditionsMet && giftInCart) {
          giftsToUpdate[gift.variant_id] = 0;
        } else if (!giftConditionsMet && giftVariantInCart) {
          giftsToUpdate[gift.variant_id] = 0;
        }
      });

      if (giftsToUpdate && Object.keys(giftsToUpdate).length > 0) {
        let itemsToUpdate = {};
        Object.keys(giftsToUpdate).forEach((key) => {
          let isRemoved = Cookies.get(`removed_${key}`);
          if (isRemoved == "true") {
          } else {
            itemsToUpdate[key] = giftsToUpdate[key];
          }
        });
        let itemsLength = Object.keys(itemsToUpdate).length;
        if (itemsLength > 0) {
          this.bulktUpdateCart(itemsToUpdate);
        }
      }
    }
  },
  async ProcessCartGifts() {
    // Add 0r Remove Cart Gifts based on allowedGifts
    if (this.state.cartState && this.state.cartState.length > 0) {
      let cart = this.state.cartState[0];
      await this.checkRecommendedUpsells(cart);
      await this.processAllowedGifts(cart);
    }
  },
  checkCart() {
    this.ProcessCartGifts();
  },
  clearCart() {
    console.log(`Clearing Cart`);
    fetch("/cart/clear.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.getCart();
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

const slideCartState = Vue.reactive({
  hidden: true,
});

const toggleCart = {
  openCart() {
    slideCartState.hidden = !slideCartState.hidden;
    menuState.hidden = true;

    if (slideCartState.hidden) {
      document.body.classList.remove("slide-cart-open");
    } else {
      document.body.classList.add("slide-cart-open");
    }
  },
  showCart() {
    //SuperCart.ShowCartfn();
    slideCartState.hidden = false;
    menuState.hidden = true;
    document.body.classList.add("slide-cart-open");
    // store.getCart();
  },
};

const menuState = Vue.reactive({
  hidden: true,
});

const toggleMenu = {
  openMenu() {
    menuState.hidden = !menuState.hidden;
    slideCartState.hidden = true;
  },
};

const toggleClose = {
  closeAll() {
    slideCartState.hidden = true;
    menuState.hidden = true;
    document.body.classList.remove("slide-cart-open");
  },
};

const freeShippingSettings = {
  freeShippingThreshold: 9900,
  freeShippingMessage: "SPEDIZIONE GRATUITA DA _value_",
  remainingMessage: "MANCANO _value_",
  successMessage: "🎉 Wow! Hai raggiunto la spezione gratuita!",
};

//   window.API_URL = "http://localhost:1337/";
window.API_URL = "https://prolon-pro.herokuapp.com/";
window.local_host = localStorage.getItem("doLocal");
if (local_host == 1) {
  window.API_URL = "http://localhost:1337/";
}

if (document.querySelector("#cart-with-header")) {
  const headerCart = Vue.createApp({
    delimiters: ["${", "}"],
    data() {
      let providerCode = localStorage.getItem("provider_code");
      let discountCode = getParam("discount") || local_discount_code || "";
      if ((discountCode && discountCode == "null") || discountCode == null) {
        discountCode = "";
      }
      if (providerCode && providerCode == "null") {
        providerCode = "";
      }

      return {
        cartData: store.state.cartState,
        scrollY: 0,
        custom_loading: false,
        hasValidStripeProducts: true,
        isOpeningMenu: false,
        checkoutLoading: false,
        discountCode: discountCode,
        provider_code: providerCode,
        addingDiscount: false,
        ShowDiscountFailedMessage: false,
      };
    },
    methods: {
      bundle_items(item) {
        let finalHtml = "";
        try {
          let shopify_cartItems = store.state.shopify_cart;
          let shopifyItem = shopify_cartItems.find(
            (i) => i.handle === item.handle
          );
          let bundleItems = shopifyItem.bundle_items;
          if (bundleItems && bundleItems.length > 0) {
            let bundleQuantityString =
              shopifyItem?.custom_metafields?.prolon_bundle_item_quantity;
            let bundleQuantity;
            if (bundleQuantityString) {
              bundleQuantity = bundleQuantityString.split(",");
            }
            //  for loop for bundle items and bundle quantity
            for (let i = 0; i < bundleItems.length; i++) {
              let currentQuantity = bundleQuantity[i];
              let currentBundleItem = bundleItems[i];
              let bundleTitle = currentBundleItem.title;
              let bundleName = currentBundleItem?.name?.replace(
                " - " + bundleTitle,
                ""
              );
              let bundleImage = currentBundleItem.featured_image?.src;
              let bundleImageHtml = `<img src="${bundleImage}" class="w-8 h-8 object-cover" alt="">`;
              if (!bundleImage) {
                bundleImageHtml = `<div class="w-8 h-8 object-cover" >${window.placeholder_image_svg}</div>`;
              }

              finalHtml += `<div class="flex flex-row justify-between items-center py-2 pl-2 md:pl-5">
          <div class="flex flex-row justify-start items-center">
          <div class="w-8 h-8 border border-solid border-1 rounded">
              ${bundleImageHtml}
          </div>   
          <div class="flex flex-col justify-center items-start">
          <p class="text-[12px] pl-4 font-medium ">
          <span class="block font-semibold">
          ${currentQuantity} x ${bundleName}
          </span>
          <small>${bundleTitle}</small>
          </p>
          
          </div>
          </div></div>
          `;
            }
          }
        } catch (ex) {}
        return finalHtml;
      },
      bundle_component_length(item) {
        let shopify_cartItems = store.state.shopify_cart;
        if (!shopify_cartItems) {
          return "";
        }
        let shopifyItem = shopify_cartItems.find(
          (i) => i.handle === item.handle
        );
        let bundleItems = shopifyItem.bundle_components;
        if (bundleItems && bundleItems.length > 0) {
          return bundleItems.length;
        } else {
          return 0;
        }
      },
      bundle_components(item) {
        let finalHtml = "";
        try {
          let shopify_cartItems = store.state.shopify_cart;
          let shopifyItem = shopify_cartItems.find(
            (i) => i.handle === item.handle
          );
          let bundleItems = shopifyItem.bundle_components;
          if (bundleItems && bundleItems.length > 0) {
            //  for loop for bundle items and bundle quantity
            for (let component of bundleItems) {
              let currentQuantity = component.quantity;
              let currentBundleItem = component;
              let bundleTitle = currentBundleItem.variant_title.replace(
                "Default Title",
                ""
              );
              let bundleName = currentBundleItem.product_title;
              let bundleImage = currentBundleItem.featured_image;
              let bundleImageHtml = `<img src="${bundleImage}" class="w-8 h-8 object-cover" alt="">`;
              if (!bundleImage) {
                bundleImageHtml = `<div class="w-8 h-8 object-cover" >${window.placeholder_image_svg}</div>`;
              }

              finalHtml += `<div class="flex flex-row justify-between items-center py-2 pl-2 md:pl-5">
          <div class="flex flex-row justify-start items-center">
          <div class="w-8 h-8 border border-solid border-1 rounded">
              ${bundleImageHtml}
          </div>   
          <div class="flex flex-col justify-center items-start">
          <p class="text-[12px] pl-4 font-medium ">
          <span class="block font-semibold">
          ${currentQuantity} x ${bundleName}
          </span>
          <small>${bundleTitle}</small>
          </p>
          
          </div>
          </div></div>
          `;
            }
          }
        } catch (ex) {}
        return finalHtml;
      },
      clearProviderCode() {
        localStorage.setItem("provider_code", null);
        Cookies.set("provider_code", null, { expires: 700 });
        this.provider_code = null;
        this.discount_code = null;
      },
      toggleSlideCart() {
        toggleCart.openCart();
      },
      getUpsellTagLines(handle) {
        let tagsLines = {
          "fasting-shake-upsell": [
            "Fasting Shake: Fuel Your Body, Not Your Hunger",
            "Fasting Shake: Elevate Your Nutrition Game",
            "Fasting Shake: Nourish Without Guilt",
            "Fasting Shake: Aging Slower, Feeling Better",
          ],
          "prolon-20-off": ["Continue your longevity journey"],
          "fast-bar-off": [
            "Fasting Bars: The Delicious Way to Extend Your Fasting Window",
          ],
        };

        return tagsLines[handle];
      },
      toggleMenu() {
        this.isOpeningMenu = menuState.hidden;

        setTimeout(() => {
          toggleMenu.openMenu();
        }, 100);
      },
      closeAllDrawers() {
        this.isOpeningMenu = false;
        toggleClose.closeAll();
      },
      removeItem(item, index) {
        item.removing = true;
        console.log({ index });
        if (item.price === 0) {
          try {
            Cookies.set(`removed_${item.id}`, "true", { expires: 1 });
          } catch (ex) {
            console.error("Error setting cookie:", ex);
          }
        }
        fetch("/cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ line: index + 1, quantity: 0 }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            store.getCart();
          })
          .catch((error) => {
            console.log(error);
            item.removing = false;
          });
      },

      decrement(item, index) {
        let updateQuantity = item.quantity - 1;
        item.quantity = updateQuantity;
        const data = {
          id: item.key,
          quantity: updateQuantity,
        };

        item.loading_minus = true;
        store.setCartLoading();
        fetch("/cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            store.getCart();
          })
          .catch((error) => {
            console.log(error);
            item.loading_minus = false;
          });
      },
      increment(item, index) {
        let updateQuantity = item.quantity + 1;
        item.quantity = updateQuantity;
        const data = {
          id: item.key,
          quantity: updateQuantity,
        };

        item.loading_plus = true;
        store.setCartLoading();
        fetch("/cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            store.getCart();
          })
          .catch((error) => {
            console.log(error);
            item.loading_plus = false;
          });
      },

      money(value) {
        if (!value) return 0;
        return "€" + (value / 100).toFixed(2);
      },
      isInCart(item) {
        return (
          this.cart &&
          this.cart.items &&
          this.cart.items.find((i) => i.product_id === item.id)
        );
      },
      isVariantInCart(variant_id) {
        return (
          this.cart &&
          this.cart.items &&
          this.cart.items.find((i) => i.variant_id === variant_id)
        );
      },
      isAllUpsellinCart() {
        if (this.cartData.length > 0) {
          let cartItems = this.cartData[0].items;
          let upsellItems = store.state.recommendedCollection;
          let upsellInCart = 0;
          for (let i = 0; i < cartItems.length; i++) {
            for (let j = 0; j < upsellItems.length; j++) {
              if (cartItems[i].product_id == upsellItems[j].id) {
                upsellInCart++;
              }
            }
          }
          if (upsellInCart == upsellItems.length) {
            return true;
          } else {
            return false;
          }
        }
      },

      addToCart(item) {
        item.loading = true;
        store.addToCart(item.variants[0].id, 1);
        setTimeout(() => {
          item.loading = false;
        }, 2000);
      },
      addToCartWithVariantId(variant_id) {
        this.custom_loading = true;
        store.addToCart(variant_id, 1, null, (response) => {
          // this.custom_loading = false;
          store.getCart();
        });
        setTimeout(() => {
          this.custom_loading = false;
        }, 2000);
      },
      UpsellAddToCart(item) {
        item.loading = true;
        store.addToCartWithProperties({
          id: item.variants[0].id,
          quantity: 1,
          properties: { upsell: true },
          cb: (response) => {
            item.loading = false;
          },
        });
      },
      clearCart() {
        fetch("/cart/clear.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            store.getCart();
          })
          .catch((error) => {
            console.log(error);
          });
      },

      selling_planName(item) {
        if (item.selling_plan_allocation) {
          return item.selling_plan_allocation.selling_plan.name;
        } else {
          return null;
        }
      },
      scrollUpdate(e) {
        this.scrollY = window.scrollY;
      },
      async gotoCheckout(discountCode) {
        try {
          let hcp_status = await this.checkHCPCode(discountCode);
          if (hcp_status && hcp_status == "ok") {
            // redirecting to stripe checkout
          } else {
            // redirecting to shopify checkout
            if (discountCode && discountCode != "") {
              this.applyDiscount();
            } else {
              window.location.href = "/checkout";
            }
          }
        } catch (e) {
          window.location.href = "/checkout";
        }
      },
      openCheckout() {
        let discountCode = this.provider_code;
        if (
          !discountCode ||
          discountCode == "" ||
          discountCode == null ||
          discountCode == "null"
        ) {
          discountCode = this.discountCode;
        }
        this.gotoCheckout(discountCode);
        this.checkoutLoading = true;
        this.$refs.checkoutBtnText.innerHTML = "Processing ...";
        setTimeout(() => {
          //  this.checkoutLoading=false;
          this.$refs.checkoutBtnText.innerHTML = "Redirecting to Checkout ...";
        }, 1500);
        setTimeout(() => {
          //  $('body').addClass('opacity-0 transition duration-500');
        }, 1500);
        setTimeout(() => {
          this.checkoutLoading = false;
        }, 8000);
      },
      async applyDiscount() {
        let discountCode = this.discountCode;
        if (discountCode) {
          this.addingDiscount = true;

          try {
            const response = await fetch(
              "https://prolon-pro.herokuapp.com/stores/lookup",
              {
                method: "GET",
                headers: {
                  accesstoken: "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",
                  shopname: "prolon-uk1",
                  discount: discountCode,
                },
              }
            );

            if (!response.ok) {
              throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);

            if (data && data.id) {
              location.href = "/checkout?discount=" + discountCode;
            } else {
              this.ShowDiscountFailedMessage = true;
              this.addingDiscount = false;
              setTimeout(() => {
                this.ShowDiscountFailedMessage = false;
              }, 3000);
            }
          } catch (error) {
            console.log(error);
            this.ShowDiscountFailedMessage = true;
            this.addingDiscount = false;
            setTimeout(() => {
              this.ShowDiscountFailedMessage = false;
            }, 3000);
          }
        } else {
          alert("Please enter a discount code");
          this.addingDiscount = false;
        }
      },

      async checkHCPCode() {
        let code;
        let patientDiscountcode = this.discountCode;
        if (
          !code ||
          code == "" ||
          code == null ||
          code == undefined ||
          code == "null"
        ) {
          code = this.provider_code;
        }
        if (
          !code ||
          code == "" ||
          code == null ||
          code == "null" ||
          code == undefined ||
          code == "undefined"
        ) {
          code = this.discountCode;
        }
        if (
          !code ||
          code == "" ||
          code == null ||
          code == "null" ||
          code == undefined ||
          code == "undefined"
        ) {
          return null;
        }

        if (code && code != "" && this.hasValidStripeProducts) {
          try {
            let codeStatusData = await fetch(
              `${API_URL}stores/hcp-lookup?hcp_code=${code}`
            );
            let codeStatus = await codeStatusData.json();

            if (
              codeStatus &&
              codeStatus.status &&
              (codeStatus.stripe_connect ||
                codeStatus?.customer?.provider_type == "no_commission")
            ) {
              let cart = this.cart;
              let discountcode = code;
              let shop = Shopify.shop || "prolon-fmd-2020.myshopify.com";
              // if(patientDiscountcode && patientDiscountcode!='' && patientDiscountcode!=code){
              //   discountcode+=`,${patientDiscountcode}`
              // }
              let accountId = codeStatus?.stripe_connect?.account_id;

              if (codeStatus?.customer?.provider_type == "no_commission") {
                accountId = "no_commission";
              }

              let data = {
                stripe_connect_account_id: accountId,
                hcp_code: discountcode,
                ...cart,
              };
              let _url = `${API_URL}stores/stripe/create-checkout-session?shop=${shop}`;

              let only_klarna = getParam("only_klarna");
              if (only_klarna == "1") {
                _url += "&only_allow_klarna=1";
              } else {
                _url += "&with_klarna=1";
              }

              let response;
              try {
                const fetchResponse = await fetch(_url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json; charset=utf-8",
                  },
                  body: JSON.stringify(data),
                });

                if (!fetchResponse.ok) {
                  throw new Error(
                    `HTTP error! Status: ${fetchResponse.status}`
                  );
                }

                response = await fetchResponse.json();
              } catch (error) {
                console.error("Fetch error:", error);
              }

              if (response) {
                if (response.url) {
                  fetch("/cart/clear").then((response) => {
                    console.log("cart cleared");
                  });

                  window.location = response.url;
                  return "ok";
                } else {
                  console.log("stripe-connect-error", response);
                  this.checkoutLoading = false;
                  return null;
                }
              } else {
                this.checkoutLoading = false;
                return null;
              }
            } else {
              this.checkoutLoading = false;
              return null;
            }
          } catch (e) {
            return null;
          }
        }
      },
    },
    computed: {
      recommendedUpsells() {
        let cart = store.state.shopify_cart;
        let upsells = [];
        if (!cart) {
          return [];
        }
        let cartItems = cart;
        console.log(`shopify_cart`, cartItems);
        cartItems.forEach((item) => {
          if (item && item.upsell_products) {
            item.upsell_products.forEach((upsell) => {
              upsell.variants = upsell.variants.map((e) => {
                e.price = e.price / 100;

                return e;
              });

              let isAlreadyInUpsells = upsells.find((e) => e.id == upsell.id);

              if (!isAlreadyInUpsells) {
                upsells.push(upsell);
              }
            });
          }
        });

        console.log("upsells", upsells);
        return upsells;
      },
      loadingCart() {
        return store.state.loadingCart;
      },
      cartTotal() {
        if (this.cartData.length > 0) {
          return this.cartData[0].total_price;
        }
      },
      cartCount() {
        if (this.cartData.length > 0) {
          return this.cartData[0].item_count;
        }
      },
      isFreeShipping() {
        if (this.cartData.length > 0) {
          return (
            this.cartData[0].total_price >=
            freeShippingSettings.freeShippingThreshold
          );
        }
      },
      remaingShippingPercetange() {
        if (this.cartData.length > 0) {
          let percentage =
            (this.cartData[0].total_price /
              freeShippingSettings.freeShippingThreshold) *
            100;
          if (percentage > 100) {
            percentage = 100;
          }
          return percentage;
        }
      },

      awayFromFreeShipping() {
        if (this.cartData.length > 0) {
          return (
            freeShippingSettings.freeShippingThreshold -
            this.cartData[0].total_price
          );
        }
      },
      freeShippingMessage() {
        if (this.cartData.length > 0) {
          return freeShippingSettings.freeShippingMessage.replace(
            "_value_",
            this.money(freeShippingSettings.freeShippingThreshold)
          );
        }
      },

      gotFreeShippingMessage() {
        if (this.cartData.length > 0) {
          if (
            this.cartData[0].total_price >=
            freeShippingSettings.freeShippingThreshold
          ) {
            return freeShippingSettings.successMessage;
          } else {
            return "";
          }
        }
      },
      awayFreeShippingMessage() {
        if (this.cartData.length > 0) {
          if (
            this.cartData[0].total_price <
            freeShippingSettings.freeShippingThreshold
          ) {
            return freeShippingSettings.remainingMessage.replace(
              "_value_",
              this.money(this.awayFromFreeShipping)
            );
          } else {
            return "";
          }
        }
      },

      isvisibleCart() {
        return !slideCartState.hidden;
      },
      menuDrawer() {
        return menuState.hidden;
      },
      cart() {
        return this.cartData[0];
      },
      reverseCart() {
        let items = this.cartData[0]?.items;
        if (items && items.length > 0) {
          items = items.map((e, i) => {
            e.line = i;

            return e;
          });
        }

        return items?.reverse();
      },
      recommendedCollectionNew() {
        if (this.recommendedUpsells && this.recommendedUpsells.length > 0) {
          return this.recommendedUpsells;
        } else {
          return store.state.recommendedCollection;
        }
      },
      recommendedCollection() {
        return store.state.recommendedCollection;
      },

      disableCart() {
        return store.state.updatingCart;
      },
    },
    mounted() {
      let scrollEvent = this.scrollUpdate;
      document.addEventListener("scroll", function (e) {
        scrollEvent(e);
      });
    },
    components: {
      "single-upsell": SingleUpsell,
      "single-upsell-new": SingleUpsellNew,
      carousel: VueCarousel.Carousel,
      slide: VueCarousel.Slide,
      pagination: VueCarousel.Pagination,
      navigation: VueCarousel.Navigation,
    },
    created() {
      store.getCart();
      store.getRecommendedCollection();

      let view = getParam("view");
      if (view && view == "redirect_to_stripe_checkout") {
        // let discountCode = getParam("hcp_code");
        let provider_code = getParam("hcp_code");
        this.provider_code = provider_code;
        this.gotoCheckout();
      }

      window.emitter.on("new_provider_code", (e) => {
        if (e.code && e.code != "" && e.code != this.provider_code) {
          this.provider_code = e.code;
        }
      });
    },
    watch: {},
  }).mount("#cart-with-header");
}

$(document).on("ajaxProduct:added", function () {
  toggleCart.showCart();
});

$(document).on("click", ".js-drawer-open-cart", function (e) {
  if (window.CART_TYPE == "DRAWER") {
    e.preventDefault();
    toggleCart.showCart();
  }
});
