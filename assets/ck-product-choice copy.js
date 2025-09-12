const AddToCart = {
  template: /*html*/ `
  <div class="choose-flavor"> 
  <div class="flex justify-between max-w-[90%] mb-3 mx-auto w-full">
  <template v-for="(option,index) in uniqueChoiceOptions" >
  <span class="block flex items-center   w-full flex justify-center"
  :class="{'justify-end': index==uniqueChoiceOptions.length-1}"
    @click="selectOption(option)"
  >
  <span 
       class="bg-prolon_secondary  border border-transparent flex h-5 items-center justify-center mr-2 rounded-full w-5" 
     >
      <span class="bg-white h-3 rounded-full" 
            :class="isOptionSelected(option) ? 'h-3 w-3 relative -top-[.8px] -left-[.5px]' : 'w-4 h-4'"  
      > 
      </span> 
      </span> 
   <label class="mb-0 text-label whitespace-nowrap">{{option}}</label>
  </span>  
  </template>
</div>
  
</div>

  <button    :disabled="addingtoCart" type="button" class="bg-buttonColor mb-3 mx-auto w-full max-w-[94%]" @click="addToCart">
  <span class="inline-block w-full px-6 py-3 font-medium text-center rounded bg-prolon_orange text-contrast">
  
    <span    v-if="addingtoCart"  class="flex items-center justify-center gap-2 text-white max-w-prose inherit text-copy">
    <svg
         
            class="inline w-4 h-4 ml-2 text-white animate-spin "
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
          </svg>
          <span class="mr-2 font-bold ">Adding...</span>

    </span>
    <span v-else class="flex items-center justify-center gap-2 text-white max-w-prose inherit text-copy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        width="18"
      >
        <path
          fill-rule="evenodd"
          d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="mr-2 font-bold ">Add to Cart</span>
      <div>
        <span class="mr-2">·</span>
        <span class="font-bold" >{{money(price)}}</span>
      </div>
    </span>
  </span>
</button>

<button  v-if="!SubscriptionOptionActivated "   :disabled="addingtoCart" type="button" class="bg-buttonColor mb-3 subscription w-full max-w-[94%] dev-hidden mx-auto" @click="addToCartSubscription">
  <span class="inline-block w-full px-6 py-3 font-medium text-center rounded bg-black text-contrast">
   
  <span    v-if="addToCartSubscriptionLoading"  class="flex items-center justify-center gap-2 text-white max-w-prose inherit text-copy">
  <svg
       
          class="inline w-4 h-4 ml-2 text-white animate-spin "
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
        </svg>
        <span class="mr-2 font-bold ">Adding...</span>

  </span>
    <span  v-else class="flex items-center justify-center gap-2 text-white max-w-prose inherit text-copy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        width="18"
      >
        <path
          fill-rule="evenodd"
          d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
          clip-rule="evenodd"
        ></path>
      </svg> 
      <span class="mr-2 font-bold whitespace-nowrap">Subscribe & Save</span>
      <div> 
        <span class="mr-2">·</span> 
        <span class="font-bold" v-if="price" >{{money(SubscriptionPrice)}}</span>
      </div>
    </span> 
  </span>
</button> 
   
  `,
  props: ["variant-id", "data-option", "data-option-index","data-flavor-option-index","product-handle",'data-subscription-option-index'],
  data() {

      let all_variants = window.all_variants;
      if(this.productHandle && this.productHandle!=''){
      if(window.extraVariants && window.extraVariants[this.productHandle] && window.extraVariants[this.productHandle].variants){
      // loop though object values 
      all_variants = window.extraVariants[this.productHandle].variants;

      }
      }
    return {
      variants: all_variants,
      option1: null,
      option2: null,
      option3: null,
      addingtoCart: false,
      selling_plan: null,
      selected_plan: {},
      addToCartSubscriptionLoading: false,
      SubscriptionOptionActivated:false,
    }; 
  },
  methods: {
    isOptionSelected(option) {
      return this.option1 == option;
    },  
    selectOption(option) {
      this.option1 = option;
    },
    money(value) {
      if (!value) return 0;
      return "$" + (value / 100).toFixed(2);
    },  
    addToCart(id) {
      // item.loading=true;
      this.addingtoCart = true;
      let selling_plan= null;
      if(this.selectedVariant.title.toLowerCase().includes("subscri")){
        let variant= this.selectedVariant;
        if(variant.selling_plan_allocations && variant.selling_plan_allocations.length>0){
         selling_plan= variant.selling_plan_allocations[0].selling_plan_id; 
        } 
      }   
        store.addToCart(this.selectedVariant.id, 1,selling_plan, () => {
          this.addingtoCart = false;
          window.SuperCart.ShowCartfn();
        });
      setTimeout(() => {
        //      item.loading=false;
      }, 2000);
    },
     addToCartSubscription(id) {
      // item.loading=true;
      this.addToCartSubscriptionLoading = true;   
      let variant= this.selectedSubscriptionVariant;

      let selling_plan= this.selected_plan.id;
      if(!selling_plan){
        if(variant.selling_plan_allocations && variant.selling_plan_allocations.length>0){
          selling_plan= variant.selling_plan_allocations[0].selling_plan_id; 
         } 
      } 
       
      store.addToCart(this.selectedSubscriptionVariant.id, 1,selling_plan, () => {
        this.addToCartSubscriptionLoading = false;  
        this.SubscriptionOptionActivated=false; 
        window.SuperCart.ShowCartfn();
      });   
      // setTimeout(() => {
      //   //      item.loading=false;
      // }, 2000);
    },
    isSubscriptionProduct() {
      return this.selling_plans && this.selling_plans.length > 0;
    },
    activateOptions(){
      this.SubscriptionOptionActivated=true; 
    },
    cancelActivatedOptions(){
      this.SubscriptionOptionActivated=false;  
    },
    isSubscriptionProduct() {
      return this.selling_plans && this.selling_plans.length > 0;
    },

  },
  computed: {
    uniqueChoiceOptions() {
      let index = this.dataFlavorOptionIndex ;
      let uniqueOptions = [];  
      let optionIndex = `option${index}`;
      this.variants.forEach((variant) => {
        if (!uniqueOptions.includes(variant[optionIndex])) {
          uniqueOptions.push(variant[optionIndex]);
        } 
      });  
      return uniqueOptions;
    }, 
    selectedVariant() {
      let filter = {
        option1: this.option1,
        option2: this.option2,

      }
      let variants = this.variants.filter((variant) => {
        return (
          variant.option1 == filter.option1 &&
          variant.option2 == filter.option2
        )
      });
      let subscriptionOptionIndex= this.dataSubscriptionOptionIndex;

      let optionIndex = `option${subscriptionOptionIndex}`;

      let variant =  variants.find((v) => {

        return !v[optionIndex].toLowerCase().includes("subscri");
        
      });
      if(!variant && variants.length>0){
        variant = variants[0];
      } 

      if(variant){

        let price = variant.price;
        let compare_at_price = variant.compare_at_price;

 
        try{
        $(this.$el.parentElement).closest('.single-product-wrapper').find('.main-price').html(`
        ${compare_at_price ? `<s class="text-gray-500 compare-at-price">${this.money(compare_at_price)}</s>` : ''} 
        ${this.money(price)}`);  
        }
        catch(ex){
          console.log(ex);
        }
      } 
      return variant;
    },
    selectedSubscriptionVariant() {
      let subscriptionOptionIndex= this.dataSubscriptionOptionIndex;
      let optionIndex = `option${subscriptionOptionIndex}`;
      let filter = {
        option1: this.option1,
        option2: this.option2,

      }
      let variants = this.variants.filter((variant) => {
        return (
          variant.option1 == filter.option1 &&
          variant.option2 == filter.option2
        )
      });
      if(optionIndex=='option1'){

        return this.variants.find((variant) => {

          return variant[optionIndex].toLowerCase().includes("subscri");
          
        });
      }
      else{
      return variants.find((variant) => {

        return variant[optionIndex].toLowerCase().includes("subscri");
        
      });
    }
    },
    price() {
      if (this.selectedVariant) {
        return this.selectedVariant.price;
      }
    },
     SubscriptionPrice() {
      if (this.selectedSubscriptionVariant) {
        return this.selectedSubscriptionVariant.price;
      }
    },  
     selling_plans() {
      let sellingPlans, ReverseSellingPlans;

      if ( this.product && 
        this.product.selling_plan_groups &&
        this.product.selling_plan_groups.length > 0 &&
        this.product.selling_plan_groups[0].selling_plans
      ) { 
        sellingPlans = this.product.selling_plan_groups[0].selling_plans;
        ReverseSellingPlans = sellingPlans.reverse();
        if (this.option1 == "ProLon 5-Day") {
          return ReverseSellingPlans;
        } else {
          return sellingPlans;
        }
      } else {
        sellingPlans = [];
      }
    },
    selling_plan() {
      if (this.plan == "recurring" && this.selected_plan)
        return this.selected_plan.id;
      else return null;
    },


  },
  mounted() {
    if(this.productHandle && this.productHandle.length>0){
      axios.get("/products/"+this.productHandle+".js").then( (productData)=> {
        
       this.product = productData.data;  
       this.variants = productData.data.variants;
       let selected_plan = {};
       if (
         this.product &&
     this.product.selling_plan_groups.length > 0 &&
     this.product.selling_plan_groups[0].selling_plans[0]
       ) {
         selected_plan =
         this.product.selling_plan_groups[0].selling_plans.find((e) =>
             e.name.includes("1 Month")
           );
         if (!selected_plan) { 
           selected_plan = 
           this.product.selling_plan_groups[0].selling_plans[0];
         }
       }
       this.selected_plan = selected_plan; 
  
 
      }) 
    } 
    this.variants.forEach((variant) => {
      if (variant.id == this.variantId) {
        this.option1 = variant.option1;
        this.option2 = variant.option2;
      }
    });
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

if (document.querySelector("#product-choice")) {
  const productImage = Vue.ref(null);

  const productForm = Vue.createApp({
    delimiters: ["${", "}"],

    components: {
      AddToCart,
    },
    created() {},
  }).mount("#product-choice");
}
