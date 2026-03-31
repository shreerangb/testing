const clean = DOMPurify.sanitize(userInput);
element.innerHTML = clean;
