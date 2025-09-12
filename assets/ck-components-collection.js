const FlavorsBYSKU = {
  // PR039:  "Red Bell Pepper & Onion, Green Pea & Chives, Lentil Curry, Chickpea & Leeks, Carrot Ginger",
  PR039: "FMD Soup Blend Variety 3",
  // PR001: " Minestrone, Tomato, Mushroom, Vegetable, Minestrone Quinoa",
  PR001: "Original FMD Soup Blend Option",
  PR038: "Green Pea & Chives, Chickpea & Leeks - All new flavors!",
  PR020: "Tomato, Butternut Squash",
  PR055: "Tomato, Minestrone & Quinoa",
  PR056: "Vegetable, Red Bell Pepper & Onion",
  PR057: "Carrot Ginger, Lentil Curry",
  FS1001: "Vanilla",
  FS1002: "Chocolate ",
  // SDBundle3: "14 Individual sachets per bag",
  SDBundle3: "3 Individual Jars",
  SDBundle2: "2 Individual Jars",
  SD001: "1 Individual Jar",
  // Fastbars
  FB1712: "12ct. Chocolate Chip",
  FB1112: "12ct. Nuts & Honey",
  FB1612: "12ct. Coconut Macadamia",
  RD1002: "Variety Pack ",
};
const FlavorsDescriptionBYSKU = {
  PR039:
    "Red Bell Pepper & Onion, Green Pea & Chives, Lentil Curry, Chickpea & Leeks, Carrot Ginger",
  // PR039: "Gen3 FMD Soup Blend Option",
  PR001: " Minestrone, Tomato, Mushroom, Vegetable, Minestrone Quinoa",
  // PR001: "Original FMD Soup Blend Option",
  PR038: "Green Pea & Chives, Chickpea & Leeks - All new flavors!",
  PR020: "Tomato, Butternut Squash",
  FS1001: "14 Individual sachets per bag",
  FS1002: "14 Individual sachets per bag",
};

const TitleByVariantName = {
  "Gen3 / One Time Order_PR001": "Single Prolon 5 Days",
  "Original / One Time Order_PR039": "Single Prolon 5 Days",
  "Gen3 / Subscribe & Save_PR039": "ProLon Clinical Trial Program",
  "Original / Subscribe & Save_PR001": "ProLon Clinical Trial Program",
};

