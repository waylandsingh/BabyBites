export default function quote() {
    let tabcontent = document.getElementById("tabcontent")
    let quote = document.createElement("div")
    quote.id = "mainpage-quote"

    quote.innerHTML = "<h1>\"So fresh you can taste the moo\"</h1><h2> -vampyreBat420</h2>"

    return quote;
}