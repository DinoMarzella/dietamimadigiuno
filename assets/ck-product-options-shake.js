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
      if (
        window.currentProduct &&
        window.currentProduct.selling_plan_groups.length > 0 &&
        window.currentProduct.selling_plan_groups[0].selling_plans[0]
      ) {
        selected_plan =
          window.currentProduct.selling_plan_groups[0].selling_plans.find((e) =>
            e.name.includes("1 Month")
          );
        if (!selected_plan) {
          selected_plan =
            window.currentProduct.selling_plan_groups[0].selling_plans[0];
        }
      }
      let subscriptionPlan;

      let 
        option1 = window.selectedVariant && window.selectedVariant.option1 && window.selectedVariant.option1.toLowerCase() ,
        option2 = window.selectedVariant && window.selectedVariant.option2 && window.selectedVariant.option2.toLowerCase() ,
        option3 = window.selectedVariant && window.selectedVariant.option3 && window.selectedVariant.option3.toLowerCase(); 
      if (
        (option1 && option1.includes("subscri")) ||
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
      closeBenefits(){
        this.showBenefitsModal = false

      },
      showBenefits(e){

        if(e && e.preventDefault){
          e.preventDefault();

        }

        this.showBenefitsModal=true

      },
      addToCart(id) {
        // item.loading=true;
        this.addingtoCart = true;
        store.addToCart(this.currentVariant.id, 1, this.selling_plan, () => {
          this.addingtoCart = false;
          try{
              if (window.current_item) {
                _learnq.push(["track", "Added to Cart", window.current_item]);
              }
          let shouldAddWaterBottle =document.querySelector('.water-bottle-add-to-cart').checked

          if(shouldAddWaterBottle){
            let itemsToUpdate = {
              39896756092974:1
            };
     
            store.bulktUpdateCart(itemsToUpdate, () => {
              window.SuperCart.ShowCartfn();
            }); 

          }
        }
          catch(ex){
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

          if(value.toLowerCase().includes("soup flavor")){

            if(this.option1.toLowerCase().includes("prolon four 1-day reset kits")){
              return false;
            }
            else {
              return true;
            }
          } 
          else{
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
      isShowBenefits(){

        return this.showBenefitsModal
 
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
          return (
            
            variant.option2.toLowerCase().includes("one time")
          );
        });
      },
      subscriptionVariant() {
        return this.product.variants.find((variant) => {
          
          return (
            variant.option2.toLowerCase().includes("subscr")
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
        if (this.subscriptionVariant && this.subscriptionVariant.option2 ) {

          let quantityOption = this.subscriptionVariant.option2.toLowerCase();
          if(quantityOption.includes("x")){
            let quantity = quantityOption.split("x")[0];
            return this.subscriptionVariant.price/quantity;

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
            ReverseSellingPlans = this.product.selling_plan_groups[0].selling_plans;
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
      moneySave(){ 
          
        let compare_at_price =  this.oneTimePrice;
        let price = this.recurringPrice;;
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
        if(amount > 0)
        return this.money(amount);
        else return '';
      },
      selling_plan() {
        if (this.plan == "recurring" && this.selected_plan )
          return this.selected_plan.id;
        if(this.option1=='3 Cycle Program' ){
          return this.selected_plan.id
        } 

        else return null;
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
        } 
        else{   
          if(this.option2 == "Variety")
         { this.option2 = "Gen3";}
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
              e.name.includes("3 Month")
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
    },
    created() {},
  }).mount("#ck-product-form");
}
