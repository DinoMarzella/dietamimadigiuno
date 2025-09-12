function buttonCheckoutEvent() {
  const gtmButtonEvent = Array.from(
    document.querySelectorAll(".gtm-button-event")
  );

  if (!gtmButtonEvent || !gtmButtonEvent.length) return false;

  gtmButtonEvent.map((elem) => {
    console.log("GTM - Events installed");
    elem.addEventListener("click", function () {
      console.log("GTM - Event executed start");
      let gtmValue = elem.getAttribute("gtm-value");
      if (!gtmValue) return false;

      console.log("GTM - Value", gtmValue);
      gtag("event", "click_button", {
        button_clicked: gtmValue || "",
        value: gtmValue || "",
        send_to: "G-NN0NFC2C2X",
      });
      console.log("GTM - Event executed end");
    });
  });
}

window.addEventListener('DOMContentLoaded',() => {
  if (typeof gtag === "undefined") return;
  console.log("GTM - Events runnig");
  
  try {
    buttonCheckoutEvent();
  } catch (error) {
    console.log("GTM - Event error", error);
  }
})
