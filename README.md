This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## How to run project

First create file src/app/config.js. Contents shoule be:

```
export const config = {
  uploaderUrl: <uploader_url>,
  apiUrl: <apiUrl>,
  apiToken: "Bearer <apiToken>"
}
```

1. Open the project directory and run `npm install`
2. Run `yarn start`

## Sample React App for Synq uploader

1. Website should display list of video Ids. 
2. Clicking the upload button will create a new video id and display the synq uploader.

## Features to be added

Clicking the video id should play the videos
Create page with style
