import React from 'react';
import RN from 'components/RN';
import {COLORS} from 'utils';
import {SearchIcon} from 'assets/icons';

const Header = () => {
  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Game Projects</RN.Text>
      <SearchIcon />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: COLORS.white,
  },
});

export default Header;
