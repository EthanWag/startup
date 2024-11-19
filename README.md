This is my main repository for the class CS 260 and for my personal website which will be BuyZip

# What is BuyZip?
How many times in our lives have do we have left over or forgotten about stuff. Weather it's an old computer lying about or an old mattress your looking to get rid of, sometimes the clutter is unwanted and can be an eye sore. In cases like this, I'm proud to introduce BuyZip!

BuyZip is an online platform to sell unwanted items that you have lying about and a great place to buy regular or more niche items that you've been looking for. Once you create an free account, feel free to browse any items currently for sale in our database and if your looking to sell, feel free to register an item online so that people all over the world can buy it! We look forward to shopping with you! 


## What are some of the Key Features?

+ This is a user-driven project, allowing users to tailor features and functionality to their specific requirements.
+ Secure authantication with information being backed onto a database.
+ Once the user is logged in, they can buy or sell items off of our digital market place.
+ When buying, there a variety of different catalogs and items that they can browse and put into their cart.
+ When selling, you get to make the price and then push it to the marketplace. You can also adjust prices later.
+ Once, you have everything in your cart, checkout and you will be given the some contact info for the seller so you can make the purchase.
+ The seller can then mark that that item has been sold and you conclude the sale.


## Sample pages 

![Screenshot 2024-09-13 at 6 35 31 PM](https://github.com/user-attachments/assets/969c8c33-93a1-4497-b736-0b80d1318a53)



## What Technologies are used?
There are a verity of technologies that are going to be used for a variety of purposes. I'll be using html, css and javascript to build the foundations of the website. We will be using Mongo DB to store all of the user data as well as any items and their prices on the market place. We'll also use websockets to provide live data on which items are currently being made available by other users. More specific definitions are in the discription below
- HTML - Will be used to create the basic page structure for the website as well as being the primary place to create buttons, divs, and text. In short, it will be the foundation of my website.
- CSS - Will provide allow me to customize and design my website such that it will look professional and clean.
- Javascript - Allows me to add functionality to my website and to many of the different features on my webpages. Buttons, forms, and user inputs/activity will all be handled by Javascript.
- React - Along with HTML and CSS, allows me to customize and build interfaces that are more sophisticated for my website
- Node.js - Will be the main language that my server is coded in. Will also make it easier for me to debug and test. 
- MongoDB - Stores critical information about the website and makes it accessable. Information about users, items for sale and authentication will all be stored on the database for safekeeping.
- Websockets - Allows for live information to be displayed. Items being put up for sale will be sent through a websocket so that all other users immediately know about the item.
- Fetch API - In order to communcate between the client and server, Fetch API is needed to send and recieve messages. As the client needs to send information to update the server it send it via Fetch through https/http messages.
- Endpoints - The website will have a series of critical endpoints that implement key features. These will be built on the server side and the client will communicate through them.


## Overview Diagram

![buyzip](https://github.com/user-attachments/assets/38b16065-97a3-491c-94b0-f44ee961e583)


# Updates and Progress

## html Startup

In update 2.0, all of the html code for the website has been created aside from a few exceptions. All of the pages basic structure as well as a few examples of what we may see in the future has been created. As more and more css and other code gets added, each of the elements in this website may get moved around and changed but for right now, this should be the general structure of what I do in the future. Below is a list of a few ot the features that I've created from this update.
- Basic page layout (links between websites, a few authentication checks as well as the basics for account information) 
- Place holders for websockets, databases and third party systems so that in the future, I can implement those technologies. 
- Basic examples of what we may see on some of these pages. For example in the market.html page, I put a few items inside a list to show what kind of information you can expect to see in each of these boxes.
### below are some more in detail notes on what each page does in my website:
- index.html --> entry point in to the website, allows users to log in or register a new account if they don't have one. Right now, the text boxes don't do anything but in the future you will put that information their and right now, the login button just takes you to the next page
- main.html --> main page for buyzip. This will have any links that are important to the page. For example, I have links that will take you to the market where you can buy things. I'll also have user inventory where users can look to see what they have for sale and who is intrested in buying said items. Futhermore on this page I'll use a 3rd party service. I'm not 100% sure what I want to do for it yet but some sort of promotion will be in the slot.
- market.html --> This is the main thing that buyzip does. This page has all the items currently for sale and allows the user to browse what is currently being sold. Here I through a few examples of some information you might see when looking at this market but as we continue, this will look much different.
- user_inventory.html --> this page will have what items the user currently has for sale in the market place, In the future, I'll have some sort of animaition going on where you can scroll through the different items for sale and edit the prices/items you have in there.
- user_item.html --> If the user wants to sell a new item, they can go to this page to set up a bit of the information they need to sell their item. It will ask for an item name, discription, a price and an image url. for the price and image url, those are very subject to change as I'm not sure how I want to store those values yet inside of a database. lastly you can press sell item and that will upload it to the database.

The rest of these pages are pretty self-explanatory and range from user cart to about me, the creator. These will be more polished and filled in as times goes on but for now, they are pretty simple.

## css Startup

So for this version of the website I went ahead and did most of the css I'm going to need for this project. There are a few black pictures but that is because, in the future, I will have a database that will store each of photos of different items on sale and those will be the pictures of what will be on sale. for now I left them blank aside from a few demo photos where I really wanted to show off what it would look like. For those of this project, I used bootstrap to take care of most of the styling but I do have a styles.css which has some extra stuff in case I found that a particular style or thing was being used a lot. I would say for the most part, index.html and market.html are pretty much done (asside from a few items on the marketplace which will be replaced from items on the database. Also main.html is done. In the future, I will add some api calls to chat gpt which will write some selling online tips that will be stored inside of that box. As for some more features, there will also be a nav bar towards the top which will allow you to navigate from page to page such that you can move around the different pages and services. Also to note that most of the actual features are not in yet, so clicking around won't work 100% yet.


## React Startup

For my React Startup, it mostly entailed updating my code out of html and css and into react compenents. This provides me with a more stream lined process for navigating pages and in may circumstances, allows me to make dynamic html which will become super important as I move into databases and storing user information. A list of my changes are below as well as a little explination what those changes are.
- React Components: This is mainly where most of the changes took place. Much of my code has been broken down into different components for verious different reasons. Sometimes it's just to cut down on complexity and makes it more readable. Many pages have a "body" or "content" component which house most of the pages content for that page and makes the webpage more streamlined. Another use of componentents for me was re-useablity. Oftentimes, I found myself writing the same code for my Navbar and Footer so I made those components so that I could just call those when I wanted to in verious files. Lastly, It was useful for dynamicly creating html components. For example, in my inventory page, I have a carousel which stores all the items a given user has for sale. Right now it has 3 items hard coded into the website that will display an image of what is on sale. In the future, it will access a database where these items are stored and display them dynamically on the carousel, which will be a nice quality of life change going into these next couple phases.

- Routes: The next thing included in my website is some new routes. These make it so that you can navigate to any page you want with relative ease. You can see this most clearly in the NavBar on the top of most screens that allow you go to any page you may want. it's super helpful and is included in one component that is shared with all of the files and makes naviagating easy

- Hooks: Finally my use of hooks mainly has to do with navigation. Many times, I found myself wanting to have buttons to take you to different pages without those being stored on a main NavBar. A good example of this is my Account page and my items page. That being said, I did need those routes in my indivdual files at times, so I used hooks to pass those routes down to lower files. I used the useNavigate hook to make a navigate object that could be passed down to different components. Now if you want to access your account, you can click on the litter person icon and it will take you to you account info. Similarly, if you are in inventory, you can click on the items button and it will take you to an edit page of that item. So those are sprinkled throughout my website

Lastly, I want to add some notes on what I'm going to add in the future. As for right now, I downloaded some login in stuff from the simon project. Right now it doesn't do anything but in the future I'll modify that code so that I can pass stuff like username or AuthToken down to different compenents as props or hooks that will allow you to access different pages. Another thing in the future is I will want to update my main page so some of the buttons look a bit better, because right now they look like trash. 

Anyway that should be it for updates, let me know if you have any questions!

## Backend Startup

This update we start to build the backend for the buyzip.org website. For now the backend is pretty simple but in the future, more will get added to it. To begin, much of the work done in this phase can be seen in the services directory where we have the index.js which services all of the endpoints as well as some other folders which for right now, have nothing inside of them. In the future, I will be sure to put in some more stuff to make it a bit more complex. As of right now, the only endpoints currently working is the login, register and logout endpoints. These for right now fufill the requirements of the assignments and have functionality. in the section below, I'll explain what each of the functioning endpoints do and then after, which endpoints you'll see in the future.
- Login: This one is very simple. Given some username and password, look for that username inside of a dictionary and if it exsists, it returns a 200 status code as well as gives an authtoken. It's pretty simple for now, but in the future there will be more added to it
- Register: This one is similar to the login one and does the same sort of thing. Given a new user, password, email and a phone number it creates a new person object and then generates an authToken and returns it to the client as well as responds with a 200 response code.
- Logout: lastly, this one allows the user to logout at any time. give a authToken, it checks to see if that user is inside of the dictionary in memory and if that user logged in, deletes their authToken and responseds with a 200. If the user is not in the dictionary, it redirects the user to an error page because they are not supposed to be able to login.

Next up are some work in progress endpoints that will be helpful in the future, but because I don't want to store these sorts of things in memory, I'm waiting till I create a database before creating them.

- Items: given some sort of parameters, will grab items currently for sale and return them to the client. This will be used in the marketplace where I need to be able to grab items that the customer wants and display them.
- Sell: Another endpoint sell allows any user to put a item up for sale on the market for anyone else to buy. It will store an image of what the item is, a discription about the item and finally the price. These items being stored on the database will be avaible for anyone to see and can be bought
- Buy: finally, buy takes an item off of the market and puts it into the buyers cart for them to purchase. When something is bought it can be put back on the market again but the buyer first needs to cancel their order.

Because I'll be dealing with images, I would prefer to have a database first because that way it's much more easy to store. there also might be some more endpoints in the future, but for now, these are the ones that for sure will be added if they haven't already. Lastly, it is a requirement to have a 3rd party service to be included inside of your website. Orignally I wanted to do like a daily sales advise for selling things online but I couldn't find an API for that. Right now it generates random facts that are intresting but in the future, I'll probably replace it for something else.

Let me know if you have any questions, Thanks!


