---
title: "Starting our Project"
date: "January 31, 2025"
description: "We finally start our project development."
image: "/django.png"
author: "Michael"
id: 7
---

## Introduction

We started off the development period by setting up our backend, which would be the
backbone for the entire system. The backend would facilitate the core functionalities as it
would need to handle audio processing, speech-to-text conversion and data storage
efficiently. We decided to use Django, mainly due to its strength in rapid development,
scalability, security and familiarity.

Django also provides a brilliant Model-View-Controller architecture, which made it easy to
translate system classes into practical models, that are modular, scalable and easy to
maintain. Since our system needs to process user audio files, analyse pronunciation
accuracy and return feedback.
In this blog post, we will walk through the Django setup process, loosely covering everything
from installation to configuration. Let's dive in!

## Installation of Django and Dependencies

To start we need to install Django and its dependencies in a virtual environment so that we
can avoid conflicts with other Python projects. Modules like torchaudio and pydub are
needed to process audio files.
We then created our Django project and app. Modifying key files like settings.py and urls.py
to setup the project. We setup Django rest framework as we will be creating and using an
API.

## Next Steps

Now that Django is fully set up, our next tasks, are to define the database models,
building the Api for user authorisation and uploading/processing speech recordings.
Integrating speech-to-text models for pronunciation evaluation.