import RN from 'components/RN';
import {map} from 'lodash';
import React, {useCallback} from 'react';
import {BASE_PADDING} from 'shared/lib';
import {TableRow} from '.';
import {Box} from './box';

const WIDTH = BASE_PADDING * 8;

export function Body<T>({data = []}: {data: T[]}) {
  const renderItem = useCallback((_data = [], _key: number) => {
    return (
      <RN.View fd={'row'} jc={'space-between'} key={_key}>
        {map(_data, (row, key) => (
          <Box key={key} width={WIDTH}>
            <TableRow children={row} />
          </Box>
        ))}
      </RN.View>
    );
  }, []);

  return <RN.View fd={'column'}>{map(data, renderItem)}</RN.View>;
}
