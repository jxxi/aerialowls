import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import videos from '../constants/videos';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderVideos = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.videos}>
        <Block flex>
          <Card item={videos[0]} horizontal  />
          <Block flex row>
            <Card item={videos[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={videos[2]} />
          </Block>
          <Card item={videos[3]} horizontal />
          <Card item={videos[4]} full />
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
