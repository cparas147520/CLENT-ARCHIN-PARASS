import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  RotateCw, 
  Search, 
  Activity, 
  Sparkles, 
  FileCode, 
  Zap, 
  Check, 
  AlertCircle,
  Terminal,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DevMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevMenuModal: React.FC<DevMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'menu' | 'appjson' | 'logs'>('menu');
  const [fastRefreshActive, setFastRefreshActive] = useState(true);
  const [inspectorActive, setInspectorActive] = useState(false);
  const [reloading, setReloading] = useState(false);

  const simulateReload = () => {
    setReloading(true);
    setTimeout(() => {
      setReloading(false);
      confetti({ particleCount: 35, spread: 60 });
    }, 700);
  };

  const appJsonContent = `{
  "expo": {
    "name": "Clent Paras - RN Engine",
    "slug": "clent-paras-portfolio",
    "version": "4.2.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#090d16"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.clentparas.app",
      "infoPlist": {
        "UIBackgroundModes": ["location", "fetch"]
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#090d16"
      },
      "package": "com.clentparas.app"
    },
    "plugins": [
      "expo-router",
      "expo-camera",
      "expo-haptics",
      "expo-sensors"
    ]
  }
}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            className="bg-[#121212] border border-white/20 max-w-md w-full overflow-hidden shadow-2xl relative"
          >
            {/* Header */}
            <div className="bg-black p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF3B3F] animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                  React Native DevMenu (v0.76)
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-tabs */}
            <div className="flex bg-black border-b border-white/10 px-4 py-2 gap-2">
              <button
                onClick={() => setActiveTab('menu')}
                className={`px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'menu'
                    ? 'bg-[#FF3B3F] text-black font-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Developer Menu
              </button>
              <button
                onClick={() => setActiveTab('appjson')}
                className={`px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'appjson'
                    ? 'bg-[#FF3B3F] text-black font-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                app.json
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'logs'
                    ? 'bg-[#FF3B3F] text-black font-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Metro Logs
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-2 max-h-[420px] overflow-y-auto">
              {activeTab === 'menu' && (
                <>
                  {/* Reload Button */}
                  <button
                    onClick={simulateReload}
                    disabled={reloading}
                    className="w-full flex items-center justify-between p-3 bg-black hover:bg-[#181818] border border-white/10 text-left transition-all text-xs font-mono group"
                  >
                    <div className="flex items-center gap-3">
                      <RotateCw className={`w-4 h-4 text-[#FF3B3F] ${reloading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform'}`} />
                      <div>
                        <p className="font-bold text-white uppercase text-[11px]">Reload JS Bundle</p>
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Shortcut: ⌘R / RR in Android emulator</p>
                      </div>
                    </div>
                    {reloading && <span className="text-[#FF3B3F] font-bold text-[9px] uppercase tracking-wider">Bundling...</span>}
                  </button>

                  {/* Toggle Fast Refresh */}
                  <button
                    onClick={() => setFastRefreshActive(!fastRefreshActive)}
                    className="w-full flex items-center justify-between p-3 bg-black hover:bg-[#181818] border border-white/10 text-left transition-all text-xs font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-[#FF3B3F]" />
                      <div>
                        <p className="font-bold text-white uppercase text-[11px]">Fast Refresh</p>
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Preserves local React state upon code edit</p>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      fastRefreshActive ? 'bg-[#FF3B3F]/20 text-[#FF3B3F]' : 'bg-white/10 text-white/40'
                    }`}>
                      {fastRefreshActive ? 'Enabled' : 'Disabled'}
                    </span>
                  </button>

                  {/* Toggle Element Inspector */}
                  <button
                    onClick={() => setInspectorActive(!inspectorActive)}
                    className="w-full flex items-center justify-between p-3 bg-black hover:bg-[#181818] border border-white/10 text-left transition-all text-xs font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4 text-[#FF3B3F]" />
                      <div>
                        <p className="font-bold text-white uppercase text-[11px]">Toggle Element Inspector</p>
                        <p className="text-[9px] uppercase tracking-wider text-white/40">Inspect view hierarchies, margins, paddings</p>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      inspectorActive ? 'bg-white text-black' : 'bg-white/10 text-white/40'
                    }`}>
                      {inspectorActive ? 'Active' : 'Off'}
                    </span>
                  </button>

                  {/* Perf Monitor Info */}
                  <div className="p-3 bg-black border border-white/10 text-xs font-mono space-y-1.5">
                    <div className="flex items-center justify-between text-[#FF3B3F] font-bold text-[10px] uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" /> Performance Monitor Live
                      </span>
                      <span>Fabric Engine</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-white/70 pt-1">
                      <div>UI Thread: <span className="text-[#FF3B3F] font-bold">60.0 FPS</span></div>
                      <div>JS Thread: <span className="text-[#FF3B3F] font-bold">59.9 FPS</span></div>
                      <div>RAM Used: <span className="text-white/40">38.4 MB</span></div>
                      <div>TurboModules: <span className="text-white font-bold">Loaded (JSI)</span></div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'appjson' && (
                <div className="bg-black p-3 border border-white/10 font-mono text-[10px] text-white/80 overflow-x-auto leading-relaxed">
                  <pre className="whitespace-pre">{appJsonContent}</pre>
                </div>
              )}

              {activeTab === 'logs' && (
                <div className="bg-black p-3 border border-white/10 font-mono text-[10px] text-white/80 space-y-1">
                  <p className="text-white/40">[Metro] BUNDLE ./App.tsx 100% (1,482 modules)</p>
                  <p className="text-[#FF3B3F]">[Hermes] Bytecode loaded in 14ms</p>
                  <p className="text-white">[Reanimated] Worklets initialized on UI Thread (12 registered)</p>
                  <p className="text-white/60">[Expo] Config plugins verified for iOS & Android</p>
                  <p className="text-white/40">[Bridge] TurboModuleRegistry: NativeHaptics connected</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-black border-t border-white/10 flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">Clent Archin Paras • React Native</span>
              <button
                onClick={onClose}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-[10px] font-bold uppercase tracking-wider text-white"
              >
                Close (Esc)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
