export const ipToNumber = (ip: string): number => {
  const cleanIp = getIpWithoutMask(ip);

  const parts = cleanIp.split('.');

  if (parts.length !== 4) {
    throw new Error(`Invalid IP address: ${ip}`);
  }

  return parts.reduce((result, part, index) => {
    const num = parseInt(part, 10);

    if (isNaN(num) || num < 0 || num > 255) {
      throw new Error(`Invalid IP address part: ${part} in ${ip}`);
    }

    return result + num * Math.pow(256, 3 - index);
  }, 0);
};

export const compareIpAddresses = (a: string, b: string): number => {
  const numA = ipToNumber(a);
  const numB = ipToNumber(b);

  if (numA < numB) return -1;
  if (numA > numB) return 1;

  return 0;
};

export const isValidIpAddress = (ip: string): boolean => {
  try {
    ipToNumber(ip);

    return true;
  } catch {
    return false;
  }
};

export const getIpWithoutMask = (ip: string): string => {
  return ip.split('/')[0];
};
