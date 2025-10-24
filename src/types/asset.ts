export type LifecycleStage =
  | 'receiving'
  | 'staging'
  | 'racking'
  | 'active'
  | 'maintenance'
  | 'decommissioning';

export interface Asset {
  id: string;
  barcode: string;
  name: string;
  type: 'server' | 'switch' | 'router' | 'storage' | 'pdu';
  manufacturer: string;
  model: string;
  serialNumber: string;
  location?: {
    rack?: string;
    unit?: number;
    row?: string;
    datacenter: string;
  };
  lifecycleStage: LifecycleStage;
  assignedTo?: string;
  notes?: string;
  lastScanned?: Date;
  createdAt: Date;
}

export interface LifecycleStageInfo {
  id: LifecycleStage;
  name: string;
  color: string;
  icon: string;
  description: string;
}
