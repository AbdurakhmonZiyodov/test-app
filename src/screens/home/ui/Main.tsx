import React, {FC, ReactNode} from 'react';
import RN from 'components/RN';
import {COLORS, addAlpha} from 'utils';
import FilterList from './FilterList';
import GameProjects from 'components/game-projects';
import BottomSheet from './BottomSheet';
import {SIZES} from 'utils/sizes';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  children: ReactNode;
};

const colors = [addAlpha(COLORS.black, 0.7), addAlpha(COLORS.black, 0)];
const MIN_Y = 0;
const MAX_Y = 400;

const Main: FC<Props> = ({children}) => {
  const offset = useSharedValue(MIN_Y);

  const pan = Gesture.Pan()
    .onChange(event => {
      const offsetDelta = event.changeY + offset.value;
      if (offsetDelta < MIN_Y) {
        return;
      }
      offset.value = offsetDelta;
    })
    .onFinalize(event => {
      if (event.translationY > MIN_Y) {
        offset.value = withSpring(MAX_Y);
        return;
      }

      if (event.translationY < MAX_Y) {
        offset.value = withSpring(MIN_Y);
        return;
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: offset.value,
      },
    ],
  }));

  const background = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offset.value,
      [MIN_Y, MAX_Y],
      colors,
    );

    return {
      backgroundColor,
    };
  });

  return (
    <>
      <Animated.View
        style={[styles.bgColor, RN.StyleSheet.absoluteFill, background]}
      />
      <Animated.View style={[styles.main, translateY]}>
        {children}
        <FilterList />

        <BottomSheet>
          <GestureDetector gesture={pan}>
            <RN.View style={styles.lineContainer}>
              <RN.View style={styles.line} />
            </RN.View>
          </GestureDetector>
          <GameProjects />
        </BottomSheet>
      </Animated.View>
    </>
  );
};

const styles = RN.StyleSheet.create({
  main: {
    backgroundColor: COLORS.darkBlue,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingTop: 40,
    height: SIZES.height,
  },
  lineContainer: {
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 10,
    zIndex: 2,
  },
  line: {
    width: 70,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
  bgColor: {
    backgroundColor: addAlpha(COLORS.black, 0.7),
  },
});

export default Main;
