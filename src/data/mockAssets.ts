import type { Asset, LifecycleStageInfo } from '../types/asset';

export const lifecycleStages: LifecycleStageInfo[] = [
  {
    id: 'receiving',
    name: 'Receiving',
    color: '#6B7280',
    icon: '📦',
    description: 'Assets arriving at the datacenter'
  },
  {
    id: 'staging',
    name: 'Staging',
    color: '#F59E0B',
    icon: '🔧',
    description: 'Assets being prepared for deployment'
  },
  {
    id: 'racking',
    name: 'Racking',
    color: '#3B82F6',
    icon: '⚙️',
    description: 'Assets being installed in racks'
  },
  {
    id: 'active',
    name: 'Active',
    color: '#10B981',
    icon: '✅',
    description: 'Assets in production use'
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    color: '#F97316',
    icon: '🔨',
    description: 'Assets undergoing maintenance'
  },
  {
    id: 'decommissioning',
    name: 'Decommissioning',
    color: '#EF4444',
    icon: '🗑️',
    description: 'Assets being retired'
  }
];

export const mockAssets: Asset[] = [
  {
    id: '1',
    barcode: 'SRV-2024-001',
    name: 'Dell PowerEdge R740',
    type: 'server',
    manufacturer: 'Dell',
    model: 'PowerEdge R740',
    serialNumber: 'SN123456789',
    location: {
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'receiving',
    assignedTo: 'Tech Team A',
    notes: 'New server for compute cluster',
    lastScanned: new Date('2025-10-24T10:30:00'),
    createdAt: new Date('2025-10-24T09:00:00')
  },
  {
    id: '2',
    barcode: 'SRV-2024-002',
    name: 'HPE ProLiant DL380',
    type: 'server',
    manufacturer: 'HPE',
    model: 'ProLiant DL380 Gen11',
    serialNumber: 'SN987654321',
    location: {
      rack: 'R-A-12',
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'staging',
    assignedTo: 'Tech Team B',
    notes: 'Firmware updates needed',
    lastScanned: new Date('2025-10-24T11:15:00'),
    createdAt: new Date('2025-10-23T14:00:00')
  },
  {
    id: '3',
    barcode: 'NET-2024-015',
    name: 'Cisco Nexus 9300',
    type: 'switch',
    manufacturer: 'Cisco',
    model: 'Nexus 9300',
    serialNumber: 'SN456789123',
    location: {
      rack: 'R-A-05',
      unit: 42,
      row: 'A',
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'racking',
    assignedTo: 'Tech Team A',
    notes: 'Installing in top of rack',
    lastScanned: new Date('2025-10-24T12:00:00'),
    createdAt: new Date('2025-10-22T10:00:00')
  },
  {
    id: '4',
    barcode: 'SRV-2024-003',
    name: 'Dell PowerEdge R750',
    type: 'server',
    manufacturer: 'Dell',
    model: 'PowerEdge R750',
    serialNumber: 'SN741852963',
    location: {
      rack: 'R-B-08',
      unit: 12,
      row: 'B',
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'active',
    assignedTo: 'Production Team',
    notes: 'Database server - high priority',
    lastScanned: new Date('2025-10-24T08:00:00'),
    createdAt: new Date('2025-09-15T10:00:00')
  },
  {
    id: '5',
    barcode: 'SRV-2023-089',
    name: 'HPE ProLiant DL360',
    type: 'server',
    manufacturer: 'HPE',
    model: 'ProLiant DL360 Gen10',
    serialNumber: 'SN369258147',
    location: {
      rack: 'R-C-15',
      unit: 8,
      row: 'C',
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'maintenance',
    assignedTo: 'Tech Team B',
    notes: 'Replacing failed drive',
    lastScanned: new Date('2025-10-24T13:30:00'),
    createdAt: new Date('2023-11-10T10:00:00')
  },
  {
    id: '6',
    barcode: 'SRV-2021-045',
    name: 'Dell PowerEdge R640',
    type: 'server',
    manufacturer: 'Dell',
    model: 'PowerEdge R640',
    serialNumber: 'SN147258369',
    location: {
      rack: 'R-D-22',
      unit: 20,
      row: 'D',
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'decommissioning',
    assignedTo: 'Tech Team A',
    notes: 'End of life - data wiping in progress',
    lastScanned: new Date('2025-10-23T16:00:00'),
    createdAt: new Date('2021-05-20T10:00:00')
  },
  {
    id: '7',
    barcode: 'STR-2024-008',
    name: 'NetApp FAS8300',
    type: 'storage',
    manufacturer: 'NetApp',
    model: 'FAS8300',
    serialNumber: 'SN852963741',
    location: {
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'receiving',
    assignedTo: 'Storage Team',
    notes: 'New NAS for backup storage',
    lastScanned: new Date('2025-10-24T09:45:00'),
    createdAt: new Date('2025-10-24T09:00:00')
  },
  {
    id: '8',
    barcode: 'NET-2024-020',
    name: 'Juniper EX4650',
    type: 'switch',
    manufacturer: 'Juniper',
    model: 'EX4650',
    serialNumber: 'SN963852741',
    location: {
      rack: 'R-A-10',
      unit: 35,
      row: 'A',
      datacenter: 'DC-WEST-01'
    },
    lifecycleStage: 'active',
    assignedTo: 'Network Team',
    notes: 'Core network switch',
    lastScanned: new Date('2025-10-24T07:30:00'),
    createdAt: new Date('2025-08-12T10:00:00')
  }
];
