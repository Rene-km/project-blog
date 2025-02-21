---
title: "API Endpoints"
date: "February 8, 2025"
description: "After creating the models we started to work on the API."
image: ""
author: "Michael"
id: 11
---

## Creating the API Endpoints

Today we worked on creating serializers to convert the Django models into JSON responses for the API.
Using the APIView model for API development, we built endpoints for, user registration, login
and logout.

POST and GET views for updating and viewing user progress, getting all questions users could
practice. There were also endpoints for uploading Audio from the answer, in base64 format.

Lastly there was an endpoint for getting an answer, as well as the details about the
mispronunciations of the user, it worked by transcribing the audio to text and then comparing
that to the native transcript making use of wav2vec. It then returns the word-by-word
pronunciation accuracy.

We had issues in implementing ffmpeg, as it's not on all systems. The issue was fixed by including the execution files in the project and specifying the exact paths to ffmpeg.exe and ffprobe.exe. To prevent errors, the path was set in settings.py to ensure it was configured before being used elsewhere.

We tested our APIs using Postman and Django’s built-in browser.

## Conclusion

Now that we have built the core backend API for our system, we will be focusing on the
frontend integration.