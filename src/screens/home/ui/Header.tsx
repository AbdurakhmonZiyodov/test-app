import React from 'react';
import RN from 'components/RN';
import {COLORS} from 'utils';
import useVisibility from 'hooks/useVisibility';

const Header = () => {
  const visiblity = useVisibility(true);
  const isTrending = visiblity.visible;
  const isNFT = !visiblity.visible;

  const actions = {
    onPressTrending: () => {
      visiblity.show();
    },
    onPressNFT: () => {
      visiblity.hide();
    },
  };
  return (
    <RN.View style={styles.container}>
      <RN.TouchableOpacity
        activeOpacity={0.5}
        onPress={actions.onPressTrending}
        style={[styles.button, isTrending && styles.whiteBc]}>
        <RN.Text
          style={[
            styles.buttonText,
            isTrending ? styles.blackText : styles.whiteText,
          ]}>
          Trending
        </RN.Text>
      </RN.TouchableOpacity>
      <RN.TouchableOpacity
        activeOpacity={0.5}
        onPress={actions.onPressNFT}
        style={[styles.button, isNFT && styles.whiteBc]}>
        <RN.Text
          style={[
            styles.buttonText,
            isNFT ? styles.blackText : styles.whiteText,
          ]}>
          NFTs
        </RN.Text>
      </RN.TouchableOpacity>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    marginHorizontal: 16,
    padding: 4,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: -20,
    zIndex: 1,
  },
  blackText: {
    color: COLORS.black,
  },
  whiteText: {
    color: COLORS.white,
  },
  blackBc: {
    backgroundColor: COLORS.black,
  },
  whiteBc: {
    backgroundColor: COLORS.white,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21.26,
    textAlign: 'center',
  },
  button: {
    borderRadius: 100,
    width: '50%',
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
  },
});
export default Header;
