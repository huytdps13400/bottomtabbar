import React, {useRef, useState} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {images} from '../../../assets';
import {width} from '../../../utils/responsive';
const DATA = [1, 2, 3];
const _renderItem = ({item, index}, parallaxProps) => {
  return (
    <View style={styles.item} key={index}>
      <ParallaxImage
        source={images.banner}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        fadeDuration={500}
        showSpinner
        spinnerColor={'#FC9733'}
        {...parallaxProps}
      />
    </View>
  );
};
const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={{paddingTop: top + 10}}>
      <Carousel
        sliderWidth={width}
        sliderHeight={width}
        itemWidth={width - 60}
        data={DATA}
        layout="default"
        hasParallaxImages={true}
        onSnapToItem={item => setIndex(item)}
        renderItem={_renderItem}
        autoplay={true}
        loop
        ref={isCarousel}
        useScrollView={true}
        initialNumToRender={3}
        removeClippedSubviews={false}
      />

      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#FC9733',
        }}
        inactiveDotStyle={{
          backgroundColor: '#707070',
          width: 15,
          height: 15,
          borderRadius: 15 / 2,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  item: {
    width: width - 60,
    height: width / 2,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: width / 2,
    resizeMode: 'contain',
  },
});
