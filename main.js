
// Mouse ove on 
// Declare variable
const heroImage = document.querySelector('.hero-image');
// Event listener according to mouse movement
document.addEventListener('mousemove', (e)=> {
    // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Get the mouse position relative to the center of the window
    const mouseX = (e.clientX / width) - 0.5; 
    const mouseY = (e.clientY / height) - 0.5; 

    // Calculate the movement based on mouse position
    const moveX = mouseX * 10; // How much movement
    const moveY = mouseY * 10;

    // Apply the movement to the hero image using transform
    heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// ------ Toggle Background Music Functionality 
const bgMusic = new Audio('audio/nature.wav') //Create an audio element from the audio file.
const soundBtn = document.querySelector('#sound-btn') // Declare Var 
//Event Listener to toggle music on click
soundBtn.addEventListener('click', () => {
    if(bgMusic.paused){ //If music is paused 
        bgMusic.play()// Then play.
        soundBtn.name = 'volume-up' //Change icon to 'Volume-up'
    }else{
        bgMusic.pause() // Else pause music
        soundBtn.name = 'volume-mute' // Change icon to 'volume-mute'
    }
})

// ------ Swiper.Js Initialization
const swiper = new Swiper('.swiper', {
    speed: 600, // Speed of transition between each slide
    parallax: true, //Enable parallax effect
    navigation: {
        nextEl: '.swiper-button-next', //Specify for navigation
        prevEl: '.swiper-button-prev', //Specify for navigation
    },

    pagination:{
        el:'.swiper-pagination', // Specify Pagination
        type: "bullets", //Pagination Type
    }
})


// --------- GSAP Timeline and ScrollTrigger Config for Cards Section
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//Create Timeline
let timeln = gsap.timeline({
    scrollTrigger:{
        trigger: ".cards", // The Trigger
        pin: true, //Pin element in place when scrolling
        pinSpacing: true, //Add space below pinned element
        start: "top top", //Start point of animation, when top of trigger meet top of viewport
        end: "+=2500", // End after 2500px scroll distance
        scrub: 1 //Link animation to scroll position for natural scrolling.
    }
});

// Card 1 appears
timeln.addLabel('card1'); // Add label for reference
timeln.to(".card-1", {
    yPercent: 0, // Move Card #1 to original position
    opacity: 1, // Fully visible
})

timeln.from(".card-2", {
    yPercent: 75, // Start Card #2 at 75% vertical offset so it slides in from bottom
    opacity:0 // Start in invisible
})

timeln.addLabel("card2"); // Add label

timeln.to(".card-1", {
    scale: 0.95, // Scale down slightly.
    yPercent: -0.5, // Move it up slightly to create abit of space
    opacity: 1 // Full opacity to users can see the stacked cards.
}, "-=0.3") //Offset by -0.3s to make it overlap

timeln.to(".card-2", {
    yPercent: 0, //Move Card #2 to original position
    opacity: 1 // Full visibility
});

timeln.from('.card-3',{
    yPercent: 75, //Start card #3 at 75% vertical offset again
    opacity: 0 // make invisible
});
timeln.addLabel('card3'); // Add label

timeln.to(".card-2",{
    scale: 0.98, //Scale down slightly again
    yPercent: 0.4, //create slight spacing for card 3
    opacity:1 // Full opacity 
}, "-=0.5");

timeln.to(".card-3",{
    yPercent: 0, //Finally, card 3 to original position
    opacity: 1 // Full visibility.
});


// Scroll Triggered horizontal animation for 'WHERE WE WORK' title.
gsap.to(".scroll-text", {
    x: "-50px", // Moves the text from right to left across the container
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-text-container", // The container that triggers the scroll effect
        start: "top 80%", // Start animation when top of container reach 80% of VH
        end: "+=3000", // Ends animation after 3000px scroll distance.
        scrub: 1, // Smooth scrolling effect linked with the scroll position
        
    }
});

//Same Function for 'GET INVOLVED'
gsap.to(".message-scroll", {
    x: "500px", // Moves the text from left to right across the container
    ease: "none",
    scrollTrigger: {
        trigger: ".get-involved-message", 
        start: "top 100%", 
        end: "+=1000", 
        scrub: 1, 
    }
});

