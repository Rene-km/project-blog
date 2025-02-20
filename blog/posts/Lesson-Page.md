---
title: "Individual Phrases"
date: "October 10, 2024"
description: "Challenges and solutions in implementing the lesson page with the Media Recorder API."
image: ""
author: "Rene"
id: 13
---

Implementing the lesson page proved to be the hardest task so far. The designing of the page was rather straightforward. We wanted the design to be as intuitive and minimal as possible. We placed a button on the bottom of the page and had the text at the top. 

For the recording, we decided to use the Media Recorder API. We used the example in their documentation as a reference. However, we did have to make a few changes as their example uses plain JavaScript and HTML. This is when we started to encounter some problems. As the API runs on the client side, we had to change the component into a client-side component. We then had to figure out which variable states we had to track.

The main problem was that the audio Blob file was being created with a size of 0 bytes, which led to the error ERR_REQUEST_RANGE_NOT_SATISFIABLE when trying to play the audio. This happened because the chunks array, which collected the pieces of audio, was empty, meaning the audio was either not being collected or tracked.

Initially, we used the useState hook to manage the chunks array. However, due to the nature of the client component and that we were using a useEffect hook (this runs when the component is mounted), whenever the recording stopped, the value was reset. We made numerous attempts to clear and update chunks in various parts of the code, yet the state was not representing the latest data.

Eventually, to solve this, we switched from using React state (useState) to useRef for the chunks array. useRef is a reference that keeps its value between renders, and its changing of value does not trigger a re-render. This allowed us to directly manipulate the array without worrying about React's render cycle.

