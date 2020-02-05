function getText(ad)
{
  var text = "";
  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", ad, false);
  txtFile.onreadystatechange = function() {
    if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
      if (txtFile.status === 200 || txtFile.status === 0) {  // Makes sure it's found the file.
        allText = txtFile.responseText;
        text = allText;
        //alert(text);
      }
    }
  }
  txtFile.send(0);


  return text;
}
function show(id)
{
  if(getElementById(id).style.display == "none")
    getElementById(id).style.display = "block";
  else
    getElementById(id).style.display = "none";

}

const template = getText("recipe_template.html");
const jsonFile = getText("recipes.json");
const json = JSON.parse(jsonFile);
let htmls = "";
json.forEach((item, i) => {
  name = item.name;
  desc = item.description;
  src = item.src;
  id = i;
  htmls = htmls + template.replace("{name}",name).replace("{src}",src).replace("{desc}",desc).replace("{id}",id);
});

getElementById('rbox').innerHTML = htmls;
