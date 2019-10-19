This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Notes on the Code

### Fetching data
At the moment there is no caching implemented on the data collected from the Unsplash API.
The pictures live in the global store under the key `pictures`. Each time a search is performed the results will be stored on the same key of the store and the previous data lost. Each time the use navigates to the home page, a new request for the latest pictures is made.

### Data model
Each picture got from the api is represented like the below example. The same object is used to store the favourites in the local storage. In the comments in the code we refer to this structure as the "picture object". It does not find a parallel in the propTypes definitions since only few fields are used. However, it is kept in it's full form for future developments.
```json
{
  alt_description: "two Honest Beauty mascaras on table",
  categories: [],
  color: "#110D0D",
  created_at: "2019-07-11T19:21:05-04:00",
  current_user_collections: [],
  description: null,
  height: 2700,
  id: "iXFelifXseA",
  liked_by_user: false,
  likes: 110,
  links: {self: "https://api.unsplash.com/photos/iXFelifXseA", html: "https://unsplash.com/photos/iXFelifXseA", download: "https://unsplash.com/photos/iXFelifXseA/download", download_location: "https://api.unsplash.com/photos/iXFelifXseA/download"},
  promoted_at: null,
  sponsorship: {impressions_id: "5209903", tagline: "Clean beauty that works.", sponsor: {…}},
  updated_at: "2019-10-14T01:03:23-04:00",
  urls: {raw: "https://images.unsplash.com/photo-1562887245-138c2f45013e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk2NzI2fQ", full: "https://images.unsplash.com/photo-1562887245-138c2…&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjk2NzI2fQ", regular: "https://images.unsplash.com/photo-1562887245-138c2…nysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk2NzI2fQ", small: "https://images.unsplash.com/photo-1562887245-138c2…inysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjk2NzI2fQ", thumb: "https://images.unsplash.com/photo-1562887245-138c2…inysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjk2NzI2fQ"},
  user: {id: "o9M2-GtNlBE", updated_at: "2019-10-18T10:58:11-04:00", username: "honest", name: "The Honest Company", first_name: "The Honest Company", …},
  width: 2700,
}
```