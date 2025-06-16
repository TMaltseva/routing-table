import React from 'react';
import { Route } from '../../types/routing.types';
import { isValidIpAddress } from '../../utils/ipSorting';
import {
  getInterfaceType,
  getInterfaceIcon,
  getInterfaceDescription
} from '../../utils/interfaceUtils';
import styles from './RouteRow.module.css';

interface RouteRowProps {
  route: Route;
  index: number;
}

export const RouteRow: React.FC<RouteRowProps> = ({ route, index }) => {
  const isDestinationValid = isValidIpAddress(route.destination);
  const isGatewayValid = isValidIpAddress(route.gateway);

  const interfaceType = getInterfaceType(route.interface);
  const interfaceIcon = getInterfaceIcon(interfaceType);
  const interfaceDescription = getInterfaceDescription(interfaceType);

  const rowClassName = [
    styles.row,
    index % 2 === 0 ? styles.even : styles.odd,
    (!isDestinationValid || !isGatewayValid) && styles.hasError
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <tr className={rowClassName}>
      <td className={styles.cell}>
        <div className={styles.ipCell}>
          <span
            className={!isDestinationValid ? styles.invalidIp : styles.validIp}
          >
            {route.destination}
          </span>
          {!isDestinationValid && (
            <span className={styles.errorIcon} title="Невалидный IP адрес">
              ⚠️
            </span>
          )}
        </div>
      </td>

      <td className={styles.cell}>
        <div className={styles.ipCell}>
          <span className={!isGatewayValid ? styles.invalidIp : styles.validIp}>
            {route.gateway}
          </span>
          {!isGatewayValid && (
            <span className={styles.errorIcon} title="Невалидный IP адрес">
              ⚠️
            </span>
          )}
        </div>
      </td>

      <td className={styles.cell}>
        <div className={styles.interfaceCell}>
          <span className={styles.interfaceIcon} title={interfaceDescription}>
            {interfaceIcon}
          </span>
          <span className={styles.interfaceName}>{route.interface}</span>
        </div>
      </td>
    </tr>
  );
};
