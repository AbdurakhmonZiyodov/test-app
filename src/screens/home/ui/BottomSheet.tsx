import React, {ReactNode} from 'react';
import RN from 'components/RN';
import {COLORS} from 'utils';

const BottomSheet = ({children}: {children: ReactNode}) => {
  return <RN.View style={styles.container}>{children}</RN.View>;
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 16,
    borderRadius: 40,
    marginTop: 20,
  },
});

export default BottomSheet;
