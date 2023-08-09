let i = 0;
let txt = 'From a young age Ive always had a keen interest in computers. I recall being glued to the TV playing Paperboy or Ghostbusters on the Commodore 64 from a young age, then when I was a little older playing Teenage Mutant Ninja Turtles on my Amiga 600 before consoles were even a thing! This keen interest in gaming has stayed with me through all my childhood and into adult hood, there arent many consoles I dont still own! When I left school working in tech never seemed like a realistic goal, so I ended up in sales and then moved in to working with cars (another passion of mine). However after finding the FreeCodeCamp website in 2022, I quickly discovered the enjoyment to be had from learning to code. As if by magic, after regularly visiting the FreeCodeCamp website, my Facebook feed became littered with all things coding related. I came across the Odin Project website on a programming group I joined and over the next couple of months completed the foundation course. By this point I had started seeing lots of adverts for coding bootcamps and started to think more about a career change. In July 2023 after seeing an advert for IO Academy’s Software Development bootcamp, the time was right to turn this dream into a reality. Im now looking for my first role as a Junior Developer, whilst continuing to build on my knowledge of all things coding related.';
let speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector("#about-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()