# Ajax-api

In this assignment I experimented with AJAX and API's for the first time. I used the GIPHY API to make a dynamic web page that populates gifs based on your search. How it works:

• The App takes topics in an array and creates buttons in the HTML.

• Using a loop, I append the buttons for each string in the array. 

• When the user clicks on the button, the page grabs 10 static, non-animated gif images from the GIPHY API and places them on   the page.

• When the user click on the still GIPHY images, the gif animates. If the user clicks the gif again, it stops animating.

• Under the Gif, ratings display rating from (PG, G, and so on). This data is provided by GIPHY API.

• I then built a form that takes values from a user input box and adds it into an array. Then, I call a function that takes     each topic in the array remake the button on the page. 
