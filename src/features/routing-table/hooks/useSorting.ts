import { useState, useMemo } from 'react';
import {
  Route,
  SortConfig,
  SortableField,
  SortDirection
} from '../types/routing.types';
import { compareIpAddresses } from '../utils/ipSorting';

const INITIAL_SORT_CONFIG: SortConfig = {
  field: 'destination',
  direction: 'asc'
};

export const useSorting = (routes: Route[]) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(INITIAL_SORT_CONFIG);

  const getComparator = (field: SortableField) => {
    switch (field) {
      case 'destination':
      case 'gateway':
        return (a: Route, b: Route) => compareIpAddresses(a[field], b[field]);
      case 'interface':
        return (a: Route, b: Route) => a.interface.localeCompare(b.interface);
    }
  };

  const sortedRoutes = useMemo(() => {
    const { field, direction } = sortConfig;
    const comparator = getComparator(field);
    const sorted = [...routes].sort(comparator);

    return direction === 'desc' ? sorted.reverse() : sorted;
  }, [routes, sortConfig]);

  const handleSort = (field: SortableField) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.field === field) {
        return {
          field,
          direction: prevConfig.direction === 'asc' ? 'desc' : 'asc'
        };
      }

      return {
        field,
        direction: 'asc'
      };
    });
  };

  const isSortedBy = (field: SortableField): boolean => {
    return sortConfig.field === field;
  };

  const getSortDirection = (field: SortableField): SortDirection | null => {
    return isSortedBy(field) ? sortConfig.direction : null;
  };

  return {
    sortedRoutes,
    sortConfig,
    handleSort,
    isSortedBy,
    getSortDirection
  };
};
