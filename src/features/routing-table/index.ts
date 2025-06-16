export { RoutingTable } from './components/RoutingTable';
export { SortableHeader } from './components/SortableHeader';
export { RouteRow } from './components/RouteRow';

export { useSorting } from './hooks/useSorting';

export type {
  Route,
  SortableField,
  SortDirection,
  SortConfig,
  TableColumn,
  IpValidationResult
} from './types/routing.types';

export {
  ipToNumber,
  compareIpAddresses,
  isValidIpAddress,
  getIpWithoutMask,
  safeCompareIpAddresses
} from './utils/ipSorting';

export {
  getInterfaceType,
  getInterfaceIcon,
  getInterfaceDescription,
  getInterfaceIconByName
} from './utils/interfaceUtils';

export { mockRoutes } from './data/mockRoutes';
