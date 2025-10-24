import { useState } from 'react';
import type { Asset, LifecycleStage } from '../types/asset';
import { lifecycleStages } from '../data/mockAssets';

interface ScannerInterfaceProps {
  assets: Asset[];
  onUpdateAsset: (assetId: string, updates: Partial<Asset>) => void;
  onClose: () => void;
}

export function ScannerInterface({ assets, onUpdateAsset, onClose }: ScannerInterfaceProps) {
  const [scanInput, setScanInput] = useState('');
  const [scannedAsset, setScannedAsset] = useState<Asset | null>(null);
  const [selectedStage, setSelectedStage] = useState<LifecycleStage | null>(null);
  const [scanFeedback, setScanFeedback] = useState<'success' | 'error' | null>(null);

  const handleScan = () => {
    const asset = assets.find(
      (a) => a.barcode.toLowerCase() === scanInput.toLowerCase() ||
             a.serialNumber.toLowerCase() === scanInput.toLowerCase()
    );

    if (asset) {
      setScannedAsset(asset);
      setScanFeedback('success');
      setTimeout(() => setScanFeedback(null), 1000);
    } else {
      setScanFeedback('error');
      setTimeout(() => setScanFeedback(null), 1000);
    }
  };

  const handleUpdateStage = () => {
    if (scannedAsset && selectedStage) {
      onUpdateAsset(scannedAsset.id, {
        lifecycleStage: selectedStage,
        lastScanned: new Date()
      });
      setScanInput('');
      setScannedAsset(null);
      setSelectedStage(null);
      setScanFeedback('success');
      setTimeout(() => setScanFeedback(null), 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleScan();
    }
  };

  return (
    <div className="scanner-overlay">
      <div className="scanner-modal">
        <div className="scanner-header">
          <h2>📱 Asset Scanner</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="scanner-body">
          <div className="scan-input-section">
            <label htmlFor="scan-input">Scan or Enter Barcode/Serial Number:</label>
            <div className="input-group">
              <input
                id="scan-input"
                type="text"
                value={scanInput}
                onChange={(e) => setScanInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="SRV-2024-001 or SN123456789"
                autoFocus
                className={scanFeedback === 'error' ? 'error' : ''}
              />
              <button
                className="scan-button-large"
                onClick={handleScan}
                disabled={!scanInput}
              >
                🔍 Scan
              </button>
            </div>
            {scanFeedback === 'error' && (
              <p className="error-message">❌ Asset not found</p>
            )}
            {scanFeedback === 'success' && !scannedAsset && (
              <p className="success-message">✅ Scan successful</p>
            )}
          </div>

          {scannedAsset && (
            <div className="scanned-asset-info">
              <div className="info-header">
                <h3>✅ Asset Found</h3>
                <span className="current-stage-badge" style={{
                  backgroundColor: lifecycleStages.find(s => s.id === scannedAsset.lifecycleStage)?.color
                }}>
                  {lifecycleStages.find(s => s.id === scannedAsset.lifecycleStage)?.icon}{' '}
                  {lifecycleStages.find(s => s.id === scannedAsset.lifecycleStage)?.name}
                </span>
              </div>

              <div className="asset-details">
                <div className="detail-row">
                  <span className="label">Name:</span>
                  <span className="value">{scannedAsset.name}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Barcode:</span>
                  <span className="value">{scannedAsset.barcode}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Serial:</span>
                  <span className="value">{scannedAsset.serialNumber}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Type:</span>
                  <span className="value">{scannedAsset.type}</span>
                </div>
                {scannedAsset.location?.rack && (
                  <div className="detail-row">
                    <span className="label">Location:</span>
                    <span className="value">
                      {scannedAsset.location.row ? `${scannedAsset.location.row}-` : ''}
                      {scannedAsset.location.rack}
                      {scannedAsset.location.unit ? `-U${scannedAsset.location.unit}` : ''}
                    </span>
                  </div>
                )}
              </div>

              <div className="stage-selector">
                <label>Move to Stage:</label>
                <div className="stage-buttons">
                  {lifecycleStages.map((stage) => (
                    <button
                      key={stage.id}
                      className={`stage-button ${selectedStage === stage.id ? 'selected' : ''}`}
                      style={{
                        backgroundColor: selectedStage === stage.id ? stage.color : 'transparent',
                        borderColor: stage.color,
                        color: selectedStage === stage.id ? 'white' : stage.color
                      }}
                      onClick={() => setSelectedStage(stage.id)}
                    >
                      {stage.icon} {stage.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="update-button"
                onClick={handleUpdateStage}
                disabled={!selectedStage || selectedStage === scannedAsset.lifecycleStage}
              >
                ✅ Update Asset Stage
              </button>
            </div>
          )}

          <div className="quick-actions">
            <h4>Quick Actions:</h4>
            <div className="action-buttons">
              <button className="action-btn">📦 Receive New Asset</button>
              <button className="action-btn">🔧 Start Maintenance</button>
              <button className="action-btn">✅ Mark Active</button>
              <button className="action-btn">🗑️ Begin Decommission</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
