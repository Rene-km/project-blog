---
title: "Frontend Components"
date: "October 10, 2024"
description: "We implemented the landing page and navbar componenet."
image: ""
author: "Michael"
id: 10
---

Now that we agreed on the general aesthetic and design for our website we dove in to setting
up Next.js and Tailwind CSS. Once tailwind was configured we began with setting up the
register and login componentes. We took influence from other websites so we could mimic the
professional look of other websites.

We first started with the login form. We used the Shadcn card component and the input and button compenents for the form. Once the login form was completede it was easy to copy this design for the register form. It took a while to figure out how to center the forms in the page. We had the right appraoch with the flex container, however the main problem was that we didn't set the height. Setting background colours for all the containers really helped here. 

```jsx
<div className='h-screen flex items-center justify-center'>
      <LoginForm />
</div>
```

Next we worked on the navbar. We used the Toolbar components for this. Again the main issue here was figuring out how to apply spacing. This time we neede to apply spacing inside the toolbar component. We finally realsied you can add a container inside the toolbar component.
```jsx
 <Menubar className='flex flex-row min-h-16 sm:px-2 md:px-16 lg:px-40'>
 ```

 We made sure to apply classes that make the navbar responsive on different device sizes.

 For the hero section we made use of the hero section block provided by Shadcn.

## Login and Register API

For the form schema we used zod. This is a Type-safe validation library. Fetch API was then used for the POST requests. On a successfull request the router sends the use to the appropriate route.

## Final Thoughts

 Using backgroung colours is a a great way to debug CSS. It really gives you an understading on what is happening and why the elements are behaving they way they are.