const SingleOption = {
  template: /*html*/ `
    <div class="flex relative py-[10px] m:pr-[15px]">
      <div class="pl-2">
        <span
          :class='
            [
            "!flex items-center justify-center w-8 h-8 border rounded-full",
             checked ? "border bg-prolon_primary border-transparent": "border border-gray-300"
              
            ]
        '
          aria-hidden="true"
        > 
          
            <span v-if="checked" class="rounded-full !block bg-white w-2.5 h-2.5"></span>
          
        </span>
      </div>
      <div class="max-w-full flex-1 pl-3">
        <span class="flex">
          <span v-if="isMain" class=" text-base  mr-[10px] font-semibold text-left block">
          
            {{get_title(variant.title, variant?.sku)}}
          </span> 
      
            <span
              v-if="isMain && variant && variant.option2 && savingValue && variant.option2.toLowerCase().includes('subscri')"
            
            class="p-1 px-3 hidden lg:block bg-[#ffe667] rounded-sm text-[12px] m:absolute !top-[1px] !right-[6px] font-bold">
              Save {{money(savingValue)}}
            </span>
         
        </span>

        <span class="c-description">
          <span class="">
            
                <span v-if="isMain"
                  class="absolute w-full h-full z-1 left-0 top-0 "
                  
                ></span>
            
         
              <div v-if="isMain && isSubscription" class="font-normal z-10 relative max-w-[200px] text-[12px] flex items-center my-2">
                Deliver Every : 
                
                  <span v-if="selling_plans?.length == 1">
                    {{selling_plans?.[0]?.name.replace("Deliver every ", "").replace("Delivery every ", "")}}
                  </span>
                
                <select v-if="selling_plans?.length > 1"
                  class="pl-2 border-0 bg-transparent border-b-2 focus:outline-none  pr-8 text-[12px]  text-black"
                  @change="change_subscription_plan($event)"
                  :value="selected_plan?.id"
                > 
          
                      <option 
                        v-for="plan in selling_plans"
                        :key="plan.id"
                        :value="plan.id"
                        :selected="plan.id == selected_plan?.id"
                      >
                        {{plan.name
                          .replace("Deliver every ", "")
                          .replace("Delivery every ", "")}}
                      </option>
                </select>
              </div>
                          <hr
                          class="border-gray-200 my-2"
                          v-if="isMain"
                          />
            <span class="text-[14px] text-gray-600 font-semibold text-left block">
              {{get_sku_flavor(variant.sku)}}
            </span>
              
              <span v-if="!isMain" class="text-[12px] text-gray-400 font-normal text-left block">
                {{get_sku_flavor_description(variant.sku,variant.title)}}
              </span> 
            
          </span>
          
            <span v-if="isSubscription" class="!block text-left  !text-green-900 text-[12px]">
              Easy renewal, stop anytime.
            </span>                          
            <span v-else class="!block text-left !text-gray-900 text-[12px]">
              One time purchase
            </span> 
          
        </span>
      </div>

      <div 
        class="flex flex-col items-end pr-2"
    
      >
        <span 
          
          v-if="variant && variant.option2 && savingValue && variant.option2.toLowerCase().includes('subscri')"

          class="p-1 block lg:hidden bg-[#ffe667] rounded-sm text-[10px]  !top-[1px] !right-[6px]">
            Save {{savingValue / 100}}
          </span>
        
        <span class="textelement body--large-b c-price css-0 e1yexmq90 font-bold">
          {{money(variant.price)}}
        </span>

        
              <s 

              v-if="isSubscription && OneTimeVariant && OneTimeVariant?.price > subscriptionVariant?.price"

              class="text-gray-400">
                {{money(OneTimeVariant.price)}}
              </s>
         
          <div
            v-if="variants?.length > 1"
            @click="toggle_selected"
            style="padding: 0px;
                background: rgb(115 153 74 );
                height: 30.8px;
                border-radius: 50%;
                width: 30px;
                fill: white;
                color: white;"
            class="css-1t2v0b6 em7gzp65 plus-icon flex justify-center items-center z-10 relative"

          >
            <svg
              class="plus-icon"
              data-element="DownNav"
              data-source-file="pdp-atc-test.js"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
            >
              <path
                d="M17 1L9 9L1 0.999999"
                stroke="#22202F"
                stroke-miterlimit="10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="stroke:white;"
              ></path>
            </svg>
          </div>
       
      </div>

            <span 

              v-if="false &&  isMain && isSubscription && OneTimeVariant && subscriptionVariant && OneTimeVariant?.price > subscriptionVariant?.price && variants?.length > 1"

              :class='[
                "!text-[9px]",
                "absolute prolon-right-badge bg-prolon_primary -right-[76px] m:-right-[63px] transform rotate-90 font-bold text-white text-xs px-3 py-1 -right-20 sm:px-1 sm:py-0.5 sm:-right-[70px] sm:text-xxs", 
                get_sku_flavor(variant.sku) ==="" ?  "!top-[38px] !text-[8px] m:!top-[38px] m:!-right-[51px]"
                :"!top-[52px] m:!top-[52px]" 
              ]'
              style="border-top-right-radius: 10px; border-top-left-radius: 10px;"
            >
              *SUBSCRIBE & SAVE
            </span>
          
    </div>
  
 
  `,
  props: [
    "product",
    "checked",
    "variant",
    "variants",
    "isMain",
    "option_name",
    "option_index",
    "selected_plan",
    "is_selected",
    "toggle_selected",
    "get_sku_flavor",
    "change_subscription_plan",
    "get_sku_flavor_description",
    "get_title",
  ],
  data() {
    return {};
  },
  computed: {
    isSubscription() {
      let variant = this.variant;
      let variantCheckOption = variant[this.option_index];
      console.log("variantCheckOption", this.option_index);
      return variantCheckOption?.toLowerCase().includes("subscri");
    },
    subscriptionVariant() {
      let product = this.product;
      let variant = this.variant;
      let subVariant = product.variants?.find((v) => {
        return (
          (v.option1 == variant.option1 &&
            v?.option2?.toLowerCase().includes("subscri")) ||
          (v.option3 == variant.option3 &&
            v?.option2?.toLowerCase().includes("subscri"))
        );
      });
      return subVariant || null;
    },
    OneTimeVariant() {
      let product = this.product;
      let variant = this.variant;
      let oneVariant = product.variants?.find((v) => {
        return (
          v.option1 == variant.option1 &&
          !v.option2?.toLowerCase().includes("subscri") &&
          !v.option3?.toLowerCase().includes("subscri")
        );
      });
      return oneVariant || null;
    },

    saved() {
      return this.subscriptionVariant?.price - this.OneTimeVariant?.price;
    },
    savingPercentage() {
      return Math.round(
        (1 - this.subscriptionVariant?.price / this.OneTimeVariant?.price) * 100
      );
    },
    savingValue() {
      let v = this.subscriptionVariant?.price - this.OneTimeVariant?.price;
      if (isNaN(v)) {
        return 0;
      }
      return Math.abs(v);
    },
    selling_plans() {
      return this.product?.selling_plan_groups?.[0]?.selling_plans;
    },
  },
  methods: {
    money(value) {
      return "$" + (value / 100).toFixed(2).replace(".00", "");
    },

    togglePlay() {
      if (this.$refs.video.paused) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }
    },
  },

  mounted() {
    // console.log("FMD--2", this.variant, this.product, this);
  },
};

