walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	// v = v.replace(/\bEnterprise Solution\b/g, "Crappy Solution");
	// v = v.replace(/\bEnterprise solution\b/g, "Crappy solution");
	// v = v.replace(/\benterprise Solution\b/g, "crappy Solution");
	// v = v.replace(/\benterprise solution\b/g, "crappy solution");

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	textNode.nodeValue = v;
}

// function matchCase(text, pattern) {
//     var result = '';
// 
//     for(var i = 0; i < text.length; i++) {
//         var c = text.charAt(i);
//         var p = pattern.charCodeAt(i);
// 
//         if(p >= 65 && p < 65 + 26) {
//             result += c.toUpperCase();
//         } else {
//             result += c.toLowerCase();
//         }
//     }
// 
//     return result;
// }


