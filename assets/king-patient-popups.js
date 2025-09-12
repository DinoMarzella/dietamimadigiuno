// Put your application javascript here
function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}
window.API_URL = "https://prolon-pro.herokuapp.com/";
window.local_host = localStorage.getItem("doLocal");
if (local_host == 1) {
  window.API_URL = "http://localhost:1337/";
}

if (document.querySelector(".patient-popup-wrapper")) {
  const patientPopup = Vue.createApp({
    template: /*html*/ `
<teleport to="body">
       <!-- Image Popup -->
    <div class="fixed z-50 backdrop-blur-[10px] top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
    v-if="formState!='completed'"
    >  
      <div class="bg-white p-2 rounded zoom-in w-[600px] max-w-[80%] relative">
        
          <main
      class="w-full  flex flex-col items-center justify-center px-4"
    >
      <div class="max-w-md w-full text-gray-600 space-y-5">
        <div class="text-center  pt-8">
          <img src="https://prolonlife.com/cdn/shop/files/ProLon_Life_Logo_-_HEALTH_LONGEVITY_5e73dd11-0801-4a90-8590-c457cf9fb996_200x.png?v=1694423885" width="150" class="mx-auto" />
          <div class="mt-5">
            <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">
             Welcome to 
              </h3>
            
            <p class="text-xl font-bold text-gray-800 ">{{provider_name}} Prolon Registration Page</p>
     
            <p class=" font-bold mt-2 text-md text-gray-700" >
            Vibrance begins on the inside, we'll get you there.
            </p> 
            <p class=" mt-2"  v-if="formState=='initial'">
            Please fill out the form below for deep product discounts.
            </p>

          </div>
        </div>
        <form 
        v-if="formState=='initial'"
        @submit.prevent="submitForm"
        
        class=" gap-2 !grid grid-cols-2 pb-8">
         <div>
            <label class="font-medium pb-0 mb-0"> First Name </label>
            <input
              type="text"
              required
              name="first_name"
              v-model="formData.first_name"
              class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-prolon shadow-sm "
            />
          </div>
         
           <div>
            <label class="font-medium pb-0 mb-0"> Last Name </label>
            <input
              type="text"
              required
              name="last_name"    
              v-model="formData.last_name"
              class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-prolon shadow-sm "
            />
          </div>
        
          <div class="col-span-2">
            <label class="font-medium pb-0 mb-0"> Email </label>
            <input
              type="email"
              required
              name="email"
              v-model="formData.email"
              class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-prolon shadow-sm "
            />
          </div>
        
        
          <button
            class="w-full px-4 py-2 text-white bg-prolon hover:bg-prolon_dark_primary active:bg-prolon  duration-150 col-span-2 mt-4 font-bold"
          >
         Shop Now
          </button>
        </form>
     
        <form  
        v-if="formState=='validating'"
        class="flex justify-center flex-col items-center pb-[100px]">
        <p class="font-bold mb-[20px] mt-2 text-center text-gray-700 text-md" >
         We have sent you a verification code to your email. Please enter the code below.
        </p>  
        <label class="text-gray-600">
        Verification code
        </label> 
        <div ref="fieldsRef" class="mt-2 flex items-center gap-x-2">
        <input
            type="text"
            data-index="0"
            placeholder="0"
            v-model="pincode.code1"
            class="w-12 h-12 rounded-lg border focus:border-prolon outline-none text-center text-2xl focus:placeholder-white"
            @input="handleChange('code1', $event)"
            @keyup="inputFocus"
        />
        <input 
            type="text"
            data-index="1"
            placeholder="0"
            v-model="pincode.code2"
            class="w-12 h-12 rounded-lg border focus:border-prolon outline-none text-center text-2xl focus:placeholder-white"
            @input="handleChange('code2', $event)"
            @keyup="inputFocus"
        />
        <input
            type="text"
            data-index="2"
            placeholder="0"
            v-model="pincode.code3"
            class="w-12 h-12 rounded-lg border focus:border-prolon outline-none text-center text-2xl focus:placeholder-white"
            @input="handleChange('code3', $event)"
            @keyup="inputFocus"
        />
        <input
            type="text"
            data-index="3"
            placeholder="0"

            v-model="pincode.code4"
            class="w-12 h-12 rounded-lg border focus:border-prolon outline-none text-center text-2xl focus:placeholder-white"
            @input="handleChange('code4', $event)"
            @keyup="inputFocus"
        />
        </div>

        <p class="font-bold text-red-500">
        {{error.message}}
        </p>
        <button 
        class="mt-4 text-prolon hover:text-prolon_dark_primary"
        @click="resendCode"
        >
        Resend code
        </button>
        </form>
        <form 
        v-if="formState=='validated'"
        class="flex justify-center flex-col items-center pb-[100px]">
        <p class=" mb-[20px] mt-2 text-center text-gray-700 text-md" >
         Congratulations!, We have verified your email. You are now registered with {{provider_name}}, you can now proceed to buy ProLon with your provider discount. 
        </p> 
        <div class="col-span-2">
           
             <button
             @click="formState='completed'"
            class="w-full px-4 py-2 text-white bg-prolon hover:bg-prolon_dark_primary active:bg-prolon  duration-150 col-span-2 mt-4 font-bold"
          >
         Shop Now
          </button>
        </div>
        </form> 
         <form 
        v-if="formState=='already_verified'"
        class="flex justify-center flex-col items-center pb-[100px]">
        <p class=" mb-[20px] mt-2 text-center text-gray-700 text-md" >
        You are already registered with {{provider_name}}, you can now proceed to buy ProLon with your provider discount. 
        </p>  
        <div class="col-span-2">
           
             <button
             @click="formState='completed'"
            class="w-full px-4 py-2 text-white bg-prolon hover:bg-prolon_dark_primary active:bg-prolon  duration-150 col-span-2 mt-4 font-bold"
                >
            Shop Now
          </button>
        </div>
        </form> 
        <div class="w-full text-center">
       
        </div>
      </div> 
    </main> 
    <div v-if="loading" class="absolute backdrop-blur-[3px] bg-[#00000080] flex h-full items-center justify-center left-0 top-0 w-full">
    <div role="status">
    <svg aria-hidden="true" class="animate-spin fill-prolon h-8 text-gray-200 w-8" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
    </svg>
    <span class="sr-only">Loading...</span>
</div></div>
        
      </div> 
    </div>
  </teleport>
    `,
    data() {
      let hcp = getParam("hcp");

      return {
        showImage: false,
        formState: "initial",
        loading: false,
        provider: {},
        formData: {
          first_name: "",
          last_name: "",
          email: "",
          hcp_code: hcp,
        },
        pincode: {
          code1: "",
          code2: "",
          code3: "",
          code4: "",
        },
        error: {
          message: "",
        },
      };
    },
    methods: {
      async getProviderByHCP() {
        this.loading = true;
        let hcp = this.formData.hcp_code;
        let json = await fetch(
          `${API_URL}customers/get-provider-by-hcp/?hcp_code=${hcp}`
        )
          .then((response) => response.json())
          .catch((error) => console.log("error", error));
        this.provider = json;
        setTimeout(() => {
          this.loading = false;
        }, 2);
      },
      resendCode() {
        this.loading = true;
        this.submitForm();

      },
      async generateVerficationCode(data) {
        // this.loading = true;
        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        let json = await fetch(
          `${API_URL}patients/generate-patient-pincode?shop=${Shopify.shop}`,
          requestOptions 
        )
          .then((response) => response.json())
          .catch((error) => console.log("error", error));

        return json;
      },
      async validatePinCode(data) {
        this.loading = true;
        this.error = {
          message: "",
        };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(data);
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        }; 
        let json = await fetch(
          `${API_URL}patients/verify-patient-pincode?shop=${Shopify.shop}`,
          requestOptions
        )
          .then((response) => response.json())
          .catch((error) => console.log("error", error));
        setTimeout(() => {
            this.loading = false;
        }, 2);
          

        if (json.status == "error") {
          this.error = json;
          return;
        }
        if (json.status == "success") {
          setTimeout(() => {
            this.formState = "validated";
            this.loading = false;
          }, 0);
        }

        return json;
      },
      async submitForm(e) {
        // const form = e.target;
        let data = this.formData;
        this.loading = true;
        let d = await this.generateVerficationCode(data);
          setTimeout(() => {
            this.loading = false;
          }, 20);
         
        if (d.status == "success") {
          this.formState = "validating";
        } else if (d.status == "verified") {
          this.formState = "already_verified";
        } else {
          alert(d.message);
        }
      }, 
      inputFocus(e) {
        const elements = this.$refs.fieldsRef.children;
        const dataIndex = +e.target.getAttribute("data-index");
        if (e.key === "Delete" || e.key === "Backspace") {
          const next = dataIndex - 1;
          if (next > -1) {
            elements[next].focus();
          }
        } else {
          const next = dataIndex + 1;
          if (
            next < elements.length &&
            e.target.value != " " &&
            e.target.value != "" &&
            e.key.length == 1
          ) {
            elements[next].focus();
          }
        }
      },
      handleChange(codeNumber, e) {
        const value = e.target.value;
        if (value.length == 4) {
          this.pincode = {
            code1: value[0],
            code2: value[1],
            code3: value[2],
            code4: value[3],
          };
        } else {
          this.pincode[codeNumber] = value.slice(value.length - 1);
        }
      },
    },
    computed: {
      provider_name() {
        if (this.provider.first_name && this.provider.last_name)
          return (
            "Dr " +
            this.provider.first_name +
            " " +
            this.provider.last_name +
            "'s"
          );
        else if (this.provider.last_name) return this.provider.last_name;
        else return "";
      },
    },
    watch: {
      pincode: {
        handler: function (val) {
          if (
            val.code1 != "" &&
            val.code2 != "" &&
            val.code3 != "" &&
            val.code4 != ""
          ) {
            this.validatePinCode({
              pin_code: `${val.code1}${val.code2}${val.code3}${val.code4}`,
              email: this.formData.email,
              hcp_code: this.formData.hcp_code,
              first_name: this.formData.first_name,
              last_name: this.formData.last_name,
            });
          }
        },
        deep: true,
      },
    },
    components: {},
    mounted() {
      this.getProviderByHCP();
    },

    created() {},
  }).mount(".patient-popup-wrapper");
}
