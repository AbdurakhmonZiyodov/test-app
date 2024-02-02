import {ETHImage, GroupImage} from 'assets/images';
import RN from 'components/RN';
import {map} from 'lodash';
import React from 'react';
import {COLORS} from 'utils';
import {mockCards as data} from '../contants';

type CardType = {
  title: string;
  name: string;
  Image: ReturnType<typeof require>;
};

const CardList = () => {
  const renderItem = (item: CardType, key: number) => (
    <RN.View style={styles.cardContainer} key={key.toString()}>
      <RN.View style={styles.cardGroupImage}>
        <GroupImage />
      </RN.View>

      <RN.View top={50} left={20} style={styles.cardTitleContainer}>
        <RN.Text style={styles.cardTitle}>{item.title}</RN.Text>
      </RN.View>

      <RN.View top={90} left={20} style={styles.cardNameContainer}>
        <RN.Text style={styles.cardName}>{item.name}</RN.Text>
      </RN.View>

      <RN.View top={150} left={20} style={styles.buttonsContainer}>
        <RN.TouchableOpacity style={styles.button}>
          <ETHImage width={24} height={24} />
          <RN.Text>ETH</RN.Text>
        </RN.TouchableOpacity>
        <RN.TouchableOpacity style={styles.button}>
          <RN.Text>29 NFTs</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>

      <RN.View style={styles.rightBackground}>
        <RN.Image style={styles.rightBackgroundImage} source={item.Image} />
      </RN.View>
    </RN.View>
  );

  const renderList = () => map(data, renderItem);

  return <RN.View style={styles.container}>{renderList()}</RN.View>;
};

const styles = RN.StyleSheet.create({
  container: {
    gap: 20,
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    height: 200,
    borderRadius: 24,
    borderWidth: 1,
  },
  cardGroupImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    top: -10,
  },
  cardTitle: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  cardTitleContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: COLORS.blue,
    position: 'absolute',
    zIndex: 1,
    borderRadius: 100,
  },
  cardName: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
    color: COLORS.black,
  },
  cardNameContainer: {
    position: 'absolute',
  },
  buttonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 0.5,
    borderColor: COLORS.black,
    height: 30,
    borderRadius: 30,
  },
  rightBackground: {
    position: 'absolute',
    right: -30,
  },
  rightBackgroundImage: {
    height: 200,
    resizeMode: 'cover',
    width: 200,
  },
});

export default CardList;
