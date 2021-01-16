import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { VideoCard } from '../components/VideoCard';
import { videos } from "../constants/";

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderVideos = () => {
    return (
      // <ScrollView
      //   showsVerticalScrollIndicator={false}
      //   contentContainerStyle={styles.articles}>
      //   <Block flex>
      //     <Card item={articles[0]} horizontal  />
      //     <Block flex row>
      //       <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
      //       <Card item={articles[2]} />
      //     </Block>
      //     <Card item={articles[3]} horizontal />
      //     <Card item={articles[4]} full />
      //   </Block>
      // </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.videos}>
        <Block flex>
        <VideoCard item={videos[0]} horizontal  />
          <Block flex row>
            <VideoCard item={videos[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <VideoCard item={videos[0]} />
          </Block>
          <VideoCard item={videos[1]} horizontal />
          <VideoCard item={videos[0]} full />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderVideos()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  videos: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
