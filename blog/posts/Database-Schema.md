---
title: "Designing the Database Schema"
date: "February 6, 2025"
description: "Our Process for designing the database models."
image: "/schema.png"
author: "Michael"
id: 10
---

## Introduction

With our Django and Wav2Vec setup having been completed, the next big milestone would
be the implementation of the backend APIs. This is the heart of our system, responsible for
handling user registration, login, logout, handling user audio uploads, processing speech,
running wav2vec models, and returning feedback.

In this blog post we walk through the start of designing the database models, which will be needed when creating API endpoints and integrating the speech-to-text models to evaluate pronunciation.

We decided to meet up at the Ultimate Coffee cafe to discuss what are the requirements for the schema. I needed Rene's input on what he expected the responses from the API calls to contain so I could know how to structure the requests.

## Designing the Database Models

Our system has five main models. A User model for login, including features like email,
username and password. We then had a Difficulty model, which was used as a means to
classify the phrases by difficulty.

The Phrase model was modeled after the question a user would have to answer. It had the
phrases as text, a difficulty classification, and the correct pronunciation of the phrase as
audio.

The Answer model's main goal is to store user responses to the questions. It tracked which
question was being answered, it held audio in base64 format and converts it to wav.
The Progress class saved the progress of a user, containing a list of what questions have
been answered by a user and keeping track of the scores.

Next, we have to serialize these models to convert the models into JSON.


