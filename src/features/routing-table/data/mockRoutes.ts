import { Route } from '../types/routing.types';

export const mockRoutes: Route[] = [
  {
    destination: '192.168.1.0/24',
    gateway: '192.168.0.1',
    interface: 'eth0'
  },
  {
    destination: '10.0.0.0/8',
    gateway: '10.0.0.1',
    interface: 'eth1'
  },
  {
    destination: '172.16.0.0/16',
    gateway: '172.16.0.1',
    interface: 'wlan0'
  },
  {
    destination: '192.168.2.0/24',
    gateway: '192.168.2.1',
    interface: 'eth0'
  },
  {
    destination: '10.10.0.0/16',
    gateway: '10.10.0.1',
    interface: 'tun0'
  },
  {
    destination: '172.17.0.0/16',
    gateway: '172.17.0.1',
    interface: 'docker0'
  },
  {
    destination: '192.168.100.0/24',
    gateway: '192.168.100.1',
    interface: 'wlan1'
  },
  {
    destination: '10.0.1.0/24',
    gateway: '10.0.1.1',
    interface: 'eth2'
  },
  {
    destination: '172.20.0.0/16',
    gateway: '172.20.0.1',
    interface: 'br0'
  }
];
