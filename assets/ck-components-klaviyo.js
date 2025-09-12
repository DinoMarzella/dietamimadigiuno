const KlaviyoPopupNow = {
  template: /*html*/ `
  
  <a class="text-white btn bg-prolon  open-quick-view" aria-label="{{button_name}}"
  @click="openQuickView" >
   <span class="flex items-center justify-center gap-2 mx-auto text-white max-w-prose inherit text-copy">
   
   <span class="mr-2 font-bold ">{{button_name}}</span>
   <span class="font-bold"></span>
   </div> 
  </span> 
  </a> 
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

      
      <div 
        
      class="fixed bottom-0 md:relative transform  text-left  transition-all sm:my-8 sm:w-full sm:max-w-[95%] 2xl:max-w-[600px] w-full  sm:align-middle sm:rounded-lg sm:shadow-xl" 
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
        <div class="pl-wrapper pl-wrapper-product-section bg-white p-2 overflow-x-hidden overflow-y-scroll " v-if="formReady && submittingSuccess">
            <div class="py-[30px] relative text-center min-h-[350px]" ><h1 class="text-[30px] text-prolon">
            Thankyou for signing up!
            </h1>
            <p class="py-[20px]">
            Check your email for a confirmation message.
            </p>  

        </div>
        </div>
      <div class="pl-wrapper pl-wrapper-product-section bg-white p-2 overflow-x-hidden overflow-y-scroll " v-if="formReady && !submittingSuccess">

      <div class="py-[30px] relative text-center">
      <h1 class="text-[27px] text-prolon"
      v-html="popup_title" 
      >
      </h1> 

      <p class="py-[20px]"
      v-html="popup_description"
      >
      </p>

<form class="max-w-[300px] mx-auto" data-form-type="other"
  @submit.prevent="sendToKlaviyo()"
>
  <div class="mb-6">
    <label for="FirstName" class="block font-medium mb-2 text-gray-900 text-sm text-left">First Name</label>
    <input type="text" id="FirstName" 
    v-model="first_name"
    class="bg-gray-50 block border border-gray-300 p-2.5 text-gray-900 text-sm w-full"  required
    >
  </div>
  <div class="mb-6">
    <label for="LastName" class="block font-medium mb-2 text-gray-900 text-sm text-left">Last Name</label>  
    <input type="text" id="LastName"
    v-model="last_name"
    class="bg-gray-50 block border border-gray-300 p-2.5 text-gray-900 text-sm w-full"  required
    >
  </div> 
  <div class="mb-6">
    <label for="Email" class="block font-medium mb-2 text-gray-900 text-sm text-left">Email</label>
    <input type="email"
    v-model="email"
    id="Email" class="bg-gray-50 block border border-gray-300 p-2.5 text-gray-900 text-sm w-full"  required
    >
  </div>




  <button type="submit" class="text-white btn bg-prolon" >
  {{isSubmitting ? 'Submitting...' : 'Submit'}}
  </button> 
</form>
</div>

  
      </div> 
 

      <div class="flex-1 bg-white p-2" v-if="!formReady">
    <div class="relative"><div class="mx-auto pt-0  lg:max-w-[800px] md:px-[0px]"><div class="lg:gap-[30px] md:grid"><div class="animate-pulse lg:col-span-5 lg:max-h-[850px] lg:mt-0 lg:pl-0 mh900:top-[100px] mt-4 mx-auto product-details px-0 w-full"><div class="flex flex-col justify-center text-center"><h1 data-product-id="{{product?.id}}" class="font-bold mt-[10px] sm:text-[24px] text-[18px] text-gray-900 text-left w-full"><div class="bg-gray-200 h-[40px] mb-4 mx-auto w-48 w-[300px]"></div></h1><span class="bg-gray-200 block font-semibold h-[40px] mb-4 md:text-[16px] mt-2 mx-auto text-[14px] text-gray-900 text-left w-48 w-[100px] w-full"></span><div class="mt-4 product-description text-center w-full"><div class="flex-1"><div class="bg-gray-200 h-2.5 mb-4 mx-auto rounded-full w-48"></div><div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full "></div><div class="flex items-center mt-4 space-x-3"><div class="mx-auto"><div class="bg-gray-200 h-2.5 mb-2 mx-auto rounded-full w-32"></div><div class="w-48 h-2 bg-gray-200 rounded-full "></div></div></div><span class="sr-only">Loading...</span></div></div></div><div class="button-holder-wrapper"><div class="bg-gray-200 h-2.5 h-[120px] mb-4 mt-5 w-full"></div></div><button type="button" class="bg-[#73984a] w-full"><div class="h-2.5 h-[20px] mb-4 mt-5 w-full"></div></button></div></div></div></div>
</div>
      </div>
       
      </div>
    </div>
  </div>
</div>

  </Teleport>

  `,
  props: [
    "handle",
    "button_name",
    "settings",
    "doctor_name",
    "data_range",
    "list_id",
    "popup_title",
    "popup_description",
  ],
  data() {
    return {
      isModalOpen: false,
      AnimatedModalToShow: false,
      startAnimation: false,
      formReady: false,
      isSubmitting: false,
      first_name: "",
      last_name: "",
      email: "",
      submittingSuccess: false,
    };
  },
  computed: {},

  methods: {
    closeQuickView: function () {
      this.AnimatedModalToShow = false;
      $("body").removeClass("overflow-hidden");
      setTimeout(() => {
        this.isModalOpen = false;
      }, 300);
    },
    sendToKlaviyo() {
      let { email, first_name, last_name } = this;
      this.isSubmitting = true;

      var myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("content-type", "application/json");
      let profile = {
        email: email,
        $email: email,
        $first_name: first_name,
        $last_name: last_name,
        $source: this.doctor_name + " - Form",
        $consent: "klaviyo",
        $consent_method: "Klaviyo Form",
        $consent_version: "v1.0",
        data_range: this.data_range,
        doctor_name: this.doctor_name,
      };

      var raw = JSON.stringify({
        profiles: [profile],
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        cors: "no-cors",
      };
      let listId = this.list_id;
      fetch(
        "https://prolon-pro.herokuapp.com/stores/submit-to-klaviyo?list_id=" +
          listId,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          this.isSubmitting = false;
          this.submittingSuccess = true;
          console.log(result);
        })
        .catch((error) => {
          this.isSubmitting = false;
          this.submittingSuccess = false;
          alert("Something went wrong. Please try again later.");
          console.log("error", error);
        });
    },
    openQuickView: function () {
      this.isModalOpen = true;
      $("body").addClass("overflow-hidden");
      setTimeout(() => {
        this.AnimatedModalToShow = true;
      }, 100);
      setTimeout(() => {
        this.formReady = true;
      }, 500);
      // this.getProductByHandle(this.handle);
    },
  },
  watch: {},
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

if (document.querySelector(".klaviyo-form-wrapper")) {
  const productImage = Vue.ref(null);

  let klaviyoSections = document.querySelectorAll(".klaviyo-form-wrapper");

  klaviyoSections.forEach((klaviyoSection) => {
    const productForm = Vue.createApp({
      delimiters: ["${", "}"],
      data() {
        return {};
      },       
      methods: {
  

  


      },
      computed: {},
      watch: {},
      components: {
        "klaviyo-popup-now": KlaviyoPopupNow,
      },
      created() {},
    }).mount(klaviyoSection);
  });
}

jQuery(document).ready(function ($) {
  $(".product-image-view-button").click(function (e) {
    $(this).closest(".single-product-card").find(".open-quick-view")[0].click();
  });
});
