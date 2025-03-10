---
title: "Frontend Components"
date: "February 4, 2025"
description: "We implemented the landing page and navbar component."
image: ""
author: "Rene"
id: 9
---

Now that we agreed on the general aesthetic and design for our website, we dove into setting
up Next.js and Tailwind CSS. Once Tailwind was configured, we began with setting up the
register and login components. We took influence from other websites so we could mimic the
professional look of other websites.

We first started with the login form. We used the Shadcn card component and the input and button components for the form. Once the login form was completed, it was easy to copy this design for the register form. It took a while to figure out how to center the forms on the page. We had the right approach with the flex container; however, the main problem was that we didn't set the height. Setting background colors for all the containers really helped here. 

```jsx
<div className='h-screen flex items-center justify-center'>
      <LoginForm />
</div>
```

Next, we worked on the navbar. We used the Toolbar components for this. Again, the main issue here was figuring out how to apply spacing. This time we needed to apply spacing inside the toolbar component. We finally realized you can add a container inside the toolbar component.
```jsx
 <Menubar className='flex flex-row min-h-16 sm:px-2 md:px-16 lg:px-40'>
 ```

 We made sure to apply classes that make the navbar responsive on different device sizes.

 For the hero section, we made use of the hero section block provided by Shadcn.

## Final Thoughts

Using background colors is a great way to debug CSS. It really gives you an understanding of what is happening and why the elements are behaving the way they are.