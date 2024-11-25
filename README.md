Summary of how forms are processed

When a GET request is made to the base url i.e ('/'), the server serves the html file that contains the form. This is why when the user enters the base url which in our case is the localhost:3000, the user sees the form where he is asked to input his name.

The action on the form is set as a POST request to the /submit endpoint which is why we also have to equally make a post request in the index.js using the app.POST method. In this method, we make a requst to extract the name field from the form using req.body.name

We must keep in mind though that we have to parse the data sent to the form since the data is sent as a string, which the server can't understand. To translate it to a javascript object, we use a middleware app.use(express.urlencoded({ extended: true }));. With this, the server can understand which is why we can access the name property using req.body.name

This name property is used at the /submit endpoint which the user is redirected to automatically.
