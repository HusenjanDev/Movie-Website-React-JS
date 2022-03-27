# Information
This section of the document is information. In this section of the document I'll go through explaining what the website is about and how it works. The website uses React JS framework to update component each time an user search the term will be used to find movies that matches what the user searched. If the user searched for "Batman" all the batman movies would show up.

# Setup
This section of the document is the setup. In the beginning the website won't work because the user will need to register in http://www.omdbapi.com/ and replace the following code.... 
```
async function searchMovies(title)
{
    const response = await fetch(`${'http://www.omdbapi.com/?apikey=__ReplaceMe__'}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
}
```
Replace the "__ReplaceMe__" with the API key you obtained from omdbapi.com and the website will work without any issues.

# Todo
This section of the document is the Todo. There are a lot of features that I'm going to implement soon such...
* Filter options
* Showing the ratings
* Filering depending on date
These are some of the features that I'll implement once I have some time.
