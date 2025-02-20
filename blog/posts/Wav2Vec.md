---
title: "Wav2vec"
date: "October 10, 2024"
description: "We worked on ensuring the model worked and could perform speech comparison."
image: ""
author: "Michael"
id: 8
---

Before moving on with the backend, we decided to work on getting the model to work. As this is the main component of our project, it was crucial we were able to make it run and perform the pronunciation feedback.

Luckily, the documentation on how to load the model was not too difficult. Most of the time was spent on comparing the learner's attempt to the native pronunciation.

The comparison process evaluates the learner's pronunciation by breaking both the native transcript and learner transcript into individual words and aligning them. If the words are identical, they receive a 100% similarity score. Otherwise, we use SequenceMatcher to measure how closely the learner's word matches the native pronunciation, returning a similarity score between 0% and 100%.

This method allows us to detect partial correctness instead of strict correctness, which would not provide much feedback to the user on how well their attempt was.
