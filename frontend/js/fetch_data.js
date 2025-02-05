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
function updateContentFromApi(endpoint, value, dataType, elementId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:5000/api/v1/${endpoint}/${value}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            console.log('Data received:', data);
            console.log('Data message:', data[dataType]);
            const element = document.getElementById(elementId);
            console.log('Found element:', element);
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
function initializeContent() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all([
            updateContentFromApi('texts', 2, "text", "home-button")
        ]);
    });
}
document.addEventListener('DOMContentLoaded', initializeContent);
