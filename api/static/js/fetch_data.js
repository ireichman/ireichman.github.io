"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Asynchroous function for retrieving data from the API.
function updateContentFromApi(_a) {
    return __awaiter(this, arguments, void 0, function* ({ endpoint, value, dataType, elementId }) {
        try {
            const response = yield fetch(`/api/v1/${endpoint}/${value}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // ApiResponse reads the API payload JSON. To get a value from the JSON pair, give it the key (dataType), initially 'text' or 'image'. 
            // This const is defined in an interface.
            const data = yield response.json();
            console.log('Data received:', data);
            console.log('Data message:', data[dataType]);
            // element reads the HTML looking for matching HTML element IDs.
            const element = document.getElementById(elementId);
            console.log('Found element:', element);
            // If matching element ID is found, replact it's text with a string from the APIResponse.
            if (element) {
                element.textContent = data[dataType];
            }
            else {
                console.error(`Element with id '${elementId}' not found`);
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}
// initializeContent calls the updateContentFromApi for each element ID that needs data.
function initializeContent() {
    // return;
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all([
            updateContentFromApi({ endpoint: 'texts', value: 2, dataType: "text", elementId: "home-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 3, dataType: "text", elementId: "menu-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 4, dataType: "text", elementId: "portfolio-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 5, dataType: "text", elementId: "about-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 6, dataType: "text", elementId: "contact-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 7, dataType: "text", elementId: "home-h1" }),
            updateContentFromApi({ endpoint: 'texts', value: 8, dataType: "text", elementId: "home-subtitle" }),
            updateContentFromApi({ endpoint: 'texts', value: 9, dataType: "text", elementId: "portfolio-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 10, dataType: "text", elementId: "email2pdf-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 11, dataType: "text", elementId: "email2pdf-modal-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 12, dataType: "text", elementId: "email2pdf-modal-p" }),
            updateContentFromApi({ endpoint: 'texts', value: 13, dataType: "text", elementId: "email2pdf-modal-close-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 14, dataType: "text", elementId: "coming-soon-modal-2-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 15, dataType: "text", elementId: "coming-soon-modal-2-p" }),
            updateContentFromApi({ endpoint: 'texts', value: 16, dataType: "text", elementId: "coming-soon-modal-2-close-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 17, dataType: "text", elementId: "coming-soon-modal-3-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 18, dataType: "text", elementId: "coming-soon-modal-3-p" }),
            updateContentFromApi({ endpoint: 'texts', value: 19, dataType: "text", elementId: "coming-soon-modal-3-close-button" }),
            updateContentFromApi({ endpoint: 'texts', value: 20, dataType: "text", elementId: "about-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 21, dataType: "text", elementId: "about-text-1" }),
            updateContentFromApi({ endpoint: 'texts', value: 22, dataType: "text", elementId: "about-text-2" }),
            updateContentFromApi({ endpoint: 'texts', value: 23, dataType: "text", elementId: "contact-me-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 24, dataType: "text", elementId: "contact-me-p" }),
            updateContentFromApi({ endpoint: 'texts', value: 25, dataType: "text", elementId: "footer-title" }),
            updateContentFromApi({ endpoint: 'texts', value: 26, dataType: "text", elementId: "copyrights" }),
        ]);
    });
}
// Read the HTML after all the DOM content was loaded.
document.addEventListener('DOMContentLoaded', initializeContent);
