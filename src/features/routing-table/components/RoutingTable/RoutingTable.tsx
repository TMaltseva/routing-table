import React from 'react';
import { Route } from '../../types/routing.types';
import { useSorting } from '../../hooks/useSorting';
import { TABLE_COLUMNS } from '../../../../shared/constants';
import { SortableHeader } from '../SortableHeader/SortableHeader';
import { RouteRow } from '../RouteRow';
import styles from './RoutingTable.module.css';

interface RoutingTableProps {
  routes: Route[];
  className?: string;
}

export const RoutingTable: React.FC<RoutingTableProps> = ({
  routes,
  className
}) => {
  const { sortedRoutes, handleSort, isSortedBy, getSortDirection } =
    useSorting(routes);

  if (!routes || routes.length === 0) {
    return (
      <div className={`${styles.container} ${className || ''}`}>
        <div className={styles.emptyState}>
          <p>Нет данных для отображения</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.header}>
            <tr>
              {TABLE_COLUMNS.map((column) => (
                <SortableHeader
                  key={column.key}
                  field={column.key}
                  label={column.label}
                  sortable={column.sortable}
                  width={column.width}
                  isActive={isSortedBy(column.key)}
                  sortDirection={getSortDirection(column.key)}
                  onSort={handleSort}
                />
              ))}
            </tr>
          </thead>
          <tbody className={styles.body}>
            {sortedRoutes.map((route, index) => (
              <RouteRow
                key={`${route.destination}-${route.gateway}-${route.interface}`}
                route={route}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <span className={styles.routeCount}>
          Всего маршрутов: {sortedRoutes.length}
        </span>
      </div>
    </div>
  );
};
