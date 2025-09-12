window.twSingleAccordion = {
    template: /*html*/ `
    <div class="w-full single-accordion"><div class="pb-5 border-b border-gray-300"><div class="flex flex-wrap -m-1.5"><div class="w-auto p-1.5"><svg class="relative top-1" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="flex-1 p-1.5"><h3 class="font-semibold leading-normal cursor-pointer"> Why to Prolon your Life?! </h3><p class="mb-5 text-gray-600 font-medium leading-relaxed hidden"> ProLon is a 5 days only nutrition program that was designed and tested by 14 global universities and L-Nutra to nourish you with premium quality plant based food, while inducing the cellular, metabolic, and emotional benefits of Prolonged fasting. It is a scientific breakthrough that took 2 decades and $48MM in Research and awarded &gt; 40 patents by the US and global governments, including the only patent in history on a nutrition program to enhance <a href="https://www.businesswire.com/news/home/20180731005885/en/Fasting-Mimicking-Diet%C2%AE-Is-Awarded-First-Ever-Patent-for-Optimizing-Human-Healthspan"> Longevity and Healthspan </a><br> Prolonged fasting (&gt;2-3 days) has unique benefits such as autophagy or cellular rejuvenation which was awarded the 2016 Nobel prize in Medicine. Indeed, the first 2-3 days of fasting, the body burns fat to compensate this first stage of calorie deficit but thereafter fasting becomes a positive stress on each of your body’s cells which then goes through rejuvenation and autophagy, a key miracle of our human biology that is critical healthy aging and Longevity. You are as healthy (body mind and soul) and vibrant as your cells are. ProLon is the only nutrition that has been developed, tested and awarded patents to enhance your longevity lifestyle! </p></div><div class="w-auto p-1.5"><a><svg class="relative top-1 hidden" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L7.5 6.43934L10.7197 3.21967C11.0126 2.92678 11.4874 2.92678 11.7803 3.21967C12.0732 3.51256 12.0732 3.98744 11.7803 4.28033L8.56066 7.5L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L7.5 8.56066L4.28033 11.7803C3.98744 12.0732 3.51256 12.0732 3.21967 11.7803C2.92678 11.4874 2.92678 11.0126 3.21967 10.7197L6.43934 7.5L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z" fill="black"></path></svg><svg class="block relative top-1" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V6.75H12C12.4142 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 12.4142 8.25 12 8.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75L6.75 6.75V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z" fill="black"></path></svg></a></div></div></div></div>
    `,
    props: ["variant-id", "data-option", "data-option-index","data-flavor-option-index"],
    data() {
      return {
        variants: window.all_variants,
        option1: null,
        option2: null,
        addingtoCart: false,
        selling_plan: null,
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
        return "€" + (value / 100).toFixed(2);
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
              if (window.current_item) {
                _learnq.push(["track", "Added to Cart", window.current_item]);
              }
            window.SuperCart.ShowCartfn();
          });
        setTimeout(() => {
          //      item.loading=false;
        }, 2000);
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
          return (
            variant.option1 == this.option1 &&
            variant.option2 == this.option2
          );
        });
      },
      price() {
        if (this.selectedVariant) {
          return this.selectedVariant.price;
        }
      },  
      
  
    },
    mounted() {
      this.variants.forEach((variant) => {
        if (variant.id == this.variantId) {
          this.option1 = variant.option1;
          this.option2 = variant.option2;
        }
      });
    },
  };