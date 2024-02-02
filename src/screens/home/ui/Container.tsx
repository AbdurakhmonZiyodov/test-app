import RN from 'components/RN';
import React, {FC, ReactNode, useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from 'utils';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({children}) => {
  const {top} = useSafeAreaInsets();
  const additionStyle = useMemo(() => ({paddingTop: top}), [top]);
  return (
    <RN.View style={[styles.container, additionStyle]}>{children}</RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Container;
