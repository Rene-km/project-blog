---
title: "Project Proposal"
date: "October 18, 2024"
description: "This blog gives an overview of our process in writing our project proposal."
image: "/proposal.jpg"
author: "Rene"
id: 2
---

We met with Ellen Rushe to discuss our project idea. As her research centres around deep learning with limited labels, with a focus on audio and visual data, we thought she would be a good supervisor for us.

During our meeting she was interested in our idea and provided insight into which models can be used to implement the project. The following is a brief overview of our proposal.

## How The Project Works
Users will be able to record their voice, and our application will:

1. Record their voice and have it transcribed.
2. Analyze pronunciation accuracy and provide feedback.
3. Allow users to track their progress over time.

## Tech Stack

Our tech stack is not too complex. It includes technology we are familiar and have not used before.

- Next.js (TypeScript) – For an intuitive and responsive web interface.
- Django (Python) – Handling data processing, authentication, and API requests.
- PyTorch & Wav2Vec – Using pre-trained speech recognition models to transcribe and analyze user pronunciation.

We decided to use Next.js as we both have experience with React. Next.js has added features on top such as server-side rendering and an app router. Although this project can be implemented using React, we want to use this as a chance to learn new skills.

For our backend we could have opted to use Flask as most Wav2Vec documentation shown makes use of it, however Django is more practical for our use case as it provides more functionality out of the box and is suited for more complex applications.

## Division of Work

To develop the application me and Michael plan to develop the application as follows:

**Rene**

- Building the user interface using Next.js.
- Sending user audio from the frontend to the backend.
- Implementing authentication (login, registration, profile management).
- Creating a progress-tracking dashboard for users.

**Michael**

- Building the backend using Django.
- Receiving and processing audio from users.
- Integrating PyTorch models for speech-to-text transcription.
- Sending feedback data back to the frontend.

## Final Thoughts

The both of us are looking forward to working on this project. It is an exciting and ambitious project that combines web development, speech recognition and AI. We are looking forward to the challenges, learning experiences, and innovations that will come from developing this application.