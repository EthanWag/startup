# Helpful notes for the class
## How to get an online certificate using AWS for webpages
  In order to get a certificate it's relatively simple. If you ssh into your website using (command below) you can navigate to your Caddyfile and update your certificate there. In order to do so, you will need to already have a DNS but once you do just replace all "domainnamehere"
   with your current DNS and save the file. Finally in order to push updates be sure to use the command "sudo service caddy restart" which pushes all changes
  - ssh -i "your private key here" ubuntu@"Ip address here" 


## How do you make a responsive design?
We can block thing, use a flex design, or many differnt options. For flex, be sure to put flex in class name(or anything) and then put display: flex and then do flex-direction:row to make it grow and shrink depending on what you want to do. So, you want to make html functional and css make it stylish. Float allows stuff to just float have stuff wrap around it. portrait mode 

## How do you use bootstrap?
Well in order to use bootstrap just include a link to your bootstrap file and it will do everything for you. Boot strap seems pretty nice and it looks like it will take care of everything. You'll do some more stuff relating to this in CSS frameworks assignment which will teach you most of this stuff.

## JavaScript Promises, async/await
We need promises because web applications need to wait for various reasons. Javascript is a single threaded program so we can't have multiple threads. Promises have 3 states, pending, fulfilled and rejected. Pending means it is waiting, fulfilled means that it completed the task and we have the data. Finally rejected means something went wrong and were reporting the filure of object. Whenever you get something from the API be sure to stick it into local storage for the time being.




Notes: 
- so apparently, you can just put a Timeout which counts down until your program runs out of time. 
- It's best practice to just have your one page dyamically change depending on what you want it to do
