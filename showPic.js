function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);

	var titletext = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = titletext;
}
