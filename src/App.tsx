import { useState } from 'react';
import './App.css';
import type { Asset, LifecycleStage } from './types/asset';
import { mockAssets, lifecycleStages } from './data/mockAssets';
import { LifecycleColumn } from './components/LifecycleColumn';
import { ScannerInterface } from './components/ScannerInterface';

function App() {
  const [assets, setAssets] = useState<Asset[]>(mockAssets);
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = () => {
    setShowScanner(true);
  };

  const handleUpdateAsset = (assetId: string, updates: Partial<Asset>) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset) =>
        asset.id === assetId ? { ...asset, ...updates } : asset
      )
    );
  };

  const handleMoveAsset = (assetId: string, newStage: string) => {
    handleUpdateAsset(assetId, {
      lifecycleStage: newStage as LifecycleStage,
      lastScanned: new Date()
    });
  };

  const getAssetsByStage = (stage: LifecycleStage) => {
    return assets.filter((asset) => asset.lifecycleStage === stage);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🏢 DCIM Asset Lifecycle Manager</h1>
          <p>Datacenter: DC-WEST-01</p>
        </div>
        <div className="header-actions">
          <span className="asset-count-badge">
            {assets.length} Total Assets
          </span>
          <button
            className="scanner-button"
            onClick={() => setShowScanner(true)}
          >
            📱 Open Scanner
          </button>
        </div>
      </header>

      <div className="lifecycle-board">
        {lifecycleStages.map((stage) => (
          <LifecycleColumn
            key={stage.id}
            stage={stage}
            assets={getAssetsByStage(stage.id)}
            onScan={handleScan}
            onMoveAsset={handleMoveAsset}
          />
        ))}
      </div>

      {showScanner && (
        <ScannerInterface
          assets={assets}
          onUpdateAsset={handleUpdateAsset}
          onClose={() => setShowScanner(false)}
        />
      )}
    </div>
  );
}

export default App;
