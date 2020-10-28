import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const widthPx = PixelRatio.getPixelSizeForLayoutSize(width);
const heightPx = PixelRatio.getPixelSizeForLayoutSize(height);

const FONT_RESIZE = 2;
// based scale
const scale = width / 320;
// width/height scale
const scaleR = width / height;

export function normalize(size) {
  console.log('normalize')
  let newSize = null;
  if (scale > 1) {
    newSize = size * scale;
  } else {
    newSize = size * scale * 0.9;
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - FONT_RESIZE;
  // if (Platform.OS === 'ios') {
  //     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - FONT_RESIZE;
  // } else {
  //     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - FONT_RESIZE;
  // }
}

export const Sizes = {
  HEADER_H: height * 0.1,
  TEXT_IN_H: height * 0.08,
  FAV_BOX: height * 0.15,
  PREC_2: height * 0.02,
  PREC_3: height * 0.03,
  HALF: height * 0.5,
  FONT: normalize(15)
}


export const Strings = {
  HOME: 'Home',
  CREATE: 'Create'
}

export const Colors = {
  LIGHT: '#eee',
  AMB: '#ddd',
  DARK: '#ccc',
}

export const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#333',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});