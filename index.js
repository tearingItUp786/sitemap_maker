<<<<<<< HEAD
=======
var SitemapGenerator = require('sitemap-generator');
var file = require('file-system');
var fs = require('fs');
var userWebsite = 'http://www.brianrhys.com/';
// create generator
var generator = new SitemapGenerator(userWebsite);

// register event listeners
generator.on('done', function(sitemap) {
    console.log(sitemap); // => prints xml sitemap
    fs.writeFile("sitemap.xml", sitemap, function(err) {
        if (err) return console.log(err);
        console.log("Hello > hello.xml");
    });
});

// start the crawler
generator.start();
>>>>>>> e6cd2630709d2f73b3ce7cbd1e735147c0c0385b
