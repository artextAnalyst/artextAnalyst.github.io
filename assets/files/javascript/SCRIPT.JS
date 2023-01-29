/**
 * Made by Adam basha
 */
document.oncontextmenu = () =>{
    return false
}
function English(){
    let text = document.getElementById('text')
    text.style.textAlign = "left";
    

    

};
function Arabic(){
    document.getElementById('text').style.textAlign='right';
};
function check(){


    var text = document.getElementById('text').value;
    var words = text.split(/\s+/);
    var wordCount = {};
    for (var i = 0; i < words.length; i++) {
    if (wordCount[words[i]]) {
        wordCount[words[i]]++;
    } else {
        wordCount[words[i]] = 1;
    }
    }
    var table = document.createElement('table');
    for (var word in wordCount) {
    var row = document.createElement('tr');
    var wordCell = document.createElement('td');
    wordCell.innerHTML = word;
    var countCell = document.createElement('td');
    countCell.innerHTML = wordCount[word];
    row.appendChild(wordCell);
    row.appendChild(countCell);
    table.appendChild(row);
    }
    let tag1 = document.createElement('h1');
    tag1.innerText= "Done!!"
    tag1.style.textAlign='center'
    document.getElementById('middle').appendChild(tag1)
    document.getElementById('middle').appendChild(table);
    var text = document.getElementById('text').value;
    var words = text.split(/\s+/);
    var wordCountelement = document.createElement('div');
    wordCountelement.innerHTML = words.length;
    var h2tag = document.createElement('h2')
    h2tag.innerText="Word count"
    document.getElementById('middle').appendChild(h2tag)
    document.getElementById('middle').appendChild(wordCountelement)

    document.getElementById('checker').parentNode.removeChild(document.getElementById('checker'))
    document.getElementById('text').parentNode.removeChild(document.getElementById('text'))


    




    
};
