# DCIM Asset Lifecycle Manager

A prototype datacenter infrastructure management (DCIM) application for tracking hardware assets through their lifecycle. Built for datacenter technicians to manage racking, unracking, and asset lifecycle stages.

## Features

- **Visual Lifecycle Board**: Kanban-style board with 6 lifecycle stages (Receiving → Staging → Racking → Active → Maintenance → Decommissioning)
- **Asset Scanning**: Simulate barcode/serial number scanning to quickly locate and update assets
- **Drag & Drop**: Move assets between lifecycle stages with drag-and-drop
- **Technician-Focused UI**: Mobile-responsive design with large, touch-friendly buttons
- **Real-time Tracking**: Timestamps and location tracking for all assets

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hmulvaney/my-react-app.git
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

## Usage

### Scanning Assets
1. Click "📱 Open Scanner" button in the header
2. Enter a barcode or serial number:
   - Try: `SRV-2024-001`, `SRV-2024-002`, `NET-2024-015`
   - Or any serial number like: `SN123456789`
3. Select a new lifecycle stage
4. Click "Update Asset Stage"

### Moving Assets
- Drag any asset card to a different column to change its lifecycle stage
- Each asset card shows: type, manufacturer, model, serial number, location, and last scan time

## Project Structure

```
src/
├── components/          # React components
│   ├── AssetCard.tsx       # Individual asset display
│   ├── LifecycleColumn.tsx # Lifecycle stage columns
│   └── ScannerInterface.tsx # Barcode scanning modal
├── data/
│   └── mockAssets.ts    # Sample datacenter assets
├── types/
│   └── asset.ts         # TypeScript type definitions
├── App.tsx              # Main application
└── App.css              # Styles
```

## Tech Stack

- **React 19** - UI framework
- **TypeScript 5.9** - Type safety
- **Vite 7** - Build tool and dev server
- **CSS** - Responsive styling with Grid/Flexbox

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Mock Data

The app includes 8 sample assets across different lifecycle stages:
- Dell PowerEdge and HPE ProLiant servers
- Cisco Nexus and Juniper switches
- NetApp storage arrays

All assets are configured for datacenter "DC-WEST-01" with rack locations and assignments.

## Development Notes

See [CLAUDE.md](./CLAUDE.md) for detailed architecture and development guidelines.
