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


# I love Tic Tac Toe

- two readings about simon, so maybe this week and look at react because it's due it two weeks but it is really hard

React is a web framework which is pretty cool. Your going to write to a .jsx file. Babel is something that turns Jsx into javascript and html that then a website can use. What is the building blocks of react are compontents. 

The real DOM is the entire webpage, and that means DOMs can be pretty big. However, a virtual DOM is really useful because it's just a copy of your DOM and when you want to update your DOM it just adds it to the virtual DOM and then find out where things are different and then updates the orignal page. 





## temp code for the time being 

 function Carousel() {

    const [currentIndex,setIndex] = useState(0);
    const intervalTime = 2000;

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setIndex((currentIndex + 1) % 3);
        }, intervalTime);

        return () => clearInterval(autoSlide);
    }, [currentIndex]);


    const handleNext = () => {
        clearInterval();
        setIndex((currentIndex + 1) % 3);

    }

    return (
        <>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" style={{ position: 'relative' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://herdfreedhartz.com/wp-content/uploads/2024/04/Consumer-1100x400-1.jpg"
                             className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://discovergroningen.com/wp-content/uploads/2019/02/Folkingestraat-2-1100x400.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.centerforhoardingandcluttering.com/wp-content/uploads/2017/10/Hoarding-Support-Group-in-Cave-City-TN-1100x400.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <div id="login" className="carousel-caption d-none d-md-block text-start">
                    <h5>Sign in Today</h5>
                    <p>Get the best deals by signing in</p>
                    <a href="#" className="btn btn-primary">Login</a>
                </div>
            </div>
        </>
    );
}

