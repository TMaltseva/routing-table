# Routing Table

A React application displaying a sortable routing table for network routes.

## 🎯 Task Requirements

Implement a routing table with the following features:
- Display list of network routes in table format
- Sortable columns with specific sorting logic:
  - **Destination Address** - IP address comparison
  - **Gateway** - IP address comparison  
  - **Interface** - string comparison

## 🚀 Demo

**Live Demo:** [https://tmaltseva.github.io/routing-table](https://tmaltseva.github.io/routing-table)

## 📋 Data Structure

Each route is an object with the following structure:

```typescript
interface Route {
  destination: string;  // IP address with CIDR notation (e.g., "192.168.1.0/24")
  gateway: string;      // Gateway IP address (e.g., "192.168.1.1")
  interface: string;    // Network interface name (e.g., "eth0", "wlan0")
}
```

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **CSS Modules** for styling
- **Feature-Sliced Design** architecture
- Vanilla React (no external UI libraries)

## 🎨 Features

- ✅ **IP Address Sorting** - Correct numerical comparison of IP addresses
- ✅ **String Sorting** - Alphabetical sorting for interface names
- ✅ **Visual Indicators** - Sort direction arrows (↑↓)
- ✅ **Interface Icons** - Different icons for network interface types
- ✅ **IP Validation** - Visual indicators for invalid IP addresses
- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Accessibility** - Screen reader support with ARIA attributes

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/TMaltseva/routing-table.git
cd routing-table

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Available Scripts

```bash
npm start          # Run development server
npm run build      # Build for production
npm run type-check # TypeScript type checking
npm run lint       # ESLint + Prettier
npm run deploy     # Deploy to GitHub Pages
```

## 📊 Sample Data

The application includes 9 sample routes with various network interface types:
- Ethernet interfaces (eth0, eth1, eth2)
- WiFi interfaces (wlan0, wlan1)
- VPN tunnels (tun0)
- Network bridges (docker0, br0)

## 🔧 Implementation Details

### IP Address Sorting
```typescript
// Converts IP to number for proper comparison
// 10.0.0.1 < 192.168.1.1 (not lexicographic)
const compareIpAddresses = (a: string, b: string): number => {
  const numA = ipToNumber(a);
  const numB = ipToNumber(b);
  return numA - numB;
};
```

### Error Handling
- Invalid IP addresses are highlighted with visual indicators
- Graceful fallback to string comparison for malformed IPs
- Application doesn't crash on invalid data

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is created as a test task and is for demonstration purposes only.