const SingleOptionWrapper = {
  template: /*html*/ `
     <div
          :class='[
            "my-2 rounded-md relative mt-4 mr-4 sm:mr-0", 
            checked ? "!border-prolon_primary border-2 shadow-lg bg-[#f9fff1]":" border-2 border-gray-200",
          ]'

        >
  
          <button
            :class="[
              checked && 'option-0 normal !bg-transparent has-savings button-big-select w-full',
              '!border-0  !px-0 md:!px-[10px] w-full', 
              isSelected && ' opacity-[.5]'
            ]"
            @click="chooseType(option_name)"
                   >
         
           <single-option
              v-if="selectedVariant"
              :checked="checked" 
              :option_name="option_name"
              :option_index="option_index"
              :variant="selectedVariant"
              :variants="variants" 
              :isMain="true"
              :product="product"
              :is_selected="isSelected"
              :toggle_selected="toggleSelected"
              :selected_plan="selected_plan"
              :get_sku_flavor="get_sku_flavor"
              :get_sku_flavor_description="get_sku_flavor_description"
              :get_title="get_title"
              :change_subscription_plan="change_subscription_plan"
         

            />
          </button>

          <div
            :class="[
              'buttonsfloat css-8clgp2 em7gzp67 z-[120] border-[2px] border-prolon_primary',
            isSelected && checked ? '':'hidden',
            variants.length>3 ? '-top-[300px]':'top-[0px]'
            ]"  


            role="listbox"
          >
  
                  <button
                    v-for="variant in variants"
                    :key="variant.id"
                    :class="[
                      'option-0 float has-savings css-f4yuny em7gzp66 hover:!border-[2px] hover:!border-prolon_primary',
                      '!border-2px !border-gray-300',
                    ]"
                    @click="chooseVariant(variant, option)"
>
                  <single-option
                  :variant="variant"
                  :product="product" 
                  :option_index="option_index"
                  :option_name="option_name"
                  :isMain="false"
                  :get_sku_flavor="get_sku_flavor"
                  :get_title="get_title"
                  :is_selected="isSelected"                  
                  :toggle_selected="toggleSelected"
                  :selected_plan="selected_plan"
                  :get_sku_flavor_description="get_sku_flavor_description"
                  :change_subscription_plan="change_subscription_plan"
                  /> 
                    
                  </button>
             
          </div>
    </div>
  `,
  props: [
    "option_name",
    "option_index",
    "choosemainvariant",
    "product",
    "current_variant",
    "get_sku_flavor",
    "get_sku_flavor_description",
    "get_title",
    "selected_plan",
    "current_selected",
    "change_subscription_plan",
    "select_type",
  ],
  data() {
    return {
      selectedVariant: null,
      isSelected: false,
    };
  },

  computed: {
    checked() {
      return this.current_selected == this.option_name;
    },
    option() {
      return {
        name: this.option_name,
        position: this.option_index,
      };
    },
    variants() {
      let product = this.product;
      let variants = product.variants?.filter((v) => {
        return v[this.option_index] == this.option_name;
      });
      return variants;
    },
  },
  mounted() {
    if (!this.selectedVariant) {
      let variantOptions = {};
      variantOptions["option1"] = this.current_variant?.option1;
      variantOptions["option2"] = this.current_variant?.option2;
      variantOptions["option3"] = this.current_variant?.option3;
      variantOptions[this.option_index] = this.option_name;

      this.selectedVariant = this.product.variants?.find((v) => {
        return (
          v.option1 == variantOptions.option1 &&
          v.option2 == variantOptions.option2 &&
          v.option3 == variantOptions.option3
        );
      });

      if (!this.selectedVariant) {
        this.selectedVariant = this.variants && this.variants[0];
      }
    }
    // console.log("FMD--1", this);
  },
  components: {
    "single-option": SingleOption,
  },
  methods: {
    toggleSelected() {
      this.isSelected = !this.isSelected;
    },
    chooseType(name) {
      this.select_type(name);
      let optionIndex = this.option_index;

      let isSubscription = this.selectedVariant[optionIndex]
        .toLowerCase()
        .includes("subscri");

      this.choosemainvariant(this.selectedVariant, isSubscription);
    },
    chooseVariant(variant) {
      this.selectedVariant = variant;
      this.isSelected = false;
      let optionIndex = this.option_index;
      let isSubscription = variant[optionIndex]
        .toLowerCase()
        .includes("subscri");

      this.choosemainvariant(variant, isSubscription);
    },
  },
};

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
   
      <button type="button" class="mx-auto bg-prolon_secondary disabled:bg-orange-200 h-[55px] mx-auto text-[20px] w-[300px] add-to-cart-directly rounded-md" @click="directToCheckout" :disabled="addingtoCart"
                    
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
                                class="!pl-2 pr-8 ml-1 !text-sm font-bold border-0 border-b-2 text-prolon_secondary border-prolon_secondary focus:outline-none">
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
            :class="{'border-prolon_orange border-transparent': orderType == 'one-time'}"
            @click="orderType = 'one-time'" 
                role="radio" data-option_value="One Time Order"><span class="flex items-center text-sm"><span
                        class="flex items-center justify-center w-8 h-8 border-2 border-orange-500 rounded-full" 
                        :class="{'bg-prolon_secondary': orderType == 'one-time'}"
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

       
      <button type="button" class="mx-auto bg-prolon_secondary disabled:bg-orange-200 h-[55px] mx-auto text-[20px] w-[300px] add-to-cart-directly rounded-md" @click="directToCheckout" :disabled="addingtoCart"
                    
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
            :class="{'border-prolon_orange border-transparent': orderType == 'one-time'}"
            @click="orderType = 'one-time'" 
                role="radio" data-option_value="One Time Order"><span class="flex items-center text-sm"><span
                        class="flex items-center justify-center w-8 h-8 border-2 border-orange-500 rounded-full" 
                        :class="{'bg-prolon_secondary': orderType == 'one-time'}"
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
      orderType: "recurring",
      products: this.newjsondata.map((product) => {
        return { ...product, current_variant: product.variants[0] };
      }),
      addingtoCart: false,
    };
  },
  methods: {
    selectVariant(product, variant) {
      // console.log(`selected variant name: `, variant);
      product.current_variant = product.variants.find((v) => v.name == variant);
      // console.log(`selected variant: `, product.current_variant);
    },

    directToCheckout() {
      let orderCurrent = this.discountdata[this.orderType];

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

const SingleProductSectionShopNow = {
  template: /*html*/ `
  
  <a class="block py-4 px-7 w-full text-lg md:text-xl leading-6  font-medium text-center text-white hover:text-white bg-[#73994a] hover:bg-[#78A117] cursor-pointer open-quick-view"
  :class="btnclass"
  aria-label="Shop Now"
  @click="openQuickView"
  > <span class="flex items-center justify-center gap-2 mx-auto text-white max-w-prose inherit text-copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="18"><path fill-rule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z" clip-rule="evenodd"></path></svg><span class="mr-2 font-bold ">Shop Now</span><span class="font-bold"></span></div></span> </a> 
  <Teleport to="body" > 

  <div class="relative z-[1000]"
  :class = "{'loaded_animation': startAnimation}" 
  v-if="isModalOpen"
  aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-0  text-center sm:items-center sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeQuickView"></div>

        <!--  close svg --> 

      
      <div class="fixed bottom-0 md:relative transform  text-left  transition-all sm:my-8 sm:w-full sm:max-w-[95%] 2xl:max-w-[80%] w-full h-[90vh]  sm:align-middle sm:rounded-lg sm:shadow-xl" 
        :class = "{'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !AnimatedModalToShow, 'opacity-100 translate-y-0 sm:scale-100': AnimatedModalToShow}"
       
      >
      
     
         <div class="fixed top-0 right-0 pt-4 pr-4 z-20" >
          <button type="button" class="text-gray-900 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-white"
          @click="closeQuickView"
          >
            <span class="sr-only">Close</span>
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div> 
 
      <div class="pl-wrapper pl-wrapper-product-section bg-white p-2 overflow-x-hidden overflow-y-scroll h-[100%] " v-if="product">
      <div
        class="relative"
      >
        <div class="mx-auto pt-0  lg:max-w-[1600px] sm:px-[20px] md:px-[0px]">
          <div class="md:grid md:grid-cols-6 lg:grid-cols-6 lg:grid-rows-1 lg:gap-x-8 lg:gap-[30px] xl:gap-[50px]">
            <div class="md:col-span-3 lg:col-span-4 lg:row-end-1 lg:px-0">
              <div class="flex flex-col">
                <div class="w-full aspect-w-1 aspect-h-1 flex flex-nowrap md:grid md:grid-cols-2 gap-2 md:justify-center md:items-center overflow-x-scroll overflow-y-hidden md:overflow-hidden"
                  v-html="settings?.quick_view_media"
                >
                  
                       

                      <div
                        class="{% if forloop.index == 2  %} col-span-2 md:!max-w-full {% endif %} hero__animation-contents "
                        style="transition-delay: {{forloop.index | times: 0.4}}s"                      
                      >
                        <img
                          src="{{ media.settings.image | img_url: '600x' }}"
                          class="!w-auto md:!w-full md:!max-w-full min-h-[350px] m:!max-h-[350px] md:!h-full !object-cover"
                          alt="Product image"
                          loading="eager"
                        />
                      </div>
                   
                 
                  <img
                    class="col-span-2 hidden md:block !max-w-full !h-auto !object-contain"
                    src="https://cdn.shopify.com/s/files/1/0126/2921/3243/files/pl-Featured.png?v=1690546584&width=2754&height=129"
                  />
                </div>
              </div>
            </div>
            <div class="w-full max-w-3xl mx-auto mt-4 sm:mt-16 md:col-span-3 lg:col-span-5 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none product-details lg:sticky lg:top-[60px]   lg:max-h-[850px]   mh900:top-[100px] px-0 md:px-[15px] lg:px-[30px] lg:pl-0  2xl:px-[60px] mb-[100px]">
              <div class="flex flex-col justify-center items-start">
               
                <h1
                  data-product-id="{{product?.id}}"
                  class="w-full text-left text-[18px]  font-bold  text-gray-900 sm:text-[24px] mt-[10px]"
                >{{product?.title}}</h1>
                <span
                  class=" block w-full text-left font-normal text-gray-900 text-[16px]"
                >{{product.subtitle}}</span>
                <span class="mt-2 block w-full text-left font-semibold text-gray-900 text-[14px] md:text-[16px]">
                  {{selectedPrice}}   <span v-if="isProlonPatient" class="font-normal">
                 <s>{{(money(selected_variant?.price))}}</s> - with your provider code</span>
                </span> 
               

                <div 
                  class="mt-4 w-full product-description"
                  v-html="product_description"
                ></div>
              </div>
              <div class="button-holder-wrapper mb-[100px] md:mb-[0px]">
              <div v-if="productSettings.template_type=='bundle-style'" >
                <div v-for="option in product?.options" class="py-2">

                <div class="font-bold " >
                Choose {{option.name}}
                </div>  
                <div class="flex flex-wrap gap-2 py-2">
                <div v-for="value in option.values" 

                class="px-3 py-2 border-2 border-gray-200 cursor-pointer" 
                :class="{
                'border-prolon bg-prolon_light_primary':  isSelectedOption(option.position, value),
                'hover:border-prolon hover:bg-prolon_light_primary': !isSelectedOption(option.position, value),
           
                }"       

                @click="selectOption(option.position, value)"
                v-text="value"
                >

                </div>

                </div>

                </div>




              </div>
              <div v-else v-for="option in productOptions"> 

              <single-option-wrapper
              :current_selected="current_selected_value"
              :choosemainvariant="choosemainvariant"
              :select_type="select_type" 
              :option_name="option"
              :option_index="productSettings.subscription_option || 'option1'"
              :product="product"
              :current_variant="currentVariant" 
              :get_sku_flavor="getSKuFlavor"
              :get_sku_flavor_description="getSKuFlavorDescription"
              :get_title="getTitle" 
              :selected_plan="selected_plan"
              :change_subscription_plan="changeSubscriptionPlan"
              />    

              </div>

              </div> 
              <div class="w-full bg-white fixed md:relative bottom-0 left-0 z-[100] p-2 sm:p-0" >
   <button
        :disabled="addingtoCart || !availableVariant"
        type="button"
        class="bg-[#73984a] w-full"
        :class="
        {  

        '!cursor-not-allowed opacity-50':!availableVariant,

        }
        "
                 @click.prevent=" addToCart()"

    
      >
        <span class="inline-block w-full px-6 py-3 font-medium text-center rounded text-contrast testedHere-"
          ><span class="flex items-center justify-center gap-2 mx-auto text-white max-w-prose inherit text-copy">
            <svg
              v-if="addingtoCart"
              class="inline w-4 h-4 ml-2 text-white animate-spin "
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
            </svg>
            <svg
              v-if="!addingtoCart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              width="18"
            >
              <path fill-rule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z" clip-rule="evenodd"></path>
            </svg> 
            
            <span v-if="availableVariant" class="mr-2 font-bold " v-text="addingtoCart ? 'Adding...':'Add to Cart'"> </span>
            <span v-if="!availableVariant" class="hidden font-bold"
              :class="
              {
                '!block':!availableVariant,
              }
              "

            > SOLD OUT</span>
          
              <div>
                <span class="mr-2">·</span><span v-if="!addingtoCart" class="font-bold" v-text="selectedPrice"></span>
              </div>
              </span>
     </span>
      </button>  
             </div>

             
            </div>
          </div>
        </div>
      </div> 
    
  
</div> 



      <div class="flex-1 bg-white p-2" v-if="!product">
    <div class="relative"><div class="mx-auto pt-0  lg:max-w-[1600px] md:px-[0px]"><div class="md:grid md:grid-cols-6 lg:grid-cols-6 lg:grid-rows-1 lg:gap-x-8 lg:gap-[30px] xl:gap-[50px]"><div class="md:col-span-3 lg:col-span-4 lg:row-end-1 lg:px-8 2xl:px-0"><div class="flex flex-col"><div class="w-full aspect-w-1 aspect-h-1 flex flex-nowrap md:grid md:grid-cols-2 gap-2 md:justify-center md:items-center overflow-x-scroll overflow-y-hidden md:overflow-hidden animate-pulse"><div class="bg-gray-300  h-full items-center justify-center mb-4 min-h-[500px] rounded hidden sm:flex"><svg class="h-10 text-gray-200 w-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"><path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path></svg></div><div class="bg-gray-300  h-full items-center justify-center mb-4 min-h-[500px] rounded hidden sm:flex"><svg class="h-10 text-gray-200 w-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"><path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path></svg></div><div class="bg-gray-300 col-span-2 flex h-[400px] h-full items-center justify-center svg w-full"><svg class="h-10 text-gray-200 w-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"><path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path></svg></div><img class="col-span-2 hidden md:block !max-w-full !h-auto !object-contain" src="https://cdn.shopify.com/s/files/1/0126/2921/3243/files/pl-Featured.png?v=1690546584&amp;width=2754&amp;height=129"></div></div></div><div class="2xl:px-[60px] animate-pulse lg:col-span-5 lg:max-h-[850px] lg:max-w-none lg:mt-0 lg:pl-0 lg:px-[30px] lg:row-end-2 lg:row-span-2 lg:sticky lg:top-[60px] max-w-3xl md:col-span-3 md:px-[15px] mh900:top-[100px] mt-4 mx-auto product-details px-0 sm:mt-16 w-full"><div class="flex flex-col justify-center items-start"><span class="hidden md:block w-full text-left font-normal text-gray-900 text-[14px] md:text-[16px]"><a href="/"><div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div></a></span><h1 data-product-id="{{product?.id}}" class="w-full text-left text-[18px]  font-bold  text-gray-900 sm:text-[24px] mt-[10px]"><div class="bg-gray-200 h-[40px] mb-4 w-48 w-[300px]"></div></h1><span class=" block w-full text-left font-normal text-gray-900 text-[16px]"></span><span class="mt-2 block w-full text-left font-semibold text-gray-900 text-[14px] md:text-[16px] bg-gray-200 h-[40px] mb-4 w-48 w-[100px]"></span><div class="mt-4 w-full product-description"><div class="flex-1"><div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div><div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full "></div><div class="flex items-center mt-4 space-x-3"><div><div class="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div><div class="w-48 h-2 bg-gray-200 rounded-full "></div></div></div><span class="sr-only">Loading...</span></div></div></div><div class="button-holder-wrapper"><div class="bg-gray-200 h-2.5 h-[120px] mb-4 mt-5 w-full"></div></div><button type="button" class="bg-[#73984a] w-full"><div class="h-2.5 h-[20px] mb-4 mt-5 w-full"></div></button></div></div></div></div>
</div>
      </div>
       
      </div>
    </div>
  </div>
</div>

  </Teleport>

  `,
  props: ["handle", "settings", "btnclass"],
  data() {
    let productSettings = this.settings;
    let optionIndex = productSettings.subscription_option || "option1";
    subscriptionPlan = "recurring";

    return {
      isModalOpen: false,
      AnimatedModalToShow: false,
      product: false,
      current_selected_value: false,
      availableVariant: false,
      selected_plan: false,
      plan: subscriptionPlan,
      option1: "",
      option2: "",
      option3: "",
      startAnimation: false,
      addingtoCart: false,
    };
  },
  computed: {
    isProlonPatient() {
      let t = location.href.includes("prolon-professionals");
      return t;
    },
    isLongevityBundleinCart() {},
    selling_plans() {
      return this.product?.selling_plan_groups?.[0]?.selling_plans;
    },
    selectedPrice() {
      let price = this.currentVariant?.price || 0;
      if (this.isProlonPatient) {
        price = price * 0.8;
      }
      return this.money(price);
    },

    productSettings() {
      return this.settings;
    },
    currentVariant() {
      let variant = this.product?.variants?.find((variant) => {
        return (
          variant.option1 === this.option1 &&
          variant.option2 === this.option2 &&
          variant.option3 === this.option3
        );
      });
      if (!variant) {
        variant = this.product?.variants?.[0] || false;
      }
      return variant;
    },
    productOptions() {
      let subscription_option = this.productSettings.subscription_option;

      let variants = this.product?.variants;
      if (!variants) {
        return [];
      }
      let options = [];
      if (!subscription_option) {
        subscription_option = "option1";
      }
      for (let v of variants) {
        options.push(v[subscription_option]);
      }
      // get unique options
      options = [...new Set(options)];

      return options;
    },

    product_description() {
      return (
        this.settings?.quick_view_description || this.product?.body_html || ""
      );
    },
    selling_plan() {
      if (this.plan == "recurring" && this.selected_plan)
        return this.selected_plan.id;
      if (this.option1 == "3 Cycle Program") {
        return this.selected_plan.id;
      } else return null;
    },
    selected_variant() {
      return this.product?.variants[0] || false;
    },
  },

  methods: {
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
    optionAvailable(optionIndex, value) {
      let available = true;
      let currentVariant = this.getVariantByOption(optionIndex, value);

      if (currentVariant && currentVariant.id && currentVariant.available) {
        available = true;
      } else {
        available = false;
      }

      return available;
    },
    isSelectedOption(optionIndex, value) {
      return this[`option${optionIndex}`] == value;
    },
    selectOption(optionIndex, value) {
      this[`option${optionIndex}`] = value;
    },
    changeSubscriptionPlan(e) {
      let selectedPlan = this.selling_plans?.find(
        (plan) => plan.id == e.target.value
      );
      this.selected_plan = selectedPlan;
    },
    choosemainvariant(variant, isSubscription) {
      this.option1 = variant.option1;
      this.option2 = variant.option2;
      this.option3 = variant.option3;
      if (isSubscription) {
        this.plan = "recurring";
      } else {
        this.plan = "one-time";
      }
    },
    select_type(value) {
      this.current_selected_value = value;
    },
    closeQuickView: function () {
      this.AnimatedModalToShow = false;
      $("body").removeClass("overflow-hidden");
      setTimeout(() => {
        this.isModalOpen = false;
      }, 300);
    },
    getSKuFlavor(sku) {
      let flavor = "";
      let major_sku = sku.split("-")[0];

      if (major_sku) {
        flavor = FlavorsBYSKU[major_sku];
      }
      return flavor || "";
    },
    getSKuFlavorDescription(sku, title) {
      let flavor = "";
      let major_sku = sku.split("-")[0];

      if (major_sku) {
        flavor = FlavorsDescriptionBYSKU[major_sku];
      }
      return flavor || "";
    },
    getTitle(name, sku) {
      let data = name + "_" + sku;
      console.log("getTitle", data);
      let new_data;
      // if (data && TitleByVariantName[name]) {
      //   data = TitleByVariantName[name];
      // }
      let newTitle = name.split("/");
      // get last element
      newTitle = newTitle[newTitle.length - 1];

      return newTitle;
    },

    money(value) {
      if (!value) return 0;
      return "$" + (value / 100).toFixed(2);
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
          );
          shouldAddWaterBottle =
            shouldAddWaterBottle && shouldAddWaterBottle.checked;

          if (shouldAddWaterBottle) {
            let itemsToUpdate = {
              41833531179166: 1,
            };

            store.bulktUpdateCart(itemsToUpdate, () => {
              window.SuperCart.ShowCartfn();
            });
          } else {
            window.SuperCart.ShowCartfn();
          }
        } catch (ex) {
          console.log(ex);
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
    openQuickView: function () {
      this.isModalOpen = true;
      $("body").addClass("overflow-hidden");
      setTimeout(() => {
        this.AnimatedModalToShow = true;
      }, 100);
      this.getProductByHandle(this.handle);
    },

    async getProductByHandle(handle) {
      let url = `/products/${handle}.js`;
      this.startAnimation = false;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.product = data;
          let subscription_option =
            this.productSettings.subscription_option || "option1";
          this.current_selected_value =
            data?.variants?.[0]?.[subscription_option];
          this.selected_plan =
            data?.selling_plan_groups?.[0]?.selling_plans?.[0];

          setTimeout(() => {
            this.startAnimation = true;
          }, 100);
        });
    },
  },
  watch: {
    currentVariant(newVariant, oldVariant) {
      // switch variant to original when option1 is changed

      this.availableVariant = newVariant.available;

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
          // this.selected_plan = this.selling_plans.find((e) =>
          //   e.name.includes("1 Month")
          // );
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
      try {
        if (image && this.$refs.productImage) {
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
      } catch (ex) {}
    },
  },
  components: {
    "single-option-wrapper": SingleOptionWrapper,
  },
  mounted() {
    // this.getProductByHandle(this.handle);
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
window.isCollectionwithVueLoaded = false;
if (
  document.querySelector(".collection-with-vue") &&
  !window.isCollectionwithVueLoaded
) {
  window.isCollectionwithVueLoaded = true;
  console.log("collection-with-vue loading");
  const productImage = Vue.ref(null);

  document.querySelectorAll(".collection-with-vue").forEach((el) => {
    const productForm = Vue.createApp({
      delimiters: ["${", "}"],
      data() {
        return {};
      },
      methods: {},
      computed: {},
      watch: {},
      components: {
        "quick-shop-now-with-product": SingleProductSectionShopNow,
      },
      created() {},
    }).mount(el);
  });

  jQuery(document).ready(function ($) {
    $(".product-image-view-button").click(function (e) {
      $(this)
        .closest(".single-product-card")
        .find(".open-quick-view")[0]
        .click();
    });
  });
}
 