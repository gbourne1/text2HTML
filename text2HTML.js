/* 
 * File: text2HTML.js
 * Description: Convert plain text to HTML
 * Author: Geoffrey Bourne @geoffbourne https://github.com/gbourne1
*/

function text2HTML(text) {
    // 1: Plain Text Search
    var text = text.replace(/&/g, "&amp;").
    replace(/</g, "&lt;").
    replace(/>/g, "&gt;");

    // 2: Line Breaks
    text = text.replace(/\r\n?|\n/g, "<br>");

    // 3: Paragraphs
    text = text.replace(/<br>\s*<br>/g, "</p><p>");

    // 4: Wrap in Paragraph Tags
    text = "<p>" + text + "</p>";

    return text;
}
