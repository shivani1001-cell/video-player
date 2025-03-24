/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useRef, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import Video from "react-native-video";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const videos = [
  {
    "id": "1",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/87def849-5bbc-4c8c-8044-0770b75c946e/360/360.m3u8",
    "user": {
      "username": "user1",
      "profilePic": "PROFILE_PIC_URL_1"
    },
    "description": "Breathtaking sunset over the mountains! #sunset #nature",
    "likes": "1.2K",
    "comments": "234"
  },
  {
    "id": "2",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/20dcb601-c9a4-400f-851a-a17557c80991/360/360.m3u8",
    "user": {
      "username": "user2",
      "profilePic": "PROFILE_PIC_URL_2"
    },
    "description": "Joining the viral dance challenge! Can you do it too? 💃🔥 #dance #viral",
    "likes": "4.5K",
    "comments": "567"
  },
  {
    "id": "3",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/5dcdda30-e2d5-487e-866f-e394bd605fad/360/360.m3u8",
    "user": {
      "username": "user1",
      "profilePic": "PROFILE_PIC_URL_1"
    },
    "description": "Golden hour magic! The sky looks like a painting. #sunset #aesthetic",
    "likes": "1.2K",
    "comments": "234"
  },
  {
    "id": "4",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/8f264642-2966-4872-9625-c562ce2b4ef0/360/360.m3u8",
    "user": {
      "username": "user2",
      "profilePic": "PROFILE_PIC_URL_2"
    },
    "description": "Trying out new moves! Let's get this trending. 💃🕺 #dance #trending",
    "likes": "4.5K",
    "comments": "567"
  },
  {
    "id": "5",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/02fff321-702b-40f0-a78b-66ca370d9fcf/360/360.m3u8",
    "user": {
      "username": "user1",
      "profilePic": "PROFILE_PIC_URL_1"
    },
    "description": "Peaceful beachside sunset 🌊🌅 #relax #serene",
    "likes": "1.2K",
    "comments": "234"
  },
  {
    "id": "6",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/2c5a2558-3e14-42f4-b586-f7a9391f2d7b/360/360.m3u8",
    "user": {
      "username": "user2",
      "profilePic": "PROFILE_PIC_URL_2"
    },
    "description": "Energy level 💯! Who's dancing with me? 🔥 #dance #fun",
    "likes": "4.5K",
    "comments": "567"
  },
  {
    "id": "7",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/cabdb3c4-40ef-4b36-b049-52d9f6806485/360/360.m3u8",
    "user": {
      "username": "user1",
      "profilePic": "PROFILE_PIC_URL_1"
    },
    "description": "Golden sky, calming vibes! ☀️✨ #nature #sunset",
    "likes": "1.2K",
    "comments": "234"
  },
  {
    "id": "8",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/b2057e9a-9bd7-4b7d-b67a-758983baafec/360/360.m3u8",
    "user": {
      "username": "user2",
      "profilePic": "PROFILE_PIC_URL_2"
    },
    "description": "Another day, another dance challenge! Let's go! 🎶💃 #dance #viral",
    "likes": "4.5K",
    "comments": "567"
  },
  {
    "id": "9",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/1176dd48-9872-4e3f-ac35-4f66069e5c1c/360/360.m3u8",
    "user": {
      "username": "user1",
      "profilePic": "PROFILE_PIC_URL_1"
    },
    "description": "Sunset hitting just right! 🌄🔥 #sunsetlovers",
    "likes": "1.2K",
    "comments": "234"
  },
  {
    "id": "10",
    "videoUrl": "https://cdn.cohort.social/glimps/900cd98d-43c9-4da8-8a29-45227a355d80/videos/3733f9a5-2369-4999-8e23-ace0afded73d/360/360.m3u8",
    "user": {
      "username": "user2",
      "profilePic": "PROFILE_PIC_URL_2"
    },
    "description": "Bringing the heat! 🔥 This dance is a must-try! #dance #trend",
    "likes": "4.5K",
    "comments": "567"
  }
];

const VideoItem = ({ item, isActive }) => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(!isActive);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false); 

  useEffect(() => {
    setPaused(!isActive);
  }, [isActive]);

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePlayPause} style={styles.videoContainer}>
      <Video
        ref={videoRef}
        source={{ uri: item.videoUrl }}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={paused}
        muted={muted}
        onBuffer={() => setLoading(true)}
        onLoad={() => setLoading(false)}
        onError={(error) => console.log("Video Error:", error)}
      />

      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}

      <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
        <Image
          source={muted ? require("./src/images/mute.png") : require("./src/images/unmute.png")}
          style={styles.muteIcon}
        />
      </TouchableOpacity>

      <View style={styles.overlay}>
        <View style={styles.userInfo}>
          <Image source={require("./src/images/man.png")} style={styles.profilePic} />
          <Text style={styles.username}>{item.user.username}</Text>
        </View>
        <View style={styles.actions}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("./src/images/like.png")} style={styles.profilePic} />
            <Text style={styles.actionText}>{item.likes}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
            <Image source={require("./src/images/comments.png")} tintColor="lightblue" style={styles.profilePic_} />
            <Text style={styles.actionText}>{item.comments}</Text>
          </View>
        </View>
        <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <VideoItem item={item} isActive={index === activeIndex} />}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.y / height);
          setActiveIndex(index);
        }}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  videoContainer: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width,
    height,
  },
  muteButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 20,
  },
  muteIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  userInfo: {
    position: "absolute",
    top: 20,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  profilePic: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  profilePic_: {
    width: 28,
    height: 25,
    marginRight: 10,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  actions: {
    position: "absolute",
    bottom: 60,
    right: 20,
  },
  actionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    color: "white",
    fontSize: 14,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 60,
  },
});


export default App;
