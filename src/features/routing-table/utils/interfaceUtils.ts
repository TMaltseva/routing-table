export type InterfaceType = 'ethernet' | 'wifi' | 'vpn' | 'bridge' | 'unknown';

export const getInterfaceType = (interfaceName: string): InterfaceType => {
  const name = interfaceName.toLowerCase();

  if (name.startsWith('eth')) return 'ethernet';
  if (name.startsWith('wlan') || name.startsWith('wifi')) return 'wifi';
  if (name.startsWith('tun') || name.startsWith('vpn')) return 'vpn';
  if (name.includes('docker') || name.startsWith('br')) return 'bridge';

  return 'unknown';
};

export const getInterfaceIcon = (type: InterfaceType): string => {
  const iconMap: Record<InterfaceType, string> = {
    ethernet: '🔌',
    wifi: '📶',
    vpn: '🔒',
    bridge: '🌉',
    unknown: '🔗'
  };

  return iconMap[type];
};

export const getInterfaceDescription = (type: InterfaceType): string => {
  const descriptions: Record<InterfaceType, string> = {
    ethernet: 'Проводное подключение',
    wifi: 'Беспроводное подключение',
    vpn: 'VPN туннель',
    bridge: 'Сетевой мост',
    unknown: 'Неизвестный тип'
  };

  return descriptions[type];
};

export const getInterfaceIconByName = (interfaceName: string): string => {
  const type = getInterfaceType(interfaceName);

  return getInterfaceIcon(type);
};
