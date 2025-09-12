const VideoIframe = {
  template: /*html*/ `
  <div class="video-wrapper" >
    <div class="video-container">
    <video
    class=" rounded-lg cursor-pointer"
    autoplay
    loop
    :muted="isVideoMuted"
    @click="togglePlay()"
    style="
      width: 100%;
      height: 100%;
      object-fit: cover;
    "
    ref="video"
  >
    <source :src="src" type="video/mp4">
  </video> 
  <div class="video-overlay z-10 relative">
    
  <button class="video-mute-button pl-2 pt-2"  @click="isVideoMuted = !isVideoMuted" >  
  
  
  <svg 
  v-if="!isVideoMuted"
  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="bg-prolon_secondary h-8 p-1 rounded-3xl text-white w-8"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"></path></svg>
  
  <svg class="bg-prolon_secondary h-8 p-1 rounded-3xl text-white w-8"
  v-if="isVideoMuted"
  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
   

  </button>








  </div>
  
  





  
  </div>

  
 
  `,
  props: ["src"],
  data() {
    return {
      isVideoMuted: true,
      player: null,
    };
  },
  methods: {
    togglePlay() {
      if (this.$refs.video.paused) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }
    },
  },
  computed: {},
  mounted() {},
};

const VimeoIframe = {
  template: /*html*/ `
  <div class="video-wrapper" >
    <div class="video-container">
 
    <iframe @click="togglePlay()" ref="vimeo_iframe" class="m:min-h-500" :src="src" frameborder="0" allowfullscreen="" >
    </iframe>

  <div class="video-overlay z-10 relative">
    
  <button class="video-mute-button pl-2 pt-2"  @click="togglePlay () " >  
  
   
  <svg 
  v-if="!isVideoMuted"
  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="bg-prolon_secondary h-8 p-1 rounded-3xl text-white w-8"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"></path></svg>
  
  <svg class="bg-prolon_secondary h-8 p-1 rounded-3xl text-white w-8"
  v-if="isVideoMuted"
  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
   

  </button>








  </div>
  
  





  
  </div>

  
 
  `,
  props: ["src"],
  data() {
    return {
      isVideoMuted: true,
      player: null,
    };
  },
  methods: {
    togglePlay() {
      if (this.player) {
        this.player.getPaused().then(function (paused) {
          if (paused) {
            this.player.play();
          } else {
            this.player.pause();
          }
        });
      }
    },
  },
  computed: {},
  mounted() {
    var iframe = this.$refs.vimeo_iframe;
    if (window.Vimeo) {
      this.player = new window.Vimeo.Player(iframe);
    }
  },
};

const AddToCartDirectly = {
  template: /*html*/ `
   
      <button type="button" class="mx-auto bg-prolon disabled:bg-orange-200 h-[55px] mx-auto text-[20px] w-[300px] add-to-cart-directly rounded-md" @click="directToCheckout" :disabled="addingtoCart"
                    
                    >
                     <svg v-if="addingtoCart" class="inline w-8 h-8 ml-2 text-white animate-spin " viewBox="0 0 100 101" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"></path>
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"></path>
    </svg>
                    <span v-else
                            class="inline-block w-full px-6 py-3 font-medium text-center rounded text-contrast"><span
                                class="flex items-center justify-center gap-2 mx-auto text-white max-w-prose inherit text-copy"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" width="18" class="w-[25px] h-[25px]" >
                                    <path fill-rule="evenodd"
                                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="mr-2 font-bold uppercase ">Order Now </span>
                                </span>
                  </span>
        </button>
  `,
  props: ["variants", "discountcode"],
  data() {
    return {
      addingtoCart: false,
    };
  },
  methods: {
    directToCheckout() {



      
      let items = this.variants.map((variantId) => {
        let cartitem = {
          id: variantId,
          quantity: 1,
        };
        return cartitem;
      });

      this.addingtoCart = true;
      store.bulkAddToCartClear(items, (response) => {
        if (response.status != 422) {
          window.location.href = "/checkout?discount=" + this.discountcode;
          //  toggleCart.showCart();
          setTimeout(() => {
            this.addingtoCart = false;
          }, 2000);
        } else {
          this.addingtoCart = false;
        }
      });
    },
  },
  computed: {},
  mounted() {
    console.log(this.variants, this.discountcode);
  },
};

