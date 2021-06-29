
const cat = {
    makeSound: function () {
      console.log(this.sound);
    },
    name: this.name
  };
  
  const mark  = Object.create(cat);
  mark.name = 'b';
  mark.sound = 'meow';
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(function (tag) {
        console.log(this.title, tag);
      },this);
    },
  };
  
  video.showTags();
  */




//Book object 
const book = {
    title:this.title,
    author:this.author,
    pages:this.pages,
    readStatus:this.readStatus
}

const book1 = Object.create(book);
book1.title = 'Percy Jackson';
book1.author = "Rick Riordian";
book1.pages = 200;
book1.readStatus = 'Yes';

const book2 = Object.create(book);
book2.title = 'Harry Potter';
book2.author = "JK";
book2.pages = 100;
book2.readStatus = 'No';