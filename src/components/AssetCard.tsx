import type { Asset } from '../types/asset';

interface AssetCardProps {
  asset: Asset;
  onScan: (assetId: string) => void;
}

export function AssetCard({ asset, onScan }: AssetCardProps) {
  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Never';
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeIcon = (type: Asset['type']) => {
    const icons = {
      server: '🖥️',
      switch: '🔀',
      router: '📡',
      storage: '💾',
      pdu: '⚡'
    };
    return icons[type];
  };

  return (
    <div className="asset-card">
      <div className="asset-card-header">
        <span className="asset-type-icon">{getTypeIcon(asset.type)}</span>
        <div className="asset-card-title">
          <h3>{asset.name}</h3>
          <span className="asset-barcode">{asset.barcode}</span>
        </div>
      </div>

      <div className="asset-card-body">
        <div className="asset-info">
          <div className="asset-info-row">
            <span className="label">Manufacturer:</span>
            <span className="value">{asset.manufacturer}</span>
          </div>
          <div className="asset-info-row">
            <span className="label">Model:</span>
            <span className="value">{asset.model}</span>
          </div>
          <div className="asset-info-row">
            <span className="label">Serial:</span>
            <span className="value">{asset.serialNumber}</span>
          </div>
          {asset.location?.rack && (
            <div className="asset-info-row">
              <span className="label">Location:</span>
              <span className="value">
                {asset.location.row ? `${asset.location.row}-` : ''}
                {asset.location.rack}
                {asset.location.unit ? `-U${asset.location.unit}` : ''}
              </span>
            </div>
          )}
          <div className="asset-info-row">
            <span className="label">Datacenter:</span>
            <span className="value">{asset.location?.datacenter}</span>
          </div>
          {asset.assignedTo && (
            <div className="asset-info-row">
              <span className="label">Assigned:</span>
              <span className="value">{asset.assignedTo}</span>
            </div>
          )}
        </div>

        {asset.notes && (
          <div className="asset-notes">
            <span className="label">Notes:</span>
            <p>{asset.notes}</p>
          </div>
        )}

        <div className="asset-footer">
          <span className="last-scanned">
            Last scanned: {formatDate(asset.lastScanned)}
          </span>
          <button
            className="scan-button"
            onClick={() => onScan(asset.id)}
          >
            📱 Scan
          </button>
        </div>
      </div>
    </div>
  );
}
