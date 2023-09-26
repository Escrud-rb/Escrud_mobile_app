// In App.js in a new project

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons/';
import Icons from 'react-native-vector-icons/Ionicons';
import { Avatar, Text, Title, Headline, Card, Paragraph, Button } from 'react-native-paper';

import style from './style';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const styles = StyleSheet.create(style)

export default function HomeScreen({route, navigation}) {
  const [currentUser] = useState({
    profile_image: 'https://randomuser.me/api/portraits/men/73.jpg',
  });

  const [posts] = useState([
    {
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: 'https://randomuser.me/api/portraits/men/26.jpg',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      name: 'Adam Walker',
      username: 'adam_walker16',
      userProfileImage: 'https://randomuser.me/api/portraits/men/71.jpg',
      postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      postImage:
        'https://images.pexels.com/photos/4881622/pexels-photo-4881622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: 132,
      comments: 26,
    },
    {
      name: 'Hailey Diaz',
      username: 'hailey192',
      userProfileImage: 'https://randomuser.me/api/portraits/women/73.jpg',
      postText: 'Lorem ipsum 🐶',
      postImage:
        'https://images.pexels.com/photos/2691779/pexels-photo-2691779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: 459,
      comments: 133,
    },
  ]);


  function getRandomImage() {
    let max = 100;
    let min = 1;
    let n = Math.floor(Math.random() * (max - min + 1) + min);
    let url = `https://randomuser.me/api/portraits/${
      n % 2 == 0 ? 'men' : 'women'
    }/${n}.jpg`;
    return url;
  }

  function Post({ post }) {
    return (
      <View style={styles.postView}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{
                uri: post.userProfileImage,
              }}
            />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text style={{ color: '#333', fontFamily: 'QuicksandSemiBold', fontSize: 18 }}>
              {post.name}
            </Text>
            <Text
              style={{ color: '#333', fontFamily: 'QuicksandRegular', fontSize: 16 }}
            >
              {post.username}
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name='more-horizontal' color='#333' size={28} />
          </TouchableOpacity>
        </View>
        {/* Post Content */}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: '#fafafa',
              fontFamily: 'QuicksandRegular',
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          >
            {post.postText}
          </Text>
          {post.postImage ? (
            <Image
              style={{ width: '100%', height: 300, marginTop: 10 }}
              source={{ uri: post.postImage }}
            />
          ) : null}
        </View>
        {/* Post Stats */}
        <View
          style={{ marginTop: 10, flexDirection: 'row', paddingHorizontal: 10 }}
        >
          <TouchableOpacity style={styles.postStatsOpacity}>
            <Icon name='heart' color='#333' size={16} />
            <Text
              style={{
                marginLeft: 6,
                fontFamily: 'QuicksandRegular',
                color: '#333',
              }}
            >
              {post.likes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.postStatsOpacity,
              marginLeft: 10,
            }}
          >
            <Icon name='message-circle' color='#333' size={16} />
            <Text
              style={{
                marginLeft: 6,
                fontFamily: 'QuicksandRegular',
                color: '#333',
              }}
            >
              {post.comments}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ ...styles.container }}>
      <ScrollView>
        {/* Search Bar View */}
        <View style={{ ...styles.searchBarView }}>
          <View style={{ ...styles.searchBar }}>
            <Icon name='search' size={22} color='#666' />
            <TextInput
              style={{
                paddingHorizontal: 6,
                color: '#666',
                fontFamily: 'QuicksandRegular',
                fontSize: 16,
              }}
              placeholder='Search'
              placeholderTextColor='#666'
            />
          </View>
          <TouchableOpacity>
            <Image
              style={{ ...styles.userProfileImage }}
              source={{ uri: currentUser.profile_image }}
            />
          </TouchableOpacity>
        </View>
        {/* Stories View */}
        <View style={{ ...styles.storiesView }}>
          <View style={styles.storiesViewTitleView}>
            <Headline style={{ ...styles.storiesViewTitle }}>Vous artistes</Headline>
            <Text style={{ ...styles.showAllText }}>Tout voir</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              {Array(10)
                .fill(0)
                .map((s) => (
                  <TouchableOpacity style={{ ...styles.storyUserProfile }}>
                    <Image
                      style={styles.storyUserProfileImage}
                      source={{ uri: getRandomImage() }}
                    />
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        </View>
        {/* Stories View */}
        <View style={{ ...styles.storiesView }}>
          <View style={styles.storiesViewTitleView}>
            <Headline style={{ ...styles.storiesViewTitle }}>Playlist</Headline>
            <Text style={{ ...styles.showAllText }}>Tout voir</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              {Array(10)
                .fill(0)
                .map((s) => (
                  <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                      <Title>Card title</Title>
                      <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                      <Button>Cancel</Button>
                      <Button>Ok</Button>
                    </Card.Actions>
                  </Card>
                ))}
            </View>
          </ScrollView>
        </View>
        {/* Posts View */}
        <View style={styles.postsView}>
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </View>
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </View>
  );
}