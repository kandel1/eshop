var Product= require('../models/product');
var mongoose= require('mongoose');
mongoose.connect('localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'http://www.thepopbreak.com/wp-content/uploads/2016/12/La-La-Land-Poster.jpg',
        title: 'La La Land',
        description: 'La La Land is a 2016 American musical romantic comedy-drama film written and directed by Damien Chazelle and starring Ryan Gosling and Emma Stone as a musician and an aspiring actress who meet and fall in love in Los Angeles. The films title refers both to the city of Los                    Angeles and to the idiom for being out of touch with reality',
        price: 12
}),
 new Product({
        imagePath: 'http://images2.fanpop.com/image/photos/8600000/Batman-DK-the-dark-knight-8602207-1024-768.jpg',
        title: 'The Dark Knight',
        description: 'The Dark Knight is a 2008 superhero crime thriller film directed, produced, and co-written by Christopher Nolan. Featuring the DC Comics character Batman, the film is the second part of Nolans The Dark Knight Trilogy and a sequel to 2005s Batman Begins, starring an ensemble cast including Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal and Morgan Freeman.',
        price: 10
}),
new Product({
        imagePath: 'http://s16.postimg.org/vssms0q39/The_Grand_Budapest_Hotel_2014_BR.jpg',
        title: 'The Grand Budapest Hotel',
        description: 'The film is an American-German-British co-production[2] that was financed by German financial companies and film-funding organizations. It was filmed in Germany.[5][6][7] The Grand Budapest Hotel was released to widespread acclaim from film critics, and many included it in their year-end top-10 lists.',
        price: 14
}),

];
var done = 0;
for (var i= 0;i< products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done== products.length){
         exit();  
        }
    }); 
}
function exit(){
    mongoose.disconnect();
}





