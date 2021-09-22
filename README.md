# Reddit Lite

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Redux


## Features


### Post Listing (Posts)

Displays a list of posts, initialised with most popular posts. Posts can be filtered by search term or subreddits.


### Search

Filters post listing based on terms entered by the user.
Displays button to return to home page (most popular posts) if no results are found.

### Categories (SubReddits)

- Loads a list of subreddits that can be selected by the user. 
- Filters post listing based on selected subreddit.
- If a subreddit doens't load any posts, displays a button to return to home.


### Post

Displays information passed from posts component:
- Post title
- Post author
- Post body
- Media
- Comments (Component)
- Voting (Component)


### Comments 

Loads comments associated with current post. 

**Functionality:**
- Three comments are loaded when user clicks on comment icon.
- All comments to be loaded when user clicks on 'Load more comments'.
- User is not able to add new commments.


### Voting

Loads post rating (up votes minus down votes).

**Functionality:**

- User can vote up or down, chaging the post rating.


