---
title: "Data and Tables"
date: "October 10, 2024"
description: "With the endpoints created we looked to integrate them into the frontend."
image: ""
author: "Rene"
id: 12
---

We moved our attention to the table component that will display the phrases. We used Shadcn data table component to achieve this. This is built on TanStack's React table library. After gaining an understanding of the TanStack documentation, we created a table using mock data.

## API Calls

Originally, we had planned to simply use the fetch API and useEffect for making requests, but after using the TanStack tables, we discovered that they have another library named TanStack Query, which is an asynchronous state-management library. 

```jsx
const result = useQuery({
     queryKey: ['todos'], 
     queryFn: fetchTodoList 
     })
```

We had a few problems with the API calls, noticeably with CORS headers and the allowed origins of the requests. Additionally, there was a 403 error which took a while to figure out. We were not including the credentials in the requests and used http://127.0.0.1:8000/ instead of localhost:8000. After this, we were able to fetch the data.

Using the backend API, we could highlight which questions were already answered by the user, so they could keep track of which questions they've answered and which questions they needed to answer.
