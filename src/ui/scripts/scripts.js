//vars
const robotoButton = document.querySelector("#roboto");
// const cancelButton = document.querySelector("#cancel");
// const spacingInput = document.querySelector("#spacing");

robotoButton.onclick = () => {
  roboto();
};

function roboto() {
  parent.postMessage(
    {
      pluginMessage: {
        type: "roboto",
        // spacing: spacingInput.value,
        // layout: layoutSelected.value,
        // definedSpacing,
      },
    },
    "*"
  );
}
