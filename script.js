// Making a Request
// You saw a request in the first exercise. Now it's time for you to make your own! (Don't worry, we'll help.)
// On line 1, we've created the xhr variable, which stands for XML HTTP Request. This is how we make an HTTP request!
// On line 2, we make the actual request to Codecademy.com.
// We haven't sent our request, though, and we need to console.log both the xhr.status (that was that "200" from before) and the xhr.statusText (it should be "OK").
// On line 4, call the .send() method on xhr. This is what sends the request!
// On lines 5 – 6, console.log the xhr.status and xhr.statusText attributes so we can see if Codecademy got our request okay.

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// // Add your code below!
// xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);

// The Four Verbs
// The number of HTTP methods you'll use is quite small—there are just four HTTP "verbs" you'll need to know! They are:
// GET: retrieves information from the specified source (you just saw this one!)
// POST: sends new information to the specified source.
// PUT: updates existing information of the specified source.
// DELETE: removes existing information from the specified source.

// Anatomy of a Request
// An HTTP request is made up of three parts:
// The request line, which tells the server what kind of request is being sent (GET, POST, etc.) and what resource it's looking for;
// The header, which sends the server additional information (such as which client is making the request)
// The body, which can be empty (as in a GET request) or contain data (if you're POSTing or PUTing information, that information is contained here).

// HTTP Status Codes
// A successful request to the server results in a response, which is the message the server sends back to you, the client.
// The response from the server will contain a three-digit status code. These codes can start with a 1, 2, 3, 4, or 5, and each set of codes means something different. (You can read the full list here). They work like this:
// 1xx: You won't see these a lot. The server is saying, "Got it! I'm working on your request."
// 2xx: These mean "okay!" The server sends these when it's successfully responding to your request. (Remember when you got a "200" back from Codecademy?)
// 3xx: These mean "I can do what you want, but I have to do something else first." You might see this if a website has changed addresses and you're using the old one; the server might have to reroute the request before it can get you the resource you asked for.
// 4xx: These mean you probably made a mistake. The most famous is "404," meaning "file not found": you asked for a resource or web page that doesn't exist.
// 5xx: These mean the server goofed up and can't successfully respond to your request.

// Anatomy of a Response
// The HTTP response structure mirrors that of the HTTP request. It contains:
// A response line, which includes the three-digit HTTP status code;
// A header, which includes further information about the server and its response;
// The body, which contains the text of the response.
// HTTP/1.1 200 OK
// Content-Type: text/xml; charset=UTF-8
// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="https://www.codecademy.com/">Accepted</string>

// Parsing XML
// XML (which stands for E xtensible Markup Language) is very similar to HTML—it uses tags between angle brackets. 
// The difference is that XML allows you to use tags that you make up, rather than tags that the W3C decided on. 
// For instance, you could create an API that returns information about a pet:
// <pet>
//   <name>Jeffrey</name>
//   <species>Giraffe</species>
// </pet>
// As long as you document the structure of your API's response, other people can use your API to get information about <pet>s.

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

// xhr.setRequestHeader('Content-Type', 'text/xml');
// xhr.send();

// var xmlDocument = xhr.responseXML;
// console.log(xmlDocument.childNodes['0'].textContent);

// Parsing JSON
// JSON (which stands for Java Script Object Notation) is an alternative to XML. It gets its name from the fact that its data format resembles JavaScript objects, and it is often more succinct than the equivalent XML. 
// For instance, our same <pet> Jeffrey would look like this in JSON:
// {
//   "pets": {
//     "name": "Jeffrey",
//     "species": "Giraffe"
//   }
// }
// var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';
// var json = JSON.parse(demo);
// console.log(json);

// Create a variable called xhr and set it equal to new XMLHttpRequest().
// Call open xhr and pass it three arguments: "GET" (the type of request you'd like to make), "https://www.codecademy.com/" (the URL), and false (this means the exercise will wait until it gets a response from the server).
// Call .send() on xhr. We've already taken care of the console.log()s for you!

// // Add your code below this line!
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();
// // Add your code above this line!

console.log(xhr.status);
console.log(xhr.statusText);

