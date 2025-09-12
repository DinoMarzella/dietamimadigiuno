const AddToCartSingle = {
  template: /*html*/ `
  
  
  <button   v-if="!SubscriptionOptionActivated" :disabled="addingtoCart" type="button" class="bg-buttonColor  w-full max-w-[94%]" @click="addToCart">
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
        <span class="font-bold product-price" v-if="price" >{{money(price)}}</span>
      </div>
    </span>
  </span>
</button>     
<div v-if= "SubscriptionOptionActivated" class="w-full max-w-[94%]">

  
<div  class="flex mt-2 -space-y-px rounded-md w-full " role="none">
<template v-for="(selling_plan,index) in selling_plans">
                      <div  
                        class="relative flex-1 justify-center inline-flex items-center px-2 py-2 text-sm font-medium leading-none text-center text-gray-700 bg-white border outline-none md:text-center md:px-2 hover:border-prolon_secondary hover:ring-1 hover:ring-prolon_secondary hover:z-10"
                        @click="selected_plan = selling_plan"
                        :class="
                          {
                            'border-prolon_secondary !bg-prolon_secondary ring-1 ring-prolon_secondary z-10': selected_plan && selling_plan.id === selected_plan.id, 
                            'border-gray-300': selected_plan && selling_plan.id !== selected_plan.id,
                            'rounded-l-md' : index === 0,
                            'rounded-r-md' : index === selling_plans.length - 1
                          }
                        "
                      >
                        <span class="flex text-[10px] xl:text-sm "
                          :class="
                          {
                            'text-white': selected_plan && selling_plan.id === selected_plan.id
                          }" 

                          ><span> {{selling_plan && selling_plan.name.replace('Deliver every','')}}</span>
                        </span>
                      </div>  
                    </template> 
                    </div> 
   
<label class="!text-sm !font-normal text-gray-700 mt-1 mb-0" role="none">Frequency: {{selected_plan && selected_plan.name}}</label>
                    </div> 
<button  v-if="!SubscriptionOptionActivated &&subscriptionVariantId &&subscriptionVariantId!=''"   :disabled="addingtoCart" type="button" class="bg-buttonColor mb-3 subscription w-full max-w-[94%]" @click="activateOptions">
  <span class="inline-block w-full px-6 py-3 font-medium text-center rounded border-prolon_secondary border-[3px] bg-white text-black">
      
     
    <span  class="flex items-center justify-center gap-2 text-prolon_secondary max-w-prose inherit text-copy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        width="18"
        class="min-w-[20px]"
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
<button   v-if="SubscriptionOptionActivated" :disabled="addingtoCart" type="button" class="bg-buttonColor  w-full max-w-[94%]" @click="addToCartSubscription">
  <span class="inline-block w-full px-6 py-3 font-medium text-center rounded border-prolon_secondary border-[3px] bg-white" >  
     
    <span v-if="addingtoCart"  class="flex items-center justify-center gap-2 text-prolon_secondary max-w-prose inherit text-copy">
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
    <span v-else class="flex items-center justify-center gap-2 text-prolon_secondary max-w-prose inherit text-copy">
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
      <span class="mr-2 font-bold ">Select</span>
      <div>
        <span class="mr-2">·</span> 
        <span class="font-bold" v-if="price" >{{money(SubscriptionPrice)}}</span>
      </div>
    </span>
  </span>
</button> 
  
<button  v-if="SubscriptionOptionActivated &&subscriptionVariantId &&subscriptionVariantId!=''"   :disabled="addingtoCart" type="button" class="mb-3 subscription w-full max-w-[94%]" @click="cancelActivatedOptions()"  > 
  <span class="inline-block w-full px-6 py-3 font-bold text-center rounded bg-gray-200  text-black"> 
    
    
    Cancel
  </span>
</button> 
  `, 
  props: ["variant-id", "data-option", "data-option-index","data-flavor-option-index","handle",'subscription-variant-id'],
  data() { 

   return {
      product: null,
      variants: [],
      option1: null,
      option2: null,
      addingtoCart: false,
      selling_plan: null,
      selected_plan: {},
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
          window.SuperCart.ShowCartfn()
        });
      setTimeout(() => {
        //      item.loading=false;
      }, 2000);
    },
    addToCartSubscription(id) {
      // item.loading=true;
      this.addingtoCart = true;   
      let selling_plan= this.selected_plan.id;
      store.addToCart(this.selectedSubscriptionVariant.id, 1,selling_plan, () => {
        this.addingtoCart = false;  
          if (window.current_item) {
            _learnq.push(["track", "Added to Cart", window.current_item]);
          }
        this.SubscriptionOptionActivated=false; 
        window.SuperCart.ShowCartfn();
      });   
      // setTimeout(() => {
      //   //      item.loading=false;
      // }, 2000);
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
      return this.variants.find((variant) => {
       return variant.id == this.variantId;
      });
    }, 
    selectedSubscriptionVariant() {
      return this.variants.find((variant) => {
        return variant.id == this.subscriptionVariantId;
       
      });
    },  
    price() {
      if (this.selectedVariant) {
        return this.selectedVariant.price;
      }
    },  
    SubscriptionPrice() {
      if (this.selectedSubscriptionVariant) {

        let price = this.selectedSubscriptionVariant.price;
        if(this.selectedSubscriptionVariant.selling_plan_allocations && this.selectedSubscriptionVariant.selling_plan_allocations.length>0){
          price = this.selectedSubscriptionVariant.selling_plan_allocations[0].price;

        }
        return price;
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
     if(this.handle && this.handle.length>0){
     axios.get("/products/"+this.handle+".js").then( (productData)=> {
       
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
            e.name.includes("3 Month")
          );
        if (!selected_plan) { 
          selected_plan = 
          this.product.selling_plan_groups[0].selling_plans[0];
        }
      }
      this.selected_plan = selected_plan; 
 

     }) 
     } 
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

if (document.querySelector(".product-grid-section")) {

  const productImage = Vue.ref(null);
  const productGrids = document.querySelectorAll('.product-grid-section');
  productGrids.forEach((productGrid) => {
 
   
 
  const productForm = Vue.createApp({
    delimiters: ["${", "}"],

    components: {
      AddToCartSingle,
    },
    created() {},
  }).mount(productGrid);

});


}
 