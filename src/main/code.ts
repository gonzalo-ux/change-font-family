figma.showUI(__html__, { width: 232, height: 254 });

//Group selected (array)
let selectedTexts = figma.currentPage.selection;
let styleName: any;
let styleID: any;
let robotoStyleID = "S:bb3ac76eeeb4b793c72e370c2bbc897b64be7269,";

const robotoFont = {
  family: "Roboto",
  style: "Regular",
};

figma.ui.onmessage = async (msg) => {
  if (msg.type === "roboto") {
    console.log(msg);
    //Grabbing the textStyleId
    for (const selectedText of selectedTexts) {
      if (selectedText.type === "TEXT") {
        //getting style ID
        styleID = selectedText.textStyleId;
        console.log(styleID);
        await figma.loadFontAsync(robotoFont);
        selectedText.textStyleId = robotoStyleID;
      }
    }
  }
};

// figma.closePlugin();
