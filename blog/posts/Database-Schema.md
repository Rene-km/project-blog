---
title: "Designing the Database Schema"
date: "October 10, 2024"
description: "Our Process for for designing the database models."
image: "/schema.png"
author: "Michael"
id: 6
---

## Introduction

With our Django setup having been completed in the last blog, the next big milestone would
be the implementation of the backend APIs. This is the heart of our system, responsible for
handling user registration, login, logout, handling user audio uploads, processing speech,
running wav2vec models, and returning feedback.

In this blog post we walk through the designing of the database models, creating API
endpoints and Integrating the speech-to-text models to evaluated pronunciation.

We decided to meet up at the Ultimafe Coffee cafe to discuss what are the requirements for the schema. I needed Rene's input on what he expected the responses from the API calls to contain so I could know how to structure the requests.

## Designing the Database Models

Our system has five main models. A User model for login, including features like email,
username and password. We then had a Difficulty model, which was used as means to
classify the phrases by difficulty.

The Phrase model, was modelled after the question a user would have to answer. It had the
phrases as text, a difficulty classification, and the correct pronunciation to the phrase as
audio.

The Answer model’s main goal is to store user responses to the questions. It tracked which
question was being answered, it held audio in base64 format and converts it to wav.
The Progress class saved the progress of a user. Containing a list of what questions have
been answered by a user and keeping track of the scores.

## Creating the API Endpoints

We then created serializers to convert the Django models into JSON responses for the API.
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

In this blog, we built the core backend API for our system. Next we will be focusing on the
frontend integration.