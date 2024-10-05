// Write Pagination object that will get an array and pageSize, then will return the following.
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems

const Pagination = {
    currentPage: 1,
    pageSize: 0,
    pages: [],

    init: function(arr = [], pageSize = 1) {
        this.pageSize = pageSize;
        this.currentPage = 1;
        this.pages = arr.reduce((acc, current, index) => {
            const pageIndex = Math.floor(index / pageSize);
            if (!acc[pageIndex]) {
                acc[pageIndex] = [];
            }
            acc[pageIndex].push(current);
            return acc;
        }, []);

        return this;
    },
    
    getPageItems: function() {
        return this.pages[this.currentPage - 1] || [];
    },

    prevPage: function() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        return this;
    },

    nextPage: function() {
        if (this.currentPage < this.pages.length) {
            this.currentPage++;
        }
        return this;
    },

    goToPage: function(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= this.pages.length) {
            this.currentPage = pageNumber;
        }
        return this;
    },

    firstPage: function() {
        this.currentPage = 1;
        return this;
    },

    lastPage: function() {
        this.currentPage = this.pages.length;
        return this;
    }
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);

console.log(Pagination.getPageItems()); 
Pagination.nextPage();
console.log(Pagination.getPageItems()); 
Pagination.goToPage(3);
console.log(Pagination.getPageItems()); 
Pagination.prevPage();
console.log(Pagination.getPageItems()); 
Pagination.firstPage();
console.log(Pagination.getPageItems()); 
Pagination.lastPage();
console.log(Pagination.getPageItems());


