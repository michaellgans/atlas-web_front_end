/* Task 14 */

function createElement(data) {
    /* Creates Paragraph */
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            const response = JSON.parse(request.responseText);
            const pages = response.query.pages;
            const extract = pages[Object.keys(pages)[0]].extract;
            callback(extract);
        }
    };

    request.send();
}

queryWikipedia(createElement);