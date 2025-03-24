## React Native Video Player

A React Native application that showcases a vertically scrollable list of videos, each with play/pause and mute/unmute functionality, along with user information and engagement statistics.

## Features

1. Vertical Video Feed: Scroll through a list of videos in a TikTok-like vertical feed.

2. Play/Pause Control: Tap on a video to toggle between play and pause states.

3. Mute/Unmute Control: Mute or unmute video audio using the on-screen mute button.

4. User Information Overlay: Displays the username and profile picture of the video uploader.

5. Engagement Statistics: Shows the number of likes and comments for each video.

6. Loading Indicator: Displays a loader while the video is buffering or loading.

## Setup Instructions

## Clone the Repository:

1. git clone https://github.com/shivani1001-cell/video-player.git
2. cd video-player

## Install Dependencies:

yarn install

## Navigate to the ios directory and install pods:

cd ios
pod install
cd ..

## Run the Application:

1. For iOS:

react-native run-ios

2. For Android:

react-native run-android

## Project Structure

video-player/
│-- src/
│   │-- images/          # Image assets (icons, profile pictures)
│-- ios/                 # iOS project files
│-- android/             # Android project files
│-- App.js               # Main application component
│-- package.json         # Project dependencies and scripts
│-- README.md            # Project documentation

## Dependencies

1. react-native-video: For video playback functionality.

2. react-native-gesture-handler: To handle gestures like tapping and scrolling.

3. react-navigation: For navigation within the app.

4. react-native-reanimated: For animations and gesture handling.


## Contact

For questions or suggestions, please open an issue in this repository.

