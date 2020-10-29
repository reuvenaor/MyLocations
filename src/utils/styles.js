import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const widthPx = PixelRatio.getPixelSizeForLayoutSize(width);
const heightPx = PixelRatio.getPixelSizeForLayoutSize(height);

const FONT_RESIZE = 2;
// based scale
const scale = width / 320;
// width/height scale
const scaleR = width / height;

export function normalize(size) {
  let newSize = null;
  if (scale > 1) {
    newSize = size * scale;
  } else {
    newSize = size * scale * 0.9;
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - FONT_RESIZE;
}

export const Sizes = {
  HEADER_H: height * 0.11,
  TEXT_IN_H: height * 0.08,
  FAV_BOX: height * 0.15,
  PREC_2: height * 0.02,
  FONT: normalize(15)
}

export const Colors = {
  BLACK: '#000',
  LIGHT: '#eee',
  AMB: '#ddd',
  DARK: '#ccc',
}

export const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    zIndex: 1,
    flex: 1,
    backgroundColor: Colors.AMB,
    width: '100%',
    height: '100%'
  },
  body: { flex: 0.9, width: '100%', alignItems: 'center'  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  elevateFive: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  elevateFifteen: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2
  },
  box: {
    height: Sizes.FAV_BOX,
    marginTop: Sizes.PREC_3,
    borderRadius: Sizes.PREC_2,
    margin: '2%',
    backgroundColor: Colors.LIGHT,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});