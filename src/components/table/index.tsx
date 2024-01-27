import RN from 'components/RN';
import React from 'react';
import {TableBody, TableHeader, TableTitle} from './ui';
import {RowHeaderItem} from './ui/Header';

export interface TableProps<T> {
  title: string;
  data: T[];
  activeFilterType?: keyof T;
  rowData: RowHeaderItem<keyof T>[];
}

function Table<T>({
  title,
  data = [],
  rowData,
  activeFilterType,
}: TableProps<T>) {
  return (
    <RN.ScrollView horizontal showsHorizontalScrollIndicator={true}>
      <RN.View>
        <TableTitle>{title}</TableTitle>
        <TableHeader data={rowData} activeFilter={activeFilterType} />
        <TableBody data={data} />
      </RN.View>
    </RN.ScrollView>
  );
}

export default Table;