// Loading the JavaScript client library
// We'll start with a exercise that performs some common setup tasks needed to make YouTube Data API calls using the Google APIs JavaScript client library. 
// This boilerplate code sets up a basic HTML document, search.html, and includes two JavaScript files. One is the Google APIs JavaScript client library, and the other, search.js, is what we'll use for our custom code.
// When the client library is loaded, it automatically calls onClientLoad() [line 11] for us. That, in turn, loads in some extra code needed to make YouTube requests [line 12]. 
// Finally, once that's complete, we set an API key [line 19]. When you're writing your own programs that talk to the YouTube API, you'll need to apply for your own key, but for now, we can use an existing key set up for this lesson.
// In the course of this lesson, we'll need to display the results of YouTube Data API calls in the browser. showResponse() [line 5] is a simple function that takes a JavaScript value and adds it to a visible element in our HTML page.

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
// function showResponse(response) {
//     var responseString = JSON.stringify(response, '', 2);
//     document.getElementById('response').innerHTML += responseString;
// }

// // Called automatically when JavaScript client library is loaded.
// function onClientLoad() {
//     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
//     // This API key is intended for use only in this lesson.
//     // See https://goo.gl/PdPA1 to get a key for your own applications.
//     gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    
//     // Add code here to test out showResponse():
//     showResponse("Hooray!");
// }

// //A basic search.list()
// // Now that we have all the setup out of the way, let's make some calls to the API!
// // We'll start with a basic request to search YouTube—the underlying API call is search.list().
// // The new search() function [line 24] added to the previous code makes the API call. 
// // The code specifies one parameter, part: 'id' [line 27], which tells the API that we want to retrieve back only the YouTube ids of the search results. 
// // Once the API call completes, the onSearchResponse() [line 36] function is called automatically by the client library.
// // Add a call to showResponse(response); inside the onSearchResponse() function, on [line 37]. 
// // You should see the results of the YouTube API search.list() call on your HTML page in the Result tab.

// // Your use of the YouTube API must comply with the Terms of Service:
// // https://developers.google.com/youtube/terms

// // Helper function to display JavaScript value on HTML page.
// function showResponse(response) {
//     var responseString = JSON.stringify(response, '', 2);
//     document.getElementById('response').innerHTML += responseString;
// }

// // Called automatically when JavaScript client library is loaded.
// function onClientLoad() {
//     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
//     // This API key is intended for use only in this lesson.
//     // See https://goo.gl/PdPA1 to get a key for your own applications.
//     gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

//     search();
// }

// function search() {
//     // Use the JavaScript client library to create a search.list() API call.
//     var request = gapi.client.youtube.search.list({
//         part: 'id'
//     });
    
//     // Send the request to the API server,
//     // and invoke onSearchRepsonse() with the response.
//     request.execute(onSearchResponse);
// }

// // Called automatically with the response of the YouTube API request.
// function onSearchResponse(response) {
//     showResponse(response);
// }

// // Your use of the YouTube API must comply with the Terms of Service:
// // https://developers.google.com/youtube/terms

// // Helper function to display JavaScript value on HTML page.
// function showResponse(response) {
//     var responseString = JSON.stringify(response, '', 2);
//     document.getElementById('response').innerHTML += responseString;
// }

// // Called automatically when JavaScript client library is loaded.
// function onClientLoad() {
//     gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// // Called automatically when YouTube API interface is loaded (see line 9).
// function onYouTubeApiLoad() {
//     // This API key is intended for use only in this lesson.
//     // See https://goo.gl/PdPA1 to get a key for your own applications.
//     gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

//     search();
// }

// function search() {
//     // Use the JavaScript client library to create a search.list() API call.
//     var request = gapi.client.youtube.search.list({
//         part: 'snippet'
//     });
    
//     // Send the request to the API server,
//     // and invoke onSearchRepsonse() with the response.
//     request.execute(onSearchResponse);
// }

// // Called automatically with the response of the YouTube API request.
// function onSearchResponse(response) {
//     showResponse(response);
// }

// Filtering responses with the 'q' parameter
// Now that you're requesting the "snippet" part in your response, you've probably noticed that the titles and descriptions returned by the API are rather random—you're effectively asking the API to return anything. 
// We do this by passing in additional parameters to our search.list() call that tells the API to filter the results to only include specific types of items in the response. 
// There's a wide range of parameters you can use to really narrow down your searches, but for the purposes of this exercise, we'll focus on one in particular: q.
// The q parameter tells the API to only include YouTube search results whose title, description, or keywords match the value you pass in—it behaves just like the search field you're probably already familiar with on the YouTube web interface.

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: "Black Panther"
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}