import RN from 'components/RN';
import React, {ReactNode} from 'react';

const Container = ({children}: {children: ReactNode}) => (
  <RN.View style={styles.container}>{children}</RN.View>
);

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default Container;
