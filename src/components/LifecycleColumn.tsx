import type { Asset, LifecycleStageInfo } from '../types/asset';
import { AssetCard } from './AssetCard';

interface LifecycleColumnProps {
  stage: LifecycleStageInfo;
  assets: Asset[];
  onScan: (assetId: string) => void;
  onMoveAsset: (assetId: string, newStage: string) => void;
}

export function LifecycleColumn({ stage, assets, onScan, onMoveAsset }: LifecycleColumnProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const assetId = e.dataTransfer.getData('assetId');
    if (assetId) {
      onMoveAsset(assetId, stage.id);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, assetId: string) => {
    e.dataTransfer.setData('assetId', assetId);
  };

  return (
    <div
      className="lifecycle-column"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="column-header" style={{ backgroundColor: stage.color }}>
        <span className="stage-icon">{stage.icon}</span>
        <div className="stage-info">
          <h2>{stage.name}</h2>
          <p className="stage-description">{stage.description}</p>
        </div>
        <span className="asset-count">{assets.length}</span>
      </div>

      <div className="column-body">
        {assets.length === 0 ? (
          <div className="empty-state">
            <p>No assets in this stage</p>
            <span>Drag assets here or scan them</span>
          </div>
        ) : (
          assets.map((asset) => (
            <div
              key={asset.id}
              draggable
              onDragStart={(e) => handleDragStart(e, asset.id)}
            >
              <AssetCard asset={asset} onScan={onScan} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
