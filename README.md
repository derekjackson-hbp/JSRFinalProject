# JSRFinalProject
Final Project for JavaScript Remote Class
This is just the beggining of a larger idea to create a page that showcases different aspects of inclusive design and writing code with accessibility in mind.

_Readability and OpenDyslexic_ - I added these two buttons to show differences in what different users might need for basic page styles. The readability button changes the style form the browser layout to a style recommended for accessibility (e.g. 1.5em line-height, left aligned text, sans-serif font). The OpenDyslexic button changes the font to a font designed for dyslexic readers.

_Dog Adoption_ - This page is a redux of our dog adoption exercise. I updated it to include accessible elements, like aria lables and more attributes. A lot of the accessibility features happen under the hood, and are more apparent with a screeen reader. So the text announcing the type of adoption is alerted to a screen reader using an aria-lable. Not much has changes in the javascript, most of the updates happened in the HTML, and then simply updating the references in the javascript. 

_Audio Description_ - On this page I wanted to demonstrate why audio description can be important for video. Frequently it is assumed that closed caption covers everything, but when meaning is conveyed through action and not dialogue it is not communicated to many users. This page loads two youtube videos with youtube API. One video contains audio description from a scene in Hunger Games, the other video just plays the music from the soundtrack, essentially it is the same audio from the scene without the audio description. On load the videos play at the same time and the play button pauses or plays both videos simultaneously. THe mute button will toggle back and forthe between the audio of each video so we can hear how the scene appears with the aduio descriprion and without. The overlay simply blocks the youtube video from being displayed, to reinforce the context that this is from the perspective of users with low or no vision. The video can be started at the beginning at any time as well. 


# Improvements:
At the moment the styles that load when each "page" is loaded reset to the browser style. I would like to have the buttons actions not reset for each new page. So if you have the OpenDyslexic button selected, each page will load with that font. 

In the audio description, rather than having a link on the page to the original video I might include a button that removes the overlay to see the video with audio description. There are also weird things that happen while the page loads, because of the need to load the video. I would like to fix those so the page loads is smoother. It might also be nice to be able to adjust the opacity of the overlay to show differnet levels of vision disability. 

Also there are a lot of things that could be added to the page. One idea is a new page that demonstrates the importance of indicating the importance of identifying the language used on the page. This affects how AT interprets and reads the text out loud. So the perhaps the user can select different "lang" attributes and then the results of reading a particular paragraph consisting of different languages is read aloud. 

# Difficulties:
I had a lot of diffulties getting the Youtube API to work correctly. Loading two videos simultaneously was not descirbed in their documentation and I stumbled through that.

Also my design could be better, visually. One element I don't want to unintentionally convey is that inclusive/accessible design has to be ugly. Part of this was the result of not planning for design. The same is true for the initial coding of the index page. The Javascript I used was created step by step... a little bit spontaneously. It could stand to be cleaned up alot. 

I really wanted to use a Promise to improve the way the Audio Description loaded, but I never quite got it. However I did learn a lot about callbacks inthe process. 

# Successes: 
I think my biggest success is that when I run my pages through automated accessibility checkers (i.e. WAVE, and aXe), I get no errors or warnings. This does not check everything but it is good sign. 

I think the readbility and dyslexic font buttons were my biggest success. They were also my most planned out feature and consequently they went well.

Also, even though the code is a bit "hacky", I was surprised that I was able to pull off the youtube video to demo audio description. It was hard to find two videos wthat worked together, and after that I had no idea if I could get the thing to work correctly. 
