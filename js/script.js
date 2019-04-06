function rot13(str) { 
    let shifter = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) > 64) {
            shifter.push(String.fromCharCode(str.charCodeAt(i) + 13)); }
        else if (str.charCodeAt(i) > 77) {
            shifter.push(String.fromCharCode(str.charCodeAt(i) - 13)); }  
        else  {shifter.push(String.fromCharCode(str.charCodeAt(i)));}      
    }
    document.getElementById("answer").innerHTML = shifter.join("");
}
  
document.getElementById("button").addEventListener("click", function() {
    rot13(document.getElementById("str").value);
});