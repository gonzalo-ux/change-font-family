var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 232, height: 254 });
//Group selected (array)
let selectedTexts = figma.currentPage.selection;
let styleName;
let styleID;
let robotoStyleID = "S:bb3ac76eeeb4b793c72e370c2bbc897b64be7269,";
const robotoFont = {
    family: "Roboto",
    style: "Regular",
};
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === "roboto") {
        console.log(msg);
        //Grabbing the textStyleId
        for (const selectedText of selectedTexts) {
            if (selectedText.type === "TEXT") {
                //getting style ID
                styleID = selectedText.textStyleId;
                console.log(styleID);
                yield figma.loadFontAsync(robotoFont);
                selectedText.textStyleId = robotoStyleID;
            }
        }
    }
});
// figma.closePlugin();
