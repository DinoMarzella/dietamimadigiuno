document.addEventListener("DOMContentLoaded", () => {
  const inputRadio = Array.from(
    document.querySelectorAll(".product__radio-option")
  );
  const flavor_option = Array.from(document.querySelectorAll(".flavor_option"));
  const input_flavor = Array.from(document.querySelectorAll(".input_flavor"));
  const select_flavor_item = Array.from(
    document.querySelectorAll(".product__select_item")
  );

  function switchDisableFrequency(productId) {
    let orderType = document.querySelector(
      `[name=orderType-${productId}]:checked`
    );
    let selectSellingPlan = document.querySelector(`#sellingPlan-${productId}`);

    if (orderType.value.includes("Subscribe")) {
      selectSellingPlan.disabled = false;
    } else {
      selectSellingPlan.disabled = true;
    }
  }

  function toggleButtonATC(productId) {
    let btn = document.querySelector(`#buttonAdd-${productId}`);
    let selectAllVariants = document.querySelector(`#allVariants-${productId}`);
    let variantAvailable =
      selectAllVariants.selectedOptions[0].getAttribute("data-available");

    if (variantAvailable == "true") {
      btn.innerHTML = btn.getAttribute("data-text-available");
      btn.classList.remove("product__button--disabled");
      btn.disabled = false;
    } else {
      btn.disabled = true;
      btn.classList.add("product__button--disabled");
      btn.innerHTML = btn.getAttribute("data-text-soldout");
    }
  }

  function switchVariant(productId) {
    const inputRadioChecked = document.querySelector(
      `[name=orderType-${productId}]:checked`
    );
    const flavorOptionSelected = document.querySelector(
      `#flavorOption-${productId}`
    );
    const selectAllVariants = document.querySelector(
      `#allVariants-${productId}`
    );

    const options = Array.from(selectAllVariants.options);
    const optionName = `${flavorOptionSelected.value} / ${inputRadioChecked.value}`;

    let pee = options.find((data) => data.label == optionName);
    if (pee) pee.selected = true;

    toggleButtonATC(productId);
    switchPrice(productId, pee, inputRadioChecked.value);
  }

  function switchPrice(productId, variantSelected, frequency) {
    const productPriceDiscount = document.querySelector(
      `#productPriceDiscount-${productId}`
    );
    const productPriceOriginal = document.querySelector(
      `#productPriceOriginal-${productId}`
    );

    if (frequency.includes("Subscribe")) {
      if (variantSelected.getAttribute("data-price-compare") == "") {
        productPriceOriginal.innerHTML = variantSelected.getAttribute(
          "data-price-original"
        );
      } else {
        if (productPriceDiscount) {
          productPriceDiscount.innerHTML =
            variantSelected.getAttribute("data-price-compare");
        }
        productPriceOriginal.innerHTML = variantSelected.getAttribute(
          "data-price-original"
        );
      }
    } else {
      if(productPriceDiscount) {
        productPriceDiscount.innerHTML = "";
      }
      productPriceOriginal.innerHTML =
        variantSelected.getAttribute("data-price-no-sub");
    }
  }

  function changeFlavor(productId) {
    let flavor = document.querySelector(`[name=flavor-${productId}]:checked`);
    let selectFlavor = document.getElementById(`flavorOption-${productId}`);
    selectFlavor.value = flavor.value;
  }

  function toggleSelect(productId) {
    const selectContainer = document.getElementById(`select-${productId}`);
    const selectedFlavor = document.getElementById(
      `selected_flavor-${productId}`
    );
    const selectVariants = document.getElementById(
      `select_variants-${productId}`
    );

    selectedFlavor.classList.toggle("d-none");
    selectVariants.classList.toggle("d-none");
    selectContainer.classList.toggle("product__select--absolute");
  }

  function changeSelectedFlavor(productId) {
    let flavor = document.querySelector(`[name=flavor-${productId}]:checked`);
    const selectedFlavor = document.getElementById(
      `flavor_selected-${productId}`
    );
    selectedFlavor.innerHTML =
      flavor.getAttribute("data-title-metafield") || flavor.value;
  }

  function loadEvents() {
    inputRadio.forEach((item) => {
      let productIdItm = item.getAttribute("data-product-id");
      switchDisableFrequency(productIdItm);
      changeFlavor(productIdItm);
      switchVariant(productIdItm);
      toggleSelect(productIdItm);
      changeSelectedFlavor(productIdItm);
    });
  }

  function setEvents() {
    inputRadio.forEach((item) => {
      let productIdItm = item.getAttribute("data-product-id");
      switchDisableFrequency(productIdItm);
      changeFlavor(productIdItm);
      switchVariant(productIdItm);
      toggleSelect(productIdItm);
      changeSelectedFlavor(productIdItm);

      item.addEventListener("change", () => {
        let productId = item.getAttribute("data-product-id");
        switchDisableFrequency(productId);
        switchVariant(productId);
      });
    });

    flavor_option.forEach((item) => {
      item.addEventListener("change", () => {
        let productId = item.getAttribute("data-product-id");
        switchVariant(productId);
      });
    });

    select_flavor_item.forEach((item) => {
      item.addEventListener("click", () => {
        let productId = item.getAttribute("data-product-id");
        toggleSelect(productId);
      });
    });

    input_flavor.forEach((item) => {
      item.addEventListener("click", () => {
        let productId = item.getAttribute("data-product-id");
        changeFlavor(productId);
        switchVariant(productId);
        toggleSelect(productId);
        changeSelectedFlavor(productId);
      });
    });
  }

  window.addEventListener("load", () => {
    loadEvents();
  });
  setEvents();
});
