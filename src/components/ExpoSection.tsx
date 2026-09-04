import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Terminal, 
  QrCode, 
  ExternalLink, 
  Copy, 
  Check, 
  Zap, 
  Layers, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Radio, 
  Sliders, 
  Bell, 
  Compass, 
  Key, 
  Vibrate, 
  Code2, 
  Sparkles,
  ArrowUpRight,
  Play,
  RotateCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExpoSection: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedStarter, setCopiedStarter] = useState(false);
  const [activeSdkModule, setActiveSdkModule] = useState<'haptics' | 'sensors' | 'storage' | 'notifications' | 'location'>('haptics');
  const [activeTerminalTab, setActiveTerminalTab] = useState<'eas' | 'config' | 'router'>('eas');

  // Interactive SDK Demonstrator states
  const [hapticEffect, setHapticEffect] = useState<string | null>(null);
  const [sensorTilt, setSensorTilt] = useState({ x: 12, y: -8, z: 98 });
  const [secureTokens, setSecureTokens] = useState<Record<string, string>>({
    'supabase_session_jwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.s64k2...',
    'biometric_aes_key': 'e4b9d03a1f8c47b59218d6e3c04289ea'
  });
  const [newKey, setNewKey] = useState('');
  const [newVal, setNewVal] = useState('');
  const [notificationSent, setNotificationSent] = useState(false);
  const [isBuildingEas, setIsBuildingEas] = useState(false);
  const [easProgress, setEasProgress] = useState(100);

  const expoProjectUrl = 'exp://u.expo.dev/update/clent-pulsefit-v52';
  const expoStarterCmd = 'npx create-expo-app@latest my-app --template @clent/expo-starter';

  const copyExpoUrl = () => {
    navigator.clipboard.writeText(expoProjectUrl);
    setCopiedUrl(true);
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const copyStarter = () => {
    navigator.clipboard.writeText(expoStarterCmd);
    setCopiedStarter(true);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setCopiedStarter(false), 2000);
  };

  const triggerHaptic = (type: string) => {
    setHapticEffect(type);
    if ('vibrate' in navigator) {
      if (type === 'heavy') navigator.vibrate([40, 30, 40]);
      else if (type === 'medium') navigator.vibrate(30);
      else navigator.vibrate(15);
    }
    setTimeout(() => setHapticEffect(null), 600);
  };

  const handleSendNotification = () => {
    setNotificationSent(true);
    triggerHaptic('notification');
    setTimeout(() => setNotificationSent(false), 3500);
  };

  const handleAddSecureToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKey.trim() || !newVal.trim()) return;
    setSecureTokens(prev => ({ ...prev, [newKey.trim()]: newVal.trim() }));
    setNewKey('');
    setNewVal('');
    triggerHaptic('light');
  };

  const triggerSimulatedBuild = () => {
    setIsBuildingEas(true);
    setEasProgress(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 20;
      setEasProgress(step);
      if (step >= 100) {
        clearInterval(interval);
        setIsBuildingEas(false);
        confetti({ particleCount: 40, spread: 55, origin: { y: 0.7 } });
      }
    }, 400);
  };

  return (
    <section id="expo" className="py-24 relative bg-[#0a0a0a] border-t border-b border-white/10 overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.04] pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/[0.02] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-80 h-80 bg-[#FF3B3F]/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
              Expo Ecosystem 02
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Expo SDK 52 & EAS Infrastructure
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-2xl">
              Production-grade mobile architectures powered by Expo SDK, Expo Router v4, and EAS Build & Submit pipelines. Zero-config native deployments with OTA updates and Hermes engine tuning.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/70">
              Expo SDK 52.0.0
            </span>
            <span className="px-3 py-1 bg-[#FF3B3F]/10 border border-[#FF3B3F]/30 text-[10px] font-mono uppercase tracking-wider text-[#FF3B3F] font-bold">
              EAS Cloud CI/CD
            </span>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#121212] p-6 border border-white/10 hover:border-[#FF3B3F] transition-all group">
            <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center text-[#FF3B3F] mb-4 group-hover:border-[#FF3B3F]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white mb-2">Expo Router v4</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              File-based typed routing with nested layouts, parallel routes, dynamic route groups, and universal web/native deep link resolution.
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
              <span>Typed Navigation</span>
              <span className="text-[#FF3B3F] font-bold">app/(tabs)/[id]</span>
            </div>
          </div>

          <div className="bg-[#121212] p-6 border border-white/10 hover:border-[#FF3B3F] transition-all group">
            <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center text-[#FF3B3F] mb-4 group-hover:border-[#FF3B3F]">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white mb-2">EAS Build & Submit</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Automated cloud compile pipelines generating signed iOS .ipa and Android .aab bundles with direct App Store & Google Play distribution.
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
              <span>Cloud Workers</span>
              <span className="text-[#FF3B3F] font-bold">M2 Mac & Linux</span>
            </div>
          </div>

          <div className="bg-[#121212] p-6 border border-white/10 hover:border-[#FF3B3F] transition-all group">
            <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center text-[#FF3B3F] mb-4 group-hover:border-[#FF3B3F]">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white mb-2">EAS Over-The-Air</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Instant hot patch delivery directly to user devices with channel targeting (production/staging), cryptographic signatures, and instant rollback.
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
              <span>Update Protocol</span>
              <span className="text-[#FF3B3F] font-bold">v52 Protocol</span>
            </div>
          </div>

          <div className="bg-[#121212] p-6 border border-white/10 hover:border-[#FF3B3F] transition-all group">
            <div className="w-10 h-10 bg-black border border-white/10 flex items-center justify-center text-[#FF3B3F] mb-4 group-hover:border-[#FF3B3F]">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white mb-2">Config Plugins</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Continuous native prebuilds injecting CocoaPods, Android Gradle dependencies, and iOS entitlements without ever committing fragile Xcode files.
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
              <span>Prebuild Engine</span>
              <span className="text-[#FF3B3F] font-bold">expo prebuild --clean</span>
            </div>
          </div>
        </div>

        {/* Two-Column Showcase: Left = Live Expo Go QR + Links / Right = Interactive SDK Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column (5 cols): Expo Go QR Code & Launcher */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-[#FF3B3F] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white font-bold">
                  Expo Go Live Client
                </span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 bg-black px-2 py-0.5 border border-white/10">
                Scan & Run
              </span>
            </div>

            {/* QR Code Container with High-Contrast Artistic Framing */}
            <div className="flex flex-col items-center justify-center p-6 bg-black border border-white/10 mb-6 relative group">
              <div className="relative p-3 bg-white border-2 border-black">
                {/* SVG QR Code Simulation */}
                <svg
                  className="w-48 h-48 sm:w-56 sm:h-56"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="200" height="200" fill="white" />
                  {/* Outer corner 1 */}
                  <rect x="15" y="15" width="45" height="45" fill="black" />
                  <rect x="22" y="22" width="31" height="31" fill="white" />
                  <rect x="28" y="28" width="19" height="19" fill="#FF3B3F" />
                  {/* Outer corner 2 */}
                  <rect x="140" y="15" width="45" height="45" fill="black" />
                  <rect x="147" y="22" width="31" height="31" fill="white" />
                  <rect x="153" y="28" width="19" height="19" fill="#FF3B3F" />
                  {/* Outer corner 3 */}
                  <rect x="15" y="140" width="45" height="45" fill="black" />
                  <rect x="22" y="147" width="31" height="31" fill="white" />
                  <rect x="28" y="153" width="19" height="19" fill="#FF3B3F" />
                  {/* QR Matrix Grid Dots */}
                  <g fill="black">
                    <rect x="70" y="20" width="10" height="10" />
                    <rect x="90" y="20" width="10" height="10" />
                    <rect x="110" y="20" width="10" height="10" />
                    <rect x="70" y="40" width="10" height="10" />
                    <rect x="100" y="40" width="10" height="10" />
                    <rect x="120" y="40" width="10" height="10" />
                    <rect x="70" y="60" width="10" height="10" />
                    <rect x="90" y="60" width="10" height="10" />
                    <rect x="110" y="60" width="10" height="10" />
                    <rect x="20" y="70" width="10" height="10" />
                    <rect x="40" y="70" width="10" height="10" />
                    <rect x="140" y="70" width="10" height="10" />
                    <rect x="160" y="70" width="10" height="10" />
                    <rect x="20" y="90" width="10" height="10" />
                    <rect x="40" y="90" width="10" height="10" />
                    <rect x="60" y="90" width="10" height="10" />
                    <rect x="80" y="90" width="10" height="10" />
                    <rect x="100" y="90" width="10" height="10" />
                    <rect x="120" y="90" width="10" height="10" />
                    <rect x="140" y="90" width="10" height="10" />
                    <rect x="160" y="90" width="10" height="10" />
                    <rect x="20" y="110" width="10" height="10" />
                    <rect x="50" y="110" width="10" height="10" />
                    <rect x="70" y="110" width="10" height="10" />
                    <rect x="90" y="110" width="10" height="10" />
                    <rect x="120" y="110" width="10" height="10" />
                    <rect x="150" y="110" width="10" height="10" />
                    <rect x="70" y="140" width="10" height="10" />
                    <rect x="90" y="140" width="10" height="10" />
                    <rect x="110" y="140" width="10" height="10" />
                    <rect x="140" y="140" width="10" height="10" />
                    <rect x="160" y="140" width="10" height="10" />
                    <rect x="80" y="160" width="10" height="10" />
                    <rect x="100" y="160" width="10" height="10" />
                    <rect x="120" y="160" width="10" height="10" />
                    <rect x="150" y="160" width="10" height="10" />
                  </g>
                  {/* Center Expo Emblem */}
                  <rect x="85" y="85" width="30" height="30" fill="black" />
                  <text x="100" y="105" fill="#FF3B3F" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">E</text>
                </svg>
              </div>

              <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-4 text-center">
                Scan with iOS Camera or Android Expo Go
              </p>
            </div>

            {/* Expo URL Copy Bar */}
            <div className="bg-black p-3 border border-white/10 flex items-center justify-between gap-3 mb-6">
              <div className="overflow-hidden">
                <p className="text-[9px] font-mono uppercase tracking-wider text-white/40">EAS Update Manifest URL</p>
                <p className="text-xs font-mono text-[#FF3B3F] truncate">{expoProjectUrl}</p>
              </div>
              <button
                id="btn-copy-expo-url"
                onClick={copyExpoUrl}
                title="Copy Expo URL"
                className="p-2 bg-[#141414] hover:bg-[#FF3B3F] text-white hover:text-black border border-white/10 shrink-0 transition-colors"
              >
                {copiedUrl ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#simulator"
                className="py-3 bg-[#FF3B3F] hover:bg-[#ff5558] text-black font-black text-[10px] uppercase tracking-widest text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Open in Simulator</span>
              </a>
              <a
                href="https://snack.expo.dev"
                target="_blank"
                rel="noreferrer"
                className="py-3 bg-black hover:bg-white/10 text-white font-bold text-[10px] uppercase tracking-widest text-center border border-white/10 transition-all active:scale-95 flex items-center justify-center gap-1.5"
              >
                <span>Expo Snack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Expo SDK Feature Matrix & Test Playground */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  Interactive Expo SDK Playground
                </h3>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-0.5">
                  Test live simulated Expo hardware bridges and native APIs
                </p>
              </div>

              {/* Module Selection Pills */}
              <div className="flex flex-wrap gap-1 bg-black p-1 border border-white/10">
                {[
                  { id: 'haptics', label: 'Haptics', icon: Vibrate },
                  { id: 'sensors', label: 'Sensors', icon: Compass },
                  { id: 'storage', label: 'SecureStore', icon: Key },
                  { id: 'notifications', label: 'Push', icon: Bell },
                  { id: 'location', label: 'Location', icon: Radio },
                ].map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setActiveSdkModule(mod.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1 text-[9px] uppercase tracking-wider font-bold transition-all ${
                        activeSdkModule === mod.id
                          ? 'bg-[#FF3B3F] text-black font-black'
                          : 'text-white/50 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{mod.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SDK Module Tab 1: Expo Haptics */}
            {activeSdkModule === 'haptics' && (
              <div className="space-y-4">
                <div className="bg-black p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#FF3B3F] font-bold">expo-haptics</span>
                    <span className="text-[10px] font-mono text-white/40">Taptic Engine & Android Vibrator</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Trigger native tactical micro-vibrations across iOS and Android without blocking UI thread animations.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => triggerHaptic('light')}
                    className={`p-4 bg-black border text-center transition-all active:scale-95 ${
                      hapticEffect === 'light' ? 'border-[#FF3B3F] bg-[#FF3B3F]/10' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <p className="text-xs font-black uppercase text-white">Impact: Light</p>
                    <p className="text-[9px] font-mono uppercase text-white/40 mt-1">Haptics.ImpactFeedbackStyle.Light</p>
                  </button>

                  <button
                    onClick={() => triggerHaptic('medium')}
                    className={`p-4 bg-black border text-center transition-all active:scale-95 ${
                      hapticEffect === 'medium' ? 'border-[#FF3B3F] bg-[#FF3B3F]/10' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <p className="text-xs font-black uppercase text-white">Impact: Medium</p>
                    <p className="text-[9px] font-mono uppercase text-white/40 mt-1">Haptics.ImpactFeedbackStyle.Medium</p>
                  </button>

                  <button
                    onClick={() => triggerHaptic('heavy')}
                    className={`p-4 bg-black border text-center transition-all active:scale-95 ${
                      hapticEffect === 'heavy' ? 'border-[#FF3B3F] bg-[#FF3B3F]/10' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <p className="text-xs font-black uppercase text-white">Impact: Heavy</p>
                    <p className="text-[9px] font-mono uppercase text-white/40 mt-1">Haptics.ImpactFeedbackStyle.Heavy</p>
                  </button>

                  <button
                    onClick={() => triggerHaptic('notification')}
                    className={`p-4 bg-black border text-center transition-all active:scale-95 col-span-2 sm:col-span-3 ${
                      hapticEffect === 'notification' ? 'border-[#FF3B3F] bg-[#FF3B3F]/10' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <p className="text-xs font-black uppercase text-[#FF3B3F]">Notification Feedback (Success / Warning)</p>
                    <p className="text-[9px] font-mono uppercase text-white/40 mt-1">Haptics.notificationAsync(NotificationFeedbackType.Success)</p>
                  </button>
                </div>

                <div className="bg-black p-3 border border-white/10 font-mono text-[10px] text-white/70">
                  <span className="text-[#FF3B3F]">import</span> * <span className="text-[#FF3B3F]">as</span> Haptics <span className="text-[#FF3B3F]">from</span> 'expo-haptics';<br />
                  <span className="text-white/40">// Zero latency invocation</span><br />
                  <span className="text-[#FF3B3F]">await</span> Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                </div>
              </div>
            )}

            {/* SDK Module Tab 2: Expo Sensors & Gyroscope */}
            {activeSdkModule === 'sensors' && (
              <div className="space-y-4">
                <div className="bg-black p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#FF3B3F] font-bold">expo-sensors</span>
                    <span className="text-[10px] font-mono text-white/40">Accelerometer & Gyroscope 60Hz</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Live hardware sensor telemetry polling for parallax 3D cards, step detection, and orientation-aware shaders.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-black p-4 border border-white/10 text-center">
                    <p className="text-[9px] font-mono uppercase text-white/40">Axis X</p>
                    <p className="text-lg font-mono font-black text-[#FF3B3F] mt-1">{sensorTilt.x}°</p>
                    <input
                      type="range"
                      min="-45"
                      max="45"
                      value={sensorTilt.x}
                      onChange={(e) => setSensorTilt({ ...sensorTilt, x: Number(e.target.value) })}
                      className="w-full accent-[#FF3B3F] mt-2 cursor-pointer"
                    />
                  </div>

                  <div className="bg-black p-4 border border-white/10 text-center">
                    <p className="text-[9px] font-mono uppercase text-white/40">Axis Y</p>
                    <p className="text-lg font-mono font-black text-white mt-1">{sensorTilt.y}°</p>
                    <input
                      type="range"
                      min="-45"
                      max="45"
                      value={sensorTilt.y}
                      onChange={(e) => setSensorTilt({ ...sensorTilt, y: Number(e.target.value) })}
                      className="w-full accent-[#FF3B3F] mt-2 cursor-pointer"
                    />
                  </div>

                  <div className="bg-black p-4 border border-white/10 text-center">
                    <p className="text-[9px] font-mono uppercase text-white/40">Axis Z (Gravity)</p>
                    <p className="text-lg font-mono font-black text-white/70 mt-1">{sensorTilt.z} m/s²</p>
                    <button
                      onClick={() => setSensorTilt({ x: 0, y: 0, z: 98 })}
                      className="mt-2 text-[9px] font-mono uppercase text-[#FF3B3F] hover:underline"
                    >
                      Calibrate
                    </button>
                  </div>
                </div>

                {/* 3D Simulated Device Tilt Indicator */}
                <div className="p-6 bg-black border border-white/10 flex items-center justify-center">
                  <div
                    style={{
                      transform: `perspective(600px) rotateX(${-sensorTilt.y}deg) rotateY(${sensorTilt.x}deg)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                    className="w-48 h-24 bg-[#181818] border-2 border-[#FF3B3F] flex items-center justify-center shadow-2xl relative"
                  >
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase tracking-wider text-white">Expo Skia 3D Target</p>
                      <p className="text-[9px] font-mono text-[#FF3B3F]">{sensorTilt.x}°, {sensorTilt.y}°</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SDK Module Tab 3: Expo SecureStore & SQLite */}
            {activeSdkModule === 'storage' && (
              <div className="space-y-4">
                <div className="bg-black p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#FF3B3F] font-bold">expo-secure-store</span>
                    <span className="text-[10px] font-mono text-white/40">iOS Keychain & Android Keystore</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Hardware-backed cryptographic storage for auth tokens, biometric session certificates, and sensitive credentials.
                  </p>
                </div>

                <div className="bg-black p-4 border border-white/10 space-y-2">
                  <p className="text-[9px] font-mono uppercase tracking-wider text-white/40 font-bold mb-2">Encrypted Keystore Records:</p>
                  {Object.entries(secureTokens).map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between p-2.5 bg-[#121212] border border-white/5 font-mono text-xs">
                      <span className="text-white/80 font-bold">{k}</span>
                      <span className="text-[#FF3B3F] truncate max-w-[200px] text-[11px]">{v}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddSecureToken} className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  <input
                    type="text"
                    placeholder="Key name..."
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    className="sm:col-span-2 bg-black border border-white/10 px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF3B3F]"
                  />
                  <input
                    type="text"
                    placeholder="Encrypted payload..."
                    value={newVal}
                    onChange={(e) => setNewVal(e.target.value)}
                    className="sm:col-span-2 bg-black border border-white/10 px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF3B3F]"
                  />
                  <button
                    type="submit"
                    className="bg-[#FF3B3F] hover:bg-[#ff5558] text-black font-black text-[10px] uppercase tracking-wider py-2"
                  >
                    Save Key
                  </button>
                </form>
              </div>
            )}

            {/* SDK Module Tab 4: Expo Notifications */}
            {activeSdkModule === 'notifications' && (
              <div className="space-y-4">
                <div className="bg-black p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#FF3B3F] font-bold">expo-notifications</span>
                    <span className="text-[10px] font-mono text-white/40">APNs & FCM Remote / Local Push</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Zero-compromise background and foreground push notification pipelines with action categories and deep linking hooks.
                  </p>
                </div>

                <div className="p-6 bg-black border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                  <AnimatePresence>
                    {notificationSent && (
                      <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="w-full max-w-md bg-[#181818] border-2 border-[#FF3B3F] p-4 shadow-2xl mb-6 flex items-start gap-3"
                      >
                        <div className="w-8 h-8 bg-[#FF3B3F] text-black flex items-center justify-center font-black text-xs shrink-0">
                          CP
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase font-bold text-white">Clent Archin Paras • Expo</span>
                            <span className="text-[9px] font-mono text-white/40">now</span>
                          </div>
                          <p className="text-xs font-black uppercase text-[#FF3B3F] mt-0.5">Application Ready for Review</p>
                          <p className="text-[11px] text-white/70 mt-0.5">Production EAS build v52.0.4 has been certified and dispatched to App Store Connect.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={handleSendNotification}
                    className="px-6 py-3 bg-[#FF3B3F] hover:bg-[#ff5558] text-black font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-lg flex items-center gap-2"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Dispatch Test Push Notification</span>
                  </button>
                </div>
              </div>
            )}

            {/* SDK Module Tab 5: Expo Location & Geofencing */}
            {activeSdkModule === 'location' && (
              <div className="space-y-4">
                <div className="bg-black p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#FF3B3F] font-bold">expo-location</span>
                    <span className="text-[10px] font-mono text-white/40">Background Geofence & GPS</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Battery-efficient background GPS coordinate acquisition and geofencing triggers calibrated for food delivery & fitness telemetry.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black p-4 border border-white/10 font-mono text-xs">
                  <div>
                    <p className="text-[9px] uppercase text-white/40">Latitude</p>
                    <p className="text-sm font-bold text-[#FF3B3F] mt-0.5">7.0731° N</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase text-white/40">Longitude</p>
                    <p className="text-sm font-bold text-white mt-0.5">125.6128° E</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase text-white/40">Accuracy</p>
                    <p className="text-sm font-bold text-emerald-400 mt-0.5">± 3.2 meters</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase text-white/40">Region</p>
                    <p className="text-sm font-bold text-white/80 mt-0.5">Davao City, PH</p>
                  </div>
                </div>

                <div className="bg-black p-3 border border-white/10 text-[10px] font-mono text-white/60">
                  <span>Affiliated Hub: </span>
                  <span className="text-[#FF3B3F] font-bold">University of Mindanao Matina Campus</span>
                  <span> • Background Task Worker: </span>
                  <span className="text-emerald-400 font-bold">TaskManager.defineTask('TRACK_GPS')</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom EAS Cloud Build Console & Starter Box */}
        <div className="bg-[#121212] border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FF3B3F]" />
                <h3 className="text-base font-black uppercase tracking-wider text-white">EAS Build & Config Plugin Console</h3>
              </div>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
                Inspect live EAS build pipelines, app.json configurations, and Expo Router navigation tree
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex bg-black p-1 border border-white/10">
                <button
                  onClick={() => setActiveTerminalTab('eas')}
                  className={`px-3 py-1 text-[9px] font-mono uppercase tracking-wider font-bold transition-all ${
                    activeTerminalTab === 'eas' ? 'bg-[#FF3B3F] text-black font-black' : 'text-white/50 hover:text-white'
                  }`}
                >
                  eas build
                </button>
                <button
                  onClick={() => setActiveTerminalTab('config')}
                  className={`px-3 py-1 text-[9px] font-mono uppercase tracking-wider font-bold transition-all ${
                    activeTerminalTab === 'config' ? 'bg-[#FF3B3F] text-black font-black' : 'text-white/50 hover:text-white'
                  }`}
                >
                  app.json
                </button>
                <button
                  onClick={() => setActiveTerminalTab('router')}
                  className={`px-3 py-1 text-[9px] font-mono uppercase tracking-wider font-bold transition-all ${
                    activeTerminalTab === 'router' ? 'bg-[#FF3B3F] text-black font-black' : 'text-white/50 hover:text-white'
                  }`}
                >
                  expo-router
                </button>
              </div>

              <button
                onClick={triggerSimulatedBuild}
                disabled={isBuildingEas}
                className="px-3 py-1.5 bg-white/10 hover:bg-[#FF3B3F] hover:text-black text-white text-[10px] font-mono uppercase tracking-wider transition-colors flex items-center gap-1 border border-white/10"
              >
                <RotateCw className={`w-3 h-3 ${isBuildingEas ? 'animate-spin text-[#FF3B3F]' : ''}`} />
                <span>Trigger EAS Build</span>
              </button>
            </div>
          </div>

          {/* Terminal Display */}
          <div className="mt-6 bg-black p-4 sm:p-6 border border-white/10 font-mono text-xs overflow-x-auto leading-relaxed text-white/80">
            {activeTerminalTab === 'eas' && (
              <div className="space-y-1.5">
                <p className="text-white/40"># Run EAS Cloud Build for production release</p>
                <p><span className="text-[#FF3B3F]">$</span> eas build --platform all --profile production --auto-submit</p>
                <p className="text-white/50">✔ Verified Expo SDK 52.0.0 dependencies</p>
                <p className="text-white/50">✔ Running expo prebuild (generating ephemeral iOS & Android native trees)</p>
                <p className="text-white/50">✔ Executing Config Plugins: [expo-camera, expo-location, expo-haptics, expo-sqlite]</p>
                <p className="text-emerald-400">✔ Apple Developer Provisioning Profile: [clentparas.pulsefit.production]</p>
                <p className="text-emerald-400">✔ Android Keystore: [upload.keystore verified with SHA256]</p>
                <p className="text-white/70">✔ Hermes Bytecode Ahead-of-Time compilation completed in 14.2s</p>
                <div className="w-full bg-white/10 h-1.5 my-2">
                  <div className="bg-[#FF3B3F] h-full transition-all duration-300" style={{ width: `${easProgress}%` }} />
                </div>
                <p className="text-[#FF3B3F] font-bold">
                  {isBuildingEas ? `[EAS] Compiling artifacts on Cloud Mac M2 worker... ${easProgress}%` : '[EAS BUILD SUCCESS] iOS .ipa & Android .aab ready for App Store & Google Play distribution.'}
                </p>
              </div>
            )}

            {activeTerminalTab === 'config' && (
              <pre className="text-[11px] text-white/80 whitespace-pre leading-relaxed">
{`{
  "expo": {
    "name": "PulseFit Track",
    "slug": "pulsefit-track",
    "version": "1.0.4",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0a0a0a"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.clentparas.pulsefit",
      "infoPlist": {
        "NSCameraUsageDescription": "PulseFit uses the camera to scan barcode labels on meal plans.",
        "NSLocationWhenInUseUsageDescription": "Continuous GPS telemetry is recorded during outdoor running workouts."
      }
    },
    "android": {
      "package": "com.clentparas.pulsefit",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0a0a0a"
      }
    },
    "plugins": [
      "expo-router",
      "expo-haptics",
      "expo-secure-store",
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow PulseFit to record running paths in background."
        }
      ]
    ],
    "extra": {
      "eas": {
        "projectId": "8b5a04e2-6320-41ab-8914-1c9f4d2bb724"
      }
    }
  }
}`}
              </pre>
            )}

            {activeTerminalTab === 'router' && (
              <pre className="text-[11px] text-white/80 whitespace-pre leading-relaxed">
{`app/
├── _layout.tsx           // Root Layout with ThemeProvider & SQLite Database Provider
├── (tabs)/
│   ├── _layout.tsx       // 60FPS Fluid Animated Tab Bar with Haptic feedback
│   ├── index.tsx         // PulseFit Live Telemetry & Workout Dashboard
│   ├── explore.tsx       // OmniShop M-Commerce Catalog & Instant Search
│   ├── chat.tsx          // DevChat Real-time Supabase Stream
│   └── settings.tsx      // EAS OTA Update & Hermes Engine Diagnostics
├── workout/
│   └── [id].tsx          // Dynamic Route for High-Intensity Exercise Detail
└── modal.tsx             // Reanimated Modal Sheet with Gesture Dismissal`}
              </pre>
            )}
          </div>

          {/* Quick CLI Starter Copy */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#FF3B3F]" />
              <p className="text-xs uppercase tracking-wider text-white">
                Launch Clent's Production Expo Template in 1 Command:
              </p>
            </div>

            <div className="flex items-center gap-2 bg-black px-3 py-2 border border-white/10 w-full sm:w-auto justify-between">
              <code className="text-[10px] font-mono text-[#FF3B3F] truncate">{expoStarterCmd}</code>
              <button
                onClick={copyStarter}
                className="p-1 text-white/60 hover:text-white"
                title="Copy Command"
              >
                {copiedStarter ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
