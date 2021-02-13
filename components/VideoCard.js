import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Video } from 'react-native-video';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';


class VideoCard extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, videoStyle } = this.props;
    
    const videoStyles = [
      full ? styles.fullVideo : styles.horizontalVideo,
      videoStyle
    ];
    const videoCardContainer = [styles.card, styles.shadow, style];
    const videoContainer = [styles.videoContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (
      <Block row={horizontal} videoCard flex style={videoCardContainer}>
        {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex style={videoContainer}>
            <Video source={{uri: item.data}} style={videoStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
          <Block flex space="between" style={styles.videoCardDescription}>
            <Text size={14} style={styles.videoCardTitle}>{item.title}</Text>
            <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>
          </Block>
        </TouchableWithoutFeedback> */}
      </Block>
    );
  }
}

VideoCard.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  videoStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  videoCard: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  videoCardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  videoCardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  videoContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  video: {
    // borderRadius: 3,
  },
  horizontalVideo: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullVideo: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(VideoCard);