const AddToCartDirectlySubs = {
  template: /*html*/ `
  <div class="flex flex-col mt-4 w-full">
      
      <div class="js-enabled Frequency visible mb-4">
    <div role="radiogroup"><label class="sr-only" role="none"> Subscription Plans </label>
    <label class="text-label  block text-sm font-medium text-gray-700" role="none">
    Frequency 
    </label>
  
        <div class="relative mt-3 -space-y-px bg-white rounded-md" role="none">
            <div class="relative z-10 flex items-center justify-between p-4 mb-2 border-2 rounded-md cursor-pointer md:pl-4 md:pr-6 focus:outline-none subscription-recurring "
            :class="{'border-prolon_orange': orderType == 'recurring'}"
            @click="orderType = 'recurring'"
                role="radio" data-option_value="Subscribe &amp; Save"><span
                    class="absolute prolon-right-badge bg-prolon_orange"> *MOST POPULAR</span><span
                    class="flex items-start w-full text-sm"><span
                         class="flex items-center justify-center w-8 h-8 rounded-full  border-2 border-orange-500 " 
                         :class="{'bg-prolon_secondary border-transparent': orderType == 'recurring'}"
                        aria-hidden="true"
                        
                        ><span class="rounded-full bg-white w-2.5 h-2.5"></span></span><span
                        class="ml-3 font-bold text-gray-900 text-xs md:text-sm  flex-1"><span
                            class="flex justify-between"><span>Subscribe &amp; Save </span><span
                                class="pl-1 ml-6 text-sm text-gray-500 md:ml-0 md:pl-0 md:text-right"><span
                                    class="font-bold text-gray-900 text-md">$ {{
                                      subscriptionPrice
                                    }}</span></span></span>
                        <p class="pt-2 box-price"><span><span
                                    class="text-sm font-bold text-gray-900">$ {{
                                      subscriptionPrice
                                    }}</span></span><span 
                                class="text-sm font-bold text-gray-900">/ Bundle</span></p>
                        <hr class="my-2 border-gray-300">
                        <div class="font-normal"> Deliver Every : <select
                                class="pl-2 pr-8 ml-1 !text-sm font-bold border-0 border-b-2 text-prolon_secondary border-prolon_secondary focus:outline-none">
                                <option value="611287086" selected> 1 Month</option>
                                
                            </select></div>
                        <div class="relative flex pt-2"><span class="absolute -left-5" aria-hidden="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" width="18"
                                    height="14" viewBox="0 0 18 14">
                                    <g data-name="Repeat Grid 26" transform="translate(-691 -682)">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                            transform="translate(687.59 676.41)"></path>
                                    </g>
                                </svg></span><strong>Save <span v-text="discountSubValue"></span> Per Shipment </strong></div>
                        <div class="relative flex "><span class="absolute -left-5" aria-hidden="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" width="18"
                                    height="14" viewBox="0 0 18 14">
                                    <g data-name="Repeat Grid 26" transform="translate(-691 -682)">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                            transform="translate(687.59 676.41)"></path>
                                    </g>
                                </svg></span><span class="font-normal">No Commitments, Cancel Anytime </span></div>
                    </span></span></div>
            <div class="relative flex items-center justify-between p-4 mt-5 border-2 border-gray-200 rounded-md cursor-pointer md:pl-4 md:pr-6 focus:outline-none one-time"
            :class="{'border-prolon': orderType == 'one-time'}"
            @click="orderType = 'one-time'" 
                role="radio" data-option_value="One Time Order"><span class="flex items-center text-sm"><span
                        class="flex items-center justify-center w-8 h-8 border-2 border-prolon rounded-full" 
                        :class="{'bg-prolon': orderType == 'one-time'}"
                        aria-hidden="true"><span
                            class="rounded-full bg-white w-2.5 h-2.5"></span></span><span
                        class="flex items-center justify-center hidden w-4 h-4 bg-white border rounded-full"
                        aria-hidden="true"><span class="rounded-full bg-white w-1.5 h-1.5"></span></span><span
                        class="ml-3 font-bold text-gray-900 text-xs md:text-sm">One Time<span
                            class="block text-xs font-normal">Purchase this time only</span></span></span><span
                    class="pl-1 ml-6 text-sm text-gray-500 md:ml-0 md:pl-0 md:text-right"><span
                        class="font-bold text-gray-900 text-md" >$ {{
                          oneTimePrice
                        }}</span></span></div>
        </div>
    </div>
</div>

       
      <button type="button" class="mx-auto bg-prolon disabled:bg-orange-200 h-[55px] mx-auto text-[20px] w-[300px] add-to-cart-directly rounded-md" @click="directToCheckout" :disabled="addingtoCart"
                    
                    >
                     <svg v-if="addingtoCart" class="inline w-8 h-8 ml-2 text-white animate-spin " viewBox="0 0 100 101" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"></path>
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"></path>
    </svg>
                    <span v-else
                            class="inline-block w-full px-6 py-3 font-medium text-center rounded text-contrast"><span
                                class="flex items-center justify-center gap-2 mx-auto text-white max-w-prose inherit text-copy"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" width="18" class="w-[25px] h-[25px]" >
                                    <path fill-rule="evenodd"
                                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="mr-2 font-bold uppercase ">Order Now </span>
                                </span>
                  </span>
        </button>
        </div>
  `,
  props: ["variants", "discountcode", "jsondata", "widgettype"],
  data() {
    return {
      orderType: "recurring",

      addingtoCart: false,
    };
  },
  methods: {
    directToCheckout() {
      let orderCurrent = this.jsondata[this.orderType];
      let variants = this.jsondata[this.orderType].variants;

      let items = variants.map((variant) => {
        let cartitem = {
          id: variant.variant_id,
          quantity: 1,
        };

        if (this.orderType == "recurring") {
          cartitem.selling_plan = variant.selling_plan;
        }
        return cartitem;
      });

      let discountCode = orderCurrent.discount_code;
      this.addingtoCart = true;
      store.bulkAddToCartClear(items, (response) => {
        if (response.status != 422) {
          window.location.href = "/checkout?discount=" + discountCode;
          //  toggleCart.showCart();
          setTimeout(() => {
            this.addingtoCart = false;
          }, 2000);
        } else {
          this.addingtoCart = false;
        }
      });
    },
  },
  computed: {
    subscriptionPrice() {
      return this.jsondata["recurring"].price;
    },
    oneTimePrice() {
      return this.jsondata["one-time"].price;
    },
    discountSubValue() {
      return this.jsondata["recurring"].discount_amount + "%";
    },
  },
  mounted() {
    console.log(this.variants, this.jsondata);
  },
};

