import { TableColumn } from '../../features/routing-table/types/routing.types';

export const TABLE_COLUMNS: TableColumn[] = [
  {
    key: 'destination',
    label: 'Адрес назначения',
    sortable: true,
    width: '40%'
  },
  {
    key: 'gateway',
    label: 'Шлюз',
    sortable: true,
    width: '35%'
  },
  {
    key: 'interface',
    label: 'Интерфейс',
    sortable: true,
    width: '25%'
  }
];
