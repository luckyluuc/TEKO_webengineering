console.log("test")

const testInputButton = document.getElementById("testForm");
testInputButton.addEventListener("submit", function(event) {
    event.preventDefault();

    let textInput = document.getElementById("textInput").value;
    console.log(textInput);

    document.getElementById("textOutput").innerHTML = `
                <h2>Dieser Text wurde eingegeben: ${textInput}</h2>
            `;
});

export function sum(a, b) {
    return a + b;
}