const AddToCartDirectlySubsWithVariants = {
  template: /*html*/ `

  <div class="flex flex-wrap items-start justify-center max-w-sm mx-auto mt-2 lg:flex-nowrap lg:flex-row lg:gap-x-8 lg:gap-y-10 sm:max-w-none ">

  <template v-for="(item, index) in products" :key="index"> 
    <div class="text-center  sm:text-left lg:block lg:text-center  w-[125px] lg:w-[33%]">
      <div class="sm:flex-shrink-0">
        <div class="flow-root">
          <img
            class="mx-auto max-h-[155px] object-contain "
            :src="item.current_variant.product_image"
            alt=""
          />
        </div>
      </div>
      <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
        <h3 :class="(index !== (newjsondata.length - 1) || index !== 0) ? 'text-sm font-medium text-gray-900 whitespace-nowrap' : 'text-sm font-medium text-gray-900'">{{ item.product_title }}</h3>
        <small :class="(index !== (newjsondata.length - 1) || index !== 0) ? 'whitespace-nowrap' : ''">{{ item.product_subtitle }}</small>
      </div>

      <div>
      
      <template v-if="item.variants.length > 1">

        <select name="variant" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
    @change="selectVariant(item,$event.target.value)"
        >
        <option v-for="v in item.variants" :value="v.name">{{v.name}}</option>
        </select>

      </template>

      


      </div>


    </div>

    <div v-if="index !== (newjsondata.length - 1)" class="hidden justify-center lg:w-[100px] plus-icon px-4 sm:flex text-4xl text-prolon_green">+</div>

  </template>





  </div>


  <div class="flex flex-col mt-4 w-full">
      
      <div class="js-enabled Frequency visible mb-4">
    <div role="radiogroup"><label class="sr-only" role="none"> Subscription Plans </label>
    <label class="text-label  block text-sm font-medium text-gray-700" role="none">
    Frequency 
    </label>
  
        <div class="relative mt-3 -space-y-px bg-white rounded-md" role="none">
            <div class="relative z-10 flex items-center justify-between p-4 mb-2 border-2 rounded-md cursor-pointer md:pl-4 md:pr-6 focus:outline-none subscription-recurring "
            :class="{'border-prolon_orange': orderType == 'recurring'}"
            @click="orderType = 'recurring'"
                role="radio" data-option_value="Subscribe &amp; Save"><span
                    class="absolute prolon-right-badge bg-prolon"> *MOST POPULAR</span><span
                    class="flex items-start w-full text-sm"><span
                         class="flex items-center justify-center w-8 h-8 rounded-full  border-2 border-prolon " 
                         :class="{'bg-prolon ': orderType == 'recurring'}"
                        aria-hidden="true"
                        
                        ><span class="rounded-full bg-white w-2.5 h-2.5"></span></span><span
                        class="ml-3 font-bold text-gray-900 text-xs md:text-sm  flex-1"><span
                            class="flex justify-between"><span>Subscribe &amp; Save </span><span
                                class="pl-1 ml-6 text-sm text-gray-500 md:ml-0 md:pl-0 md:text-right"><span
                                    class="font-bold text-gray-900 text-md">$ {{
                                      subscriptionPrice
                                    }}</span></span></span>
                        <p class="pt-2 box-price"><span><span
                                    class="text-sm font-bold text-gray-900">$ {{
                                      subscriptionPrice
                                    }}</span></span><span 
                                class="text-sm font-bold text-gray-900">/ Bundle</span></p>
                        <hr class="my-2 border-gray-300">
                        <div class="font-normal"> Deliver Every : <select
                                class="pl-2 pr-8 ml-1 !text-sm font-bold border-0 border-b-2 text-prolon border-prolon focus:outline-none">
                                <option value="611287086" selected> 1 Month</option>
                                
                            </select></div>
                        <div class="relative flex pt-2"><span class="absolute -left-5" aria-hidden="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" width="18"
                                    height="14" viewBox="0 0 18 14">
                                    <g data-name="Repeat Grid 26" transform="translate(-691 -682)">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                            transform="translate(687.59 676.41)"></path>
                                    </g>
                                </svg></span><strong>Save <span v-text="discountSubValue"></span> Per Shipment </strong></div>
                        <div class="relative flex "><span class="absolute -left-5" aria-hidden="true"><svg
                                    xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" width="18"
                                    height="14" viewBox="0 0 18 14">
                                    <g data-name="Repeat Grid 26" transform="translate(-691 -682)">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                            transform="translate(687.59 676.41)"></path>
                                    </g>
                                </svg></span><span class="font-normal">No Commitments, Cancel Anytime </span></div>
                    </span></span></div>
            <div class="relative flex items-center justify-between p-4 mt-5 border-2 border-gray-200 rounded-md cursor-pointer md:pl-4 md:pr-6 focus:outline-none one-time"
            :class="{'border-prolon ': orderType == 'one-time'}"
            @click="orderType = 'one-time'" 
                role="radio" data-option_value="One Time Order"><span class="flex items-center text-sm"><span
                        class="flex items-center justify-center w-8 h-8 border-2 border-prolon rounded-full" 
                        :class="{'bg-prolon': orderType == 'one-time'}"
                        aria-hidden="true"><span
                            class="rounded-full bg-white w-2.5 h-2.5"></span></span><span
                        class="flex items-center justify-center hidden w-4 h-4 bg-white border rounded-full"
                        aria-hidden="true"><span class="rounded-full bg-white w-1.5 h-1.5"></span></span><span
                        class="ml-3 font-bold text-gray-900 text-xs md:text-sm">One Time<span
                            class="block text-xs font-normal">Purchase this time only</span></span></span><span
                    class="pl-1 ml-6 text-sm text-gray-500 md:ml-0 md:pl-0 md:text-right"><span
                        class="font-bold text-gray-900 text-md" >$ {{
                          oneTimePrice
                        }}</span></span></div>
        </div>
    </div>
</div>

       
      <button type="button" class="mx-auto bg-prolon disabled:bg-orange-200 h-[55px] mx-auto text-[20px] w-[300px] add-to-cart-directly rounded-md" @click="directToCheckout" :disabled="addingtoCart"
                    
                    >
                     <svg v-if="addingtoCart" class="inline w-8 h-8 ml-2 text-white animate-spin " viewBox="0 0 100 101" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"></path>
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"></path>
    </svg>
                    <span v-else
                            class="inline-block w-full px-6 py-3 font-medium text-center rounded text-contrast"><span
                                class="flex items-center justify-center gap-2 mx-auto text-white max-w-prose inherit text-copy"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" width="18" class="w-[25px] h-[25px]" >
                                    <path fill-rule="evenodd"
                                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="mr-2 font-bold uppercase ">Order Now </span>
                                </span>
                  </span>
        </button>
        </div>
  `,
  props: [
    "variants",
    "discountcode",
    "discountdata",
    "widgettype",
    "newjsondata",
  ],
  data() {
    return {
      orderType: "one-time",
      products: this.newjsondata.map((product) => {
        return { ...product, current_variant: product.variants[0] };
      }),
      addingtoCart: false,
    };
  },
  methods: { 
    getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    selectVariant(product, variant) {
      // console.log(`selected variant name: `, variant);
      product.current_variant = product.variants.find((v) => v.name == variant);
      // console.log(`selected variant: `, product.current_variant);
    },

    directToCheckout() {
      let orderCurrent = this.discountdata[this.orderType];
      let utm_discount = this.getParameterByName("discount");

      // let variants = this.jsondata[this.orderType].variants;

      let variants = this.products.map((product) => {
        if (product.current_variant) {
          return product.current_variant;
        } else {
          return product.variants[0];
        }
      });

      // let items = variants.map((variant) => {
      //   let cartitem = {
      //     id: variant.variant_id,
      //     quantity: 1,
      //   };

      //   if (this.orderType == "recurring") {
      //     cartitem.selling_plan = variant.selling_plan;
      //   }
      //   return cartitem;
      // });
      let discountCode = orderCurrent.discount_code;
      if (utm_discount && utm_discount != "") {
        discountCode = utm_discount;
      }

      let items = variants.map((variant) => {
        let cartitem = {
          id: variant[`${this.orderType}_variant_id`],
          quantity: 1,
        };

        if (this.orderType == "recurring") {
          cartitem.selling_plan = variant.selling_plan;
        }
        return cartitem;
      });

      this.addingtoCart = true;
      store.bulkAddToCartClear(items, (response) => {
        if (response.status != 422) {
          window.location.href = "/checkout?discount=" + discountCode;
          //  toggleCart.showCart();
          setTimeout(() => {
            this.addingtoCart = false;
          }, 2000);
        } else {
          this.addingtoCart = false;
        }
      });
    },
  },
  computed: {
    subscriptionPrice() {
      return this.discountdata["recurring"].price;
    },
    oneTimePrice() {
      return this.discountdata["one-time"].price;
    },
    discountSubValue() {
      return this.discountdata["recurring"].discount_amount + "%";
    },
  },
  mounted() {
    console.log(this.variants, this.discountdata);
  },
};


