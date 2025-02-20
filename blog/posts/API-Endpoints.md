---
title: "API Endpoints"
date: "October 10, 2024"
description: "After creating the models we started to work on the API."
image: ""
author: "Michael"
id: 11
---

## Creating the API Endpoints

Today we worked on creating serializers to convert the Django models into JSON responses for the API.
Using the APIView model for API development, we built endpoints for, user registration, login
and logout.

Post and Get views for updating and viewing user progress, getting all questions users could
practice. There were also endpoints for uploading Audio from the answer, in base64 format.

Lastly there was an endpoint for getting an answer, as well as the details about the
mispronunciations of the user, it worked by transcribing the audio to text and then comparing
that to the native transcript making use of wav2vec. It the returns the word-by-word
pronunciation accuracy.

We tested our APIs using Postman and Django’s built-in browser.

## Conclusion

Now that we have built the core backend API for our system, we will be focusing on the
frontend integration.