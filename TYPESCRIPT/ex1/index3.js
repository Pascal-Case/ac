"use strict";
let member = 123;
function handleResponse(response) {
    if (typeof response === 'object' && response !== null && 'id' in response && 'name' in response) {
        const user = response;
        console.log(`User: ${user.name}`);
    }
    else {
        console.error('Invalid user response:', response);
    }
}
const apiResponse = JSON.parse('{"id": 1, "name": "Jane"}');
handleResponse(apiResponse);