function removeProtocol(path) {
  return path.replace(/http(s)?:/, "");
}
function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === "master") {
    return removeProtocol(src);
  }

  const match = src.match(
    /\.(webp|jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
  );

  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];

    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}
function getSizedImageSrcSet(src) {
  const imageSizes = [100, 480, 960, 1440, 1920, 2560, 3840];

  return imageSizes
    .map((size) => `${getSizedImageUrl(src, size + "x")} ${size}w`)
    .join(", ");
}

if (document.querySelector("#ck-product-form")) {
  const productImage = Vue.ref(null);

  const productForm = Vue.createApp({
    delimiters: ["${", "}"],
    data() {
      let selected_plan = {};
      let monthText = "1 Month";
      if (currentProduct.handle.includes("longevity-spread")) {
        monthText = "3 Months";
      }
      if (
        window.currentProduct &&
        window.currentProduct.selling_plan_groups.length > 0 &&
        window.currentProduct.selling_plan_groups[0].selling_plans[0]
      ) {
        selected_plan =
          window.currentProduct.selling_plan_groups[0].selling_plans.find((e) =>
            e.name.includes(monthText)
          );
        if (!selected_plan) {
          selected_plan =
            window.currentProduct.selling_plan_groups[0].selling_plans[0];
        }
      }
      let subscriptionPlan;
      let option2 =
          window.selectedVariant &&
          window.selectedVariant.option2 &&
          window.selectedVariant.option2.toLowerCase(),
        option3 =
          window.selectedVariant &&
          window.selectedVariant.option3 &&
          window.selectedVariant.option3.toLowerCase();
      if (
        (option2 && option2.includes("subscri")) ||
        (option3 && option3.includes("subscri"))
      ) {
        subscriptionPlan = "recurring";
      } else {
        subscriptionPlan = "one-time";
      }

      return {
        product: window.currentProduct,
        showBenefitsModal: false,
        option1: window.selectedVariant.option1,
        option2: window.selectedVariant.option2,
        option3: window.selectedVariant.option3,
        plan: subscriptionPlan,
        selected_plan: selected_plan,
        addingtoCart: false,
        availableVariant: window.selectedVariant?.available,
        productSettings: window.productSection,
        imageLoading: true,
        isAccordionOpen: [],
      };
    },
    methods: {
      money(value) {
        if (!value) return 0;
        return "€" + (value / 100).toFixed(2);
      },
      closeBenefits() {
        this.showBenefitsModal = false;
      },
      showBenefits(e) {
        if (e && e.preventDefault) {
          e.preventDefault();
        }

        this.showBenefitsModal = true;
      },
      addToCart(id) {
        // item.loading=true;
        this.addingtoCart = true;
        store.addToCart(this.currentVariant.id, 1, this.selling_plan, () => {
          this.addingtoCart = false;
          try {
              if (window.current_item) {
                _learnq.push(["track", "Added to Cart", window.current_item]);
              }
            let shouldAddWaterBottle = document.querySelector(
              ".water-bottle-add-to-cart"
            ).checked;

            if (shouldAddWaterBottle) {
              let itemsToUpdate = {
                39896756092974: 1,
              };

              store.bulktUpdateCart(itemsToUpdate, () => {
                // window.location.href = "/cart";
              });
            }
          } catch (ex) {
            window.SuperCart.ShowCartfn();
          }
        });

        setTimeout(() => {
          //      item.loading=false;
        }, 2000);
      },
      setPlan(plan, optionIndex, value) {
        this.plan = plan;
        if (optionIndex && value) {
          this[optionIndex] = value;
        }
      },
      ShouldOptionVisible(optionIndex, value) {
        if (value.toLowerCase().includes("soup flavor")) {
          if (
            this.option1.toLowerCase().includes("prolon four 1-day reset kits")
          ) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }

        console.log("TToptionIndex", optionIndex, "value", value);
      },
      setOption(optionIndex, value) {
        this[optionIndex] = value;
      },
      getOption(optionIndex, value, index) {
        let options = this.productSettings && this.productSettings.blocks;
        let option;
        let filterOptions = {
          option_1: this.option1 || "",
          option_2: this.option2 || "",
          option_3: this.option3 || "",
        };
        filterOptions[optionIndex] = value;

        if (options) {
          option = options.find((o) => {
            return (
              o &&
              o.option_1 == filterOptions.option_1 &&
              o.option_2 == filterOptions.option_2 &&
              (o.option_3 == "" || o.option_3 == filterOptions.option_3) &&
              o["for_option"] == index
            );
          });

          if (!option) {
            option = options.find((o) => {
              return (
                o &&
                (o.option_1 == "" || o.option_1 == filterOptions.option_1) &&
                (o.option_2 == "" || o.option_2 == filterOptions.option_2) &&
                (o.option_3 == "" || o.option_3 == filterOptions.option_3) &&
                o["for_option"] == index
              );
            });
          }
        }
        return option;
      },
      getOptionName(optionKey, name) {
        let optionName = this.productSettings["option_" + optionKey + "_name"];
        if (optionName && optionName != "") {
          return optionName.replace("{option}", name);
        } else {
          return name;
        }
      },
      getProductTitle(t) {
        let custom_product_title = this.productSettings["custom_product_title"];
        if (custom_product_title) {
          let optionTitle = this.optionTitle("option_1", this.option1, 1);
          if (optionTitle && optionTitle != "") {
            return optionTitle;
          } else {
            return t;
          }
        } else {
          return t;
        }
      },
      getProductDescripton(t) {
        let custom_product_title = this.productSettings["custom_product_title"];
        if (custom_product_title) {
          let optionProductDescription = this.optionProductDescription(
            "option_1",
            this.option1,
            1
          );
          if (optionProductDescription && optionProductDescription != "") {
            return optionProductDescription;
          } else {
            return t;
          }
        } else {
          return t;
        }
      },
      optionText(optionIndex, value, index) {
        let option = this.getOption(optionIndex, value, index);
        if (
          option &&
          option["for_option"] == index &&
          option["custom_name"] != ""
        ) {
          return option["custom_name"];
        } else if (value === "") {
          return "";
        } else {
          return value;
        }
      },
      getVariantByOption(optionIndex, value, index) {
        let variants = this.product.variants;
        let available = false;
        let filterOptions = {
          option1: this.option1,
          option2: this.option2,
          option3: this.option3,
        };
        filterOptions[optionIndex] = value;
        let currentVariant = variants.find((v) => {
          return (
            v.option1 == filterOptions.option1 &&
            v.option2 == filterOptions.option2 &&
            v.option3 == filterOptions.option3
          );
        });

        return currentVariant;
      },
      optionTitle(optionIndex, value, index) {
        let option = this.getOption(optionIndex, value, index);
        if (option) {
          return option["title"];
        } else {
          return null;
        }
      },
      optionProductDescription(optionIndex, value, index) {
        let option = this.getOption(optionIndex, value, index);
        if (option) {
          return option["product_description"];
        } else {
          return null;
        }
      },
      hideOption(optionIndex, value, index) {
        let option = this.getOption(optionIndex, value, index);
        if (option && option["hide_option"]) {
          return true;
        } else {
          return false;
        }
      },
      optionAvailable(optionIndex, value) {
        let available = false;
        let currentVariant = this.getVariantByOption(optionIndex, value);

        if (currentVariant && currentVariant.id) {
          available = true;
        }

        return available;
      },
      optionDescription(optionIndex, value, index) {
        let option = this.getOption(optionIndex, value, index);

        if (
          option &&
          option["for_option"] == index &&
          option["custom_description"] != ""
        ) {
          return option["custom_description"];
        } else {
          return null;
        }
      },
      getOptionDescription(index, optionName) {
        let value = this["option" + index];
        let option = this.getOption(index, value, index);

        if (
          option &&
          option["for_option"] == index &&
          option["custom_description"] != ""
        ) {
          return option["custom_description"];
        } else {
          return null;
        }
      },
      optionBgImage(optionIndex, value, index) {
        let option = this.getOption(optionIndex, value, index);

        if (
          option &&
          option["for_option"] == index &&
          option["custom_image"] != ""
        ) {
          return option["custom_image"];
        } else {
          return null;
        }
      },
      isSubscriptionOption(optionName) {
        return optionName.toLowerCase().includes("subscri");
      },
      optionPrice(optionIndex, value, index) {
        let currentVariant = this.getVariantByOption(optionIndex, value, index);

        return currentVariant && currentVariant.price;
      },
      toggleAccordion(index) {
        if (this.isAccordionOpen.includes(index)) {
          this.isAccordionOpen = this.isAccordionOpen.filter(
            (i) => i !== index
          );
          return;
        }

        this.isAccordionOpen.push(index);
      },

      //   chooseOption(option, value) {
      //     this[option] = value;
      //     this.$nextTick(() => {
      //       this.currentVariant = this.product.variants.find((variant) => {
      //         return (
      //           variant.option1 === this.option1 &&
      //           variant.option2 === this.option2 &&
      //           variant.option3 === this.option3
      //         );
      //       });
      //     });
      //   },
    },
    computed: {
      isShowBenefits() {
        return this.showBenefitsModal;
      },
      currentVariant() {
        return this.product.variants.find((variant) => {
          return (
            variant.option1 === this.option1 &&
            variant.option2 === this.option2 &&
            variant.option3 === this.option3
          );
        });
      },
      oneTimeVariant() {
        return this.product.variants.find((variant) => {
            // console.log(
            //   `onetime -> variant.option1 ${variant.option1}==${this.option1}, variant.option2 ${variant.option2} == ==${this.option2}, variant.option3 ${variant.option3} == `
            // ); 
          return (
            variant.option1 == this.option1 &&
            variant.option2 == this.option2 &&
            (variant.option3.toLowerCase().includes("one time") ||variant.option3.toLowerCase().includes("one-time") )
          );
        });
      },
      subscriptionVariant() {
        return this.product.variants.find((variant) => {
          // console.log(`sub-> variant.option1 ${variant.option1}, variant.option2 ${variant.option2}, variant.option3 ${variant.option3}`); 
          return (
            variant.option1 == this.option1 &&
            variant.option2 == this.option2 &&
            variant.option3.toLowerCase().includes("subscr")
          );
        });
      },
      oneTimePrice() {
        if (this.oneTimeVariant) {
          return this.oneTimeVariant.price;
        } else {
          return this.currentVariant.price;
        }
      },
      recurringPrice() {
        if (this.subscriptionVariant) {
          return this.subscriptionVariant.price;
        }
      },
      recurringPricePerBox() {
        if (this.subscriptionVariant) {
          let quantityOption = this.subscriptionVariant.option2.toLowerCase();
          if (quantityOption.includes("x")) {
            let quantity = quantityOption.split("x")[0];
            return this.subscriptionVariant.price / quantity;
          }

          return this.subscriptionVariant.price;
        }
      },
      compare_at_price() {
        if (
          this.currentVariant &&
          window.compare_at_prices &&
          window.compare_at_prices[this.currentVariant.id]
        ) {
          return window.compare_at_prices[this.currentVariant.id];
        } else {
          return 0;
        }
      },
      selling_plans() {
        let sellingPlans, ReverseSellingPlans;

        if (
          this.product.selling_plan_groups &&
          this.product.selling_plan_groups.length > 0 &&
          this.product.selling_plan_groups[0].selling_plans
        ) {
          sellingPlans = this.product.selling_plan_groups[0].selling_plans;

          if (this.option1 == "ProLon 5-Day") {
            ReverseSellingPlans =
              this.product.selling_plan_groups[0].selling_plans;
            return ReverseSellingPlans;
          } else {
            return sellingPlans;
          }
        } else {
          sellingPlans = [];
        }
      },
      isSubscriptionProduct() {
        return this.selling_plans && this.selling_plans.length > 0;
      },
      subscriptionPrice() {
        let price_adjustments =
          this.selected_plan &&
          this.selected_plan.id &&
          this.selected_plan.price_adjustments;
        let price = this.currentVariant.price;
        if (price_adjustments) {
          let first_adjustment = price_adjustments[0];
          if (first_adjustment && first_adjustment.value_type == "percentage") {
            price = price - (price * first_adjustment.value) / 100;
          }
        }

        return this.money(price);
      },
      currentPrice() {
        return this.money(this.currentVariant.price);
      },
      selectedPrice() {
        if (this.plan === "one-time") {
          return this.currentPrice;
        } else {
          return this.subscriptionPrice;
        }
      },
      selectedCompareAtPrice() {
        if (this.plan === "one-time") {
          return this.compare_at_price;
        } else {
          return this.compare_at_price;
        }
      },
      moneySave() {
        let compare_at_price = this.oneTimePrice;
        let price = this.recurringPrice;
        let save = 0;
        if (compare_at_price) {
          save = compare_at_price - price;
        }
        return this.money(save);
      },
      percentageSave() {
        let price_adjustments =
          this.selected_plan &&
          this.selected_plan.id &&
          this.selected_plan.price_adjustments;
        let price = this.currentVariant.price;
        let percentage = 0;
        if (price_adjustments) {
          let first_adjustment = price_adjustments[0];
          if (first_adjustment && first_adjustment.value_type == "percentage") {
            percentage = first_adjustment.value;
          }
        }
        return percentage + "%";
      },
      recurringPercentageSave() {
        let compare_at_price = this.compare_at_price;
        let recurringPrice = this.recurringPrice;

        let percentage = 0;
        if (recurringPrice && compare_at_price) {
          percentage =
            ((compare_at_price - recurringPrice) / compare_at_price) * 100;
        }
        return Math.round(percentage) + "%";
      },
      recurringAmountSave() {
        let compare_at_price = this.compare_at_price;
        let recurringPrice = this.recurringPrice;

        let amount = 0;
        if (recurringPrice && compare_at_price) {
          amount = compare_at_price - recurringPrice;
        }
        if (amount > 0) return this.money(amount);
        else return "";
      },
      selling_plan() {
        if (this.plan == "recurring" && this.selected_plan)
          return this.selected_plan.id;
        if (this.option1 == "3 Cycle Program") {
          return this.selected_plan.id;
        } else return null;
      },
    },
    watch: {
      currentVariant(newVariant, oldVariant) {
        // switch variant to original when option1 is changed

        this.availableVariant = newVariant.available;

        if (
          newVariant &&
          newVariant.option1 == "Prolon Four 1-day ReSet Kits"
        ) {
          this.option2 = "Variety";
        } else {
          if (this.option2 == "Variety") {
            this.option2 = "Gen3";
          }
        }

        if (this.selling_plans && this.selling_plans.length > 0) {
          if (
            newVariant &&
            newVariant.option1 == "ProLon 3-Day Reset" &&
            newVariant.option1 !== oldVariant.option1
          ) {
            this.selected_plan = this.selling_plans.find((e) =>
              e.name.includes("1 Month")
            );
          } else {
            this.selected_plan = this.selling_plans.find((e) =>
              e.name.includes("1 Month")
            );
          }
          if (!this.selected_plan && this.selling_plans.length > 0) {
            this.selected_plan = this.selling_plans[0];
          }
        }
        // change Product Image by getting from product.images using variant.image_id

        let image;

        if (newVariant && newVariant.image_id) {
          image = this.product.images.find((image) => {
            return image.id == newVariant.image_id;
          });
        }
        if (
          newVariant &&
          newVariant.featured_image &&
          newVariant.featured_image.src
        ) {
          image = newVariant.featured_image;
        }
        if (image) {
          this.imageLoading = true;
          this.$refs.productImage.src = getSizedImageUrl(image.src, "400x");
          this.$refs.productImage.srcset = getSizedImageSrcSet(image.src);
        } else {
          this.imageLoading = true;
          this.$refs.productImage.src = getSizedImageUrl(
            this.product.featured_image,
            "400x"
          );
          this.$refs.productImage.srcset = getSizedImageSrcSet(
            this.product.featured_image
          );
        }
        // get current url and then update variant param
        let url = new URL(window.location.href);
        url.searchParams.set("variant", newVariant.id);
        window.history.replaceState({}, "", url);
      },
    },
    components: {
      "video-iframe": VideoIframe,
      "vimeo-iframe": VimeoIframe,
      "add-to-cart-directly": AddToCartDirectly,
      "add-to-cart-directly-subs": AddToCartDirectlySubs,
      "add-to-cart-directly-subs-with-variant": AddToCartDirectlySubsWithVariants,
    }, 
    created() {},
  }).mount("#ck-product-form");
}
