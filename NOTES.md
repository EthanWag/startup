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



# Notes for the midterm
- (hashtag) = an ID tag, . = an class tag
- padding is space inside of a particular tag while margin is surrounding space outside the div tag
- what is the syntax for ordered and unordered lists? "<.ol>" = ordered list, "<.ul>" = unordered list
- If you want to include JavaScript on an HTML page, which tag do you use? <script></script>
- what does -la do in -la ls. prints out all files with lots of description. 
- Can a DNS A record can point to an IP address or another A record? Answer: No, only to other A records

flex box example:
  * display: flex;
  * flex-direction: column;
  * margin: 0;
  * height: 100vh;
So this tag, display is flex so that is it's type, flex-direction:column is how you want to sort it as you make the screen smaller. margin is how much space you want outside the mex and finally height 100vh is how large you want the screen to be

### How to display an image in html
<a href="https://example.com">
    <img src="image.jpg" alt="Description of image">
</a>
