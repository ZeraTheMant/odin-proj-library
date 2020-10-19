function Book(title, author, pages, hasBeenRead) {
    this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;
	this.info = function() {
		let readText = 'not read yet';
		if (this.hasBeenRead) {
			readText = 'already read';
		}
		
		return title + ' by' + author + ', ' + pages + ' pages, ' + readText;
	}
}