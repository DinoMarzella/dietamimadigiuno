

if (document.querySelector(".custom-section-popup")) {
  const customSection = Vue.createApp({
    template: /*html*/ `
<div>
  
    <!-- Image Popup -->
    <div v-if="showImage" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">  
      <div class="bg-white p-2 rounded zoom-in w-[600px] max-w-[80%] relative">
        <img :src="imageSrc" alt="Popup Image" class="w-800 h-800 rounded shadow-md">
        <button @click="showImage=false" class="absolute top-2 right-2 w-[40px] h-[40px] bg-gray-500 text-white p-2 rounded-full hover:bg-prolon">X</button>
      </div> 
    </div>
  </div>
    `,
    data() {
      return {
        showImage: false, 
        imageSrc:
          "https://cdn.shopify.com/s/files/1/0508/0625/9870/files/ProLon_Pink_-_Explainer_800x.jpg?v=1696532019", // You can change this to your image path.
      };
    },
    methods: {},
    computed: {},
    watch: {},
    components: {},
    mounted() {

        window.showCancerPopup = () => {
            this.showImage = true;
        } 

    },

    created() {},
  }).mount(".custom-section-popup");
} 
