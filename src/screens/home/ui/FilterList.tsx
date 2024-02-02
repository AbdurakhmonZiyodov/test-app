import RN from 'components/RN';
import React, {useState} from 'react';
import {COLORS, addAlpha} from 'utils';
import {filterList} from '../constans';
import {ListRenderItem} from 'react-native';
import {ActiveCheckboxIcon} from 'assets/icons';

const FilterList = () => {
  const [activeFilter, setFilter] = useState(filterList[0]);

  const actions = {
    onChangeFilter: (value: string) => () => setFilter(value),
  };

  const renderItem: ListRenderItem<string> = ({item: value}) => {
    const isActive = value === activeFilter;
    const Icon = isActive ? ActiveCheckboxIcon : RN.View;
    return (
      <RN.TouchableOpacity
        style={[styles.button, isActive && styles.activeButton]}
        onPress={actions.onChangeFilter(value)}>
        <Icon />
        <RN.Text
          style={[styles.buttonText, isActive && styles.activeButtonText]}>
          {value}
        </RN.Text>
      </RN.TouchableOpacity>
    );
  };

  return (
    <RN.View>
      <RN.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        data={filterList}
        keyExtractor={(_, key) => key.toString()}
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    gap: 10,
    alignItems: 'flex-start',
    paddingLeft: 16,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 18.61,
    fontWeight: '500',
    color: COLORS.white,
  },
  activeButtonText: {
    fontWeight: '600',
    color: COLORS.black,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: addAlpha(COLORS.white, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
  },
  activeButton: {
    backgroundColor: COLORS.white,
    gap: 6,
  },
});

export default FilterList;
