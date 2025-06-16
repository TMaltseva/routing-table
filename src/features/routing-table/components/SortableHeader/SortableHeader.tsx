import React, { useCallback, useMemo } from 'react';
import { SortableField, SortDirection } from '../../types/routing.types';
import styles from './SortableHeader.module.css';

interface SortableHeaderProps {
  field: SortableField;
  label: string;
  sortable: boolean;
  width?: string;
  isActive: boolean;
  sortDirection: SortDirection | null;
  onSort: (_field: SortableField) => void;
}

export const SortableHeader: React.FC<SortableHeaderProps> = ({
  field,
  label,
  sortable,
  width,
  isActive,
  sortDirection,
  onSort
}) => {
  const handleClick = useCallback(() => {
    if (sortable) {
      onSort(field);
    }
  }, [sortable, onSort, field]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (sortable && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        onSort(field);
      }
    },
    [sortable, onSort, field]
  );

  const sortIcon = useMemo(() => {
    if (!sortable || !isActive) {
      return sortable ? (
        <span className={styles.sortIconInactive}>⇅</span>
      ) : null;
    }

    return sortDirection === 'asc' ? (
      <span className={styles.sortIconActive}>↑</span>
    ) : (
      <span className={styles.sortIconActive}>↓</span>
    );
  }, [sortable, isActive, sortDirection]);

  const className = useMemo(() => {
    const classes = [styles.header];

    if (sortable) {
      classes.push(styles.sortable);
    }
    if (isActive) {
      classes.push(styles.active);
    }

    if (width) {
      if (width === '40%') classes.push(styles.widthLarge);
      else if (width === '35%') classes.push(styles.widthMedium);
      else if (width === '25%') classes.push(styles.widthSmall);
    }

    return classes.join(' ');
  }, [sortable, isActive, width]);

  const content = useMemo(
    () => (
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        {sortIcon}
      </div>
    ),
    [label, sortIcon]
  );

  const ariaLabel = useMemo(() => {
    if (!sortable) return undefined;

    if (isActive && sortDirection === 'asc') {
      return `${label}, отсортировано по возрастанию. Нажмите для изменения сортировки.`;
    }

    if (isActive && sortDirection === 'desc') {
      return `${label}, отсортировано по убыванию. Нажмите для изменения сортировки.`;
    }

    return `${label}. Нажмите для сортировки.`;
  }, [label, sortable, isActive, sortDirection]);

  const ariaSort = useMemo(() => {
    if (!sortable) return undefined;

    if (isActive) {
      if (sortDirection === 'asc') return 'ascending';
      if (sortDirection === 'desc') return 'descending';
    }

    return 'none';
  }, [sortable, isActive, sortDirection]);

  if (!sortable) {
    return <th className={className}>{content}</th>;
  }

  const thProps: React.HTMLAttributes<HTMLTableCellElement> = {
    className,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: 0,
    role: 'columnheader'
  };

  if (ariaSort) {
    thProps['aria-sort'] = ariaSort;
  }

  if (ariaLabel) {
    thProps['aria-label'] = ariaLabel;
  }

  return <th {...thProps}>{content}</th>;
};
