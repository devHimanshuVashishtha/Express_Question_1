const {URL} = require("url");

// const siteUrl =
//   "https://www.flipkart.com/search?q=mobile&otracker=search&marketplace=FLIPKART";

const siteUrl =
  "https://unsplash.com/s/photos/windows-for-laptop";



const parseUrl = new URL(siteUrl);

console.log("fullURl:", parseUrl.href);
console.log("Protocol:", parseUrl.protocol);
console.log("host:", parseUrl.host);
console.log("hostname:", parseUrl.hostname);
console.log("path:", parseUrl.pathname);
console.log("query String:", parseUrl.search);
