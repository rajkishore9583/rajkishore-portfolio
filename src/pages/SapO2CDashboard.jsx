import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Truck, 
  FileText, 
  CreditCard, 
  Search, 
  Filter, 
  Copy, 
  Check, 
  Layers, 
  Cpu, 
  Database, 
  Activity, 
  Sparkles,
  Info,
  X,
  Code
} from 'lucide-react';

const mockOrders = [
  { id: "SO-45000121", customer: "Tata Motors Commercial Vehicle Div", region: "North India", value: 345000, stage: "Cleared", stageCode: "F-28", status: "Normal Flow", cycleDays: 4.2, baselineDays: 7.2, deliveryDoc: "80000121", billingDoc: "90000121" },
  { id: "SO-45000122", customer: "Larsen & Toubro Heavy Engineering", region: "West Hub", value: 480000, stage: "Credit Check", stageCode: "VKM1", status: "Credit Block", cycleDays: 8.5, baselineDays: 8.9, deliveryDoc: "Pending Release", billingDoc: "On Hold" },
  { id: "SO-45000123", customer: "Reliance New Energy Logistics", region: "West Hub", value: 290000, stage: "Billing", stageCode: "VF01", status: "Normal Flow", cycleDays: 4.8, baselineDays: 6.9, deliveryDoc: "80000123", billingDoc: "90000123" },
  { id: "SO-45000124", customer: "Dr. Reddy's Laboratories Pharma SEZ", region: "South Zone", value: 185000, stage: "Outbound Delivery", stageCode: "VL01N", status: "Delivery Block", cycleDays: 9.1, baselineDays: 10.2, deliveryDoc: "80000124", billingDoc: "Pending GI" },
  { id: "SO-45000125", customer: "Adani Ports & Special Economic Zone", region: "West Hub", value: 410000, stage: "Cleared", stageCode: "F-28", status: "Normal Flow", cycleDays: 4.5, baselineDays: 7.0, deliveryDoc: "80000125", billingDoc: "90000125" },
  { id: "SO-45000126", customer: "Bharat Heavy Electricals Ltd (BHEL)", region: "Central", value: 152000, stage: "Goods Issue", stageCode: "VL02N", status: "Normal Flow", cycleDays: 3.9, baselineDays: 6.5, deliveryDoc: "80000126", billingDoc: "Queued" },
  { id: "SO-45000127", customer: "JSW Steel Industrial Coated Co", region: "South Zone", value: 275000, stage: "Billing", stageCode: "VF01", status: "Billing Block", cycleDays: 7.8, baselineDays: 8.4, deliveryDoc: "80000127", billingDoc: "90000127 (Price Hold)" },
  { id: "SO-45000128", customer: "Mahindra & Mahindra Auto Sector", region: "West Hub", value: 395000, stage: "Cleared", stageCode: "F-28", status: "Normal Flow", cycleDays: 4.6, baselineDays: 7.3, deliveryDoc: "80000128", billingDoc: "90000128" },
  { id: "SO-45000129", customer: "Siemens Energy India Substation Div", region: "North India", value: 430000, stage: "Order Creation", stageCode: "VA01", status: "Normal Flow", cycleDays: 1.1, baselineDays: 2.5, deliveryDoc: "In Staging", billingDoc: "Pending" },
  { id: "SO-45000130", customer: "Schneider Electric Infrastructure", region: "South Zone", value: 210000, stage: "Credit Check", stageCode: "VKM1", status: "Credit Block", cycleDays: 8.2, baselineDays: 8.8, deliveryDoc: "Pending Release", billingDoc: "On Hold" },
  { id: "SO-45000131", customer: "National Thermal Power Corp (NTPC)", region: "North India", value: 520000, stage: "Cleared", stageCode: "F-28", status: "Normal Flow", cycleDays: 4.3, baselineDays: 7.1, deliveryDoc: "80000131", billingDoc: "90000131" },
  { id: "SO-45000132", customer: "Hindustan Petroleum Corp (HPCL)", region: "South Zone", value: 310000, stage: "Outbound Delivery", stageCode: "VL01N", status: "Normal Flow", cycleDays: 3.8, baselineDays: 6.7, deliveryDoc: "80000132", billingDoc: "In Picking" }
];

const pipelineStages = [
  { id: "va01", name: "Order Creation", tcode: "VA01 / BAPI", count: 120, avgLead: "0.4 Days", status: "Normal", desc: "Automated bulk sales order ingestion from external B2B telemetry into SAP S/4HANA via BAPI_SALESORDER_CREATEFROMDAT2." },
  { id: "vkm1", name: "Credit Check", tcode: "VKM1 / FSCM", count: 110, avgLead: "1.1 Days", status: "Warning", alerts: "10 Credit Holds", desc: "Dynamic credit ceiling calculation against customer open items and automated financial clearing rules." },
  { id: "vl01n", name: "Delivery Staging", tcode: "VL01N", count: 107, avgLead: "1.2 Days", status: "Warning", alerts: "3 Shortages", desc: "Outbound delivery creation, batch allocation in plant warehouse, and transport schedule synchronization." },
  { id: "vl02n", name: "Goods Issue (PGI)", tcode: "VL02N", count: 105, avgLead: "0.8 Days", status: "Normal", desc: "Physical warehouse picking confirmation, barcode verification, and Post Goods Issue inventory deduction." },
  { id: "vf01", name: "Billing & Invoicing", tcode: "VF01", count: 100, avgLead: "0.9 Days", status: "Warning", alerts: "5 Price Variances", desc: "Commercial invoice generation, tax determination, and transmission to customer EDI accounts." },
  { id: "f28", name: "Payment Clearing", tcode: "F-28 / FI-AR", count: 94, avgLead: "0.4 Days", status: "Normal", desc: "Automated cash application, bank statement reconciliation, and open AR account clearing." }
];

export default function SapO2CDashboard() {
  const [selectedStage, setSelectedStage] = useState(pipelineStages[1]);
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrderDoc, setSelectedOrderDoc] = useState(null);
  const [showEnvModal, setShowEnvModal] = useState(false);
  const [copiedEnv, setCopiedEnv] = useState(false);

  // BDC Simulator States
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [syncLogs, setSyncLogs] = useState([
    "[SYSTEM IDLE] SAP BDC Queue ready. Session 'ZSD_O2C_SYNC' standing by."
  ]);
  const [syncStats, setSyncStats] = useState({
    ordersProcessed: 120,
    activeBottlenecks: 12,
    completionPct: 78
  });

  const runBdcSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncProgress(10);
    setSyncLogs([
      "[18:30:01] Initializing SAP BDC Session 'ZSD_O2C_SYNC' via BDC_OPEN_GROUP...",
      "[18:30:02] Fetching unposted sales order queue from SAP BTP Data Ingestion buffer..."
    ]);

    setTimeout(() => {
      setSyncProgress(35);
      setSyncLogs(prev => [
        ...prev,
        "[18:30:03] Processing batch order intake via BAPI_SALESORDER_CREATEFROMDAT2...",
        "[18:30:04] SUCCESS: Committed 24 new Sales Orders. SAP Internal Numbers generated (45000133 - 45000156)."
      ]);
    }, 1100);

    setTimeout(() => {
      setSyncProgress(70);
      setSyncLogs(prev => [
        ...prev,
        "[18:30:05] Running automated credit re-check in VKM1 for pending accounts...",
        "[18:30:06] ALERT: 2 orders flagged for credit ceiling threshold. Routing to Finance Controller queue.",
        "[18:30:07] Synchronizing Outbound Delivery batches (VL01N) with Warehouse Plant IN10..."
      ]);
    }, 2400);

    setTimeout(() => {
      setSyncProgress(100);
      setSyncLogs(prev => [
        ...prev,
        "[18:30:08] Invoicing batches executed via VF01. Financial postings updated in FI-AR.",
        "[18:30:09] [SYNC COMPLETE] BDC Session closed. 100% data integrity verified. Process cycle time optimized."
      ]);
      setIsSyncing(false);
      setSyncStats(prev => ({
        ordersProcessed: prev.ordersProcessed + 24,
        activeBottlenecks: Math.max(8, prev.activeBottlenecks - 3),
        completionPct: 88
      }));
    }, 3800);
  };

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.region.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'blocked') return matchesSearch && order.status !== 'Normal Flow';
    if (filterType === 'ontrack') return matchesSearch && order.status === 'Normal Flow' && order.stage !== 'Cleared';
    if (filterType === 'completed') return matchesSearch && order.stage === 'Cleared';
    return matchesSearch;
  });

  const envTemplate = `# SAP S/4HANA Cloud / SAP BTP Destination Connection
SAP_HOST=https://my300123-api.s4hana.cloud.sap
SAP_CLIENT=100
SAP_AUTH_TYPE=OAuth2ClientCredentials
SAP_BTP_DESTINATION_NAME=S4HANA_O2C_DESTINATION
SAP_OAUTH_TOKEN_URL=https://my-subaccount.authentication.eu10.hana.ondemand.com/oauth/token
SAP_CLIENT_ID=sb-clone-destination!b1234
SAP_CLIENT_SECRET=your_btp_client_secret_here
SAP_API_SALES_ORDER=/sap/opu/odata/sap/API_SALES_ORDER_SRV
BDC_MAX_BATCH_SIZE=250`;

  const copyEnv = () => {
    navigator.clipboard.writeText(envTemplate);
    setCopiedEnv(true);
    setTimeout(() => setCopiedEnv(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Sticky Bar */}
      <header className="sticky top-0 z-40 bg-[#070b12]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="/#projects"
            className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Portfolio</span>
          </a>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                SAP S/4HANA O2C OPTIMIZATION
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Order-to-Cash Process Mining & BDC Automation Simulator
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowEnvModal(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span>.env.example</span>
          </button>

          <a
            href="https://github.com/rajkishore9583/sap-s4hana-o2c-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900/50 transition-colors flex items-center gap-1.5 shadow-sm shadow-cyan-500/15"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Security & Architecture Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-emerald-950/20 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">Safe Enterprise Simulation Environment</span>
              <span className="text-slate-400">
                Operating on simulated SAP S/4HANA CDS views (`VBAK`, `LIKP`, `VBRK`). No production credentials stored.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] shrink-0">
            <span>Process Mining Engine:</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-emerald-400">Python 3.14 + Pandas</span>
          </div>
        </div>

        {/* Top 6 KPI Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="glass-card rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>Pipeline Revenue</span>
              <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <p className="text-xl font-extrabold text-white font-mono">$14.2M</p>
            <span className="text-[11px] font-mono text-emerald-400">+8.4% YoY Volume</span>
          </div>

          <div className="glass-card rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>Avg. Cycle Time</span>
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-xl font-extrabold text-emerald-400 font-mono">4.8 Days</p>
            <span className="text-[11px] font-mono text-cyan-400">-31.8% vs Baseline (7.1d)</span>
          </div>

          <div className="glass-card rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>Fulfillment Rate</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <p className="text-xl font-extrabold text-white font-mono">91%</p>
            <span className="text-[11px] font-mono text-emerald-400">+14% Post-BDC</span>
          </div>

          <div className="glass-card rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>On-Time Delivery</span>
              <Truck className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <p className="text-xl font-extrabold text-white font-mono">87%</p>
            <span className="text-[11px] font-mono text-slate-400">Target: 85%</span>
          </div>

          <div className="glass-card rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>Credit Approvals</span>
              <CreditCard className="w-3.5 h-3.5 text-teal-400" />
            </div>
            <p className="text-xl font-extrabold text-white font-mono">94%</p>
            <span className="text-[11px] font-mono text-emerald-400">Auto Pass (VKM1)</span>
          </div>

          <div className="glass-card rounded-xl p-4 border border-rose-500/20 bg-rose-950/10 space-y-1">
            <div className="flex items-center justify-between text-rose-300 text-xs font-mono">
              <span>Delayed Orders</span>
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            </div>
            <p className="text-xl font-extrabold text-rose-400 font-mono">{syncStats.activeBottlenecks}</p>
            <span className="text-[11px] font-mono text-rose-400/80">Requires Clearance</span>
          </div>
        </div>

        {/* Live O2C Pipeline Tracker (6 Stages) */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Live 6-Stage Order-to-Cash Pipeline Flow</h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  {syncStats.completionPct}% Overall Completion
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Click any stage to drill down into SAP transaction codes, throughput, and bottleneck diagnostics.</p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>Normal</span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block ml-2" />
              <span>Bottleneck Alert</span>
            </div>
          </div>

          {/* Interactive Pipeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {pipelineStages.map((stage, idx) => {
              const isSelected = selectedStage.id === stage.id;
              const hasAlert = !!stage.alerts;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`relative p-4 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/15 scale-[1.02]'
                      : 'bg-slate-900/60 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-white/5">
                      Step 0{idx + 1}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${hasAlert ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                  </div>

                  <h3 className="font-bold text-sm text-white leading-tight">{stage.name}</h3>
                  <p className="text-[11px] font-mono text-cyan-400 mt-1">{stage.tcode}</p>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">{stage.count} orders</span>
                    <span className="text-slate-300 font-semibold">{stage.avgLead}</span>
                  </div>

                  {stage.alerts && (
                    <div className="mt-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30 truncate">
                      ⚠️ {stage.alerts}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Expanded Selected Stage Diagnostics Drawer */}
          {selectedStage && (
            <motion.div
              key={selectedStage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 space-y-3 text-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-white text-sm">
                    Stage Diagnostics: {selectedStage.name} ({selectedStage.tcode})
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/20">
                  Avg Duration: {selectedStage.avgLead}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">{selectedStage.desc}</p>
            </motion.div>
          )}
        </div>

        {/* BDC Batch Synchronization Simulator */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">SAP BDC Batch Data Communication Simulator</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Live Engine
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Simulate bulk order creation using SAP BAPI / BDC session routines (`ZSD_O2C_SYNC`).
              </p>
            </div>

            <button
              onClick={runBdcSync}
              disabled={isSyncing}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold font-mono text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
            >
              <Play className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Processing Batch Work...' : 'Run BDC Batch Sync'}</span>
            </button>
          </div>

          {/* Progress Bar */}
          {isSyncing && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>Executing session in background mode (SM35)...</span>
                <span>{syncProgress}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${syncProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Streaming Log Terminal */}
          <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-[11px] text-cyan-300 space-y-1 max-h-40 overflow-y-auto">
            {syncLogs.map((log, idx) => (
              <div key={idx} className="leading-relaxed">
                <span className="text-slate-500 mr-2">&gt;</span>
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* Regional Throughput & Bottleneck Table */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Regional O2C Sales Order Flow & Bottlenecks</h3>
              <p className="text-xs text-slate-400">Simulated SAP sales documents from table extract `VBAK` with lead times and document flow.</p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              {[
                { id: 'all', label: `All (${mockOrders.length})` },
                { id: 'blocked', label: 'Bottlenecks (4)' },
                { id: 'ontrack', label: 'In Progress (4)' },
                { id: 'completed', label: 'Cleared (4)' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilterType(tab.id)}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    filterType === tab.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-slate-900 text-slate-400 border border-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Sales Order ID (e.g. SO-45000121), Customer Name, or Region..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-3">Sales Doc (VBAK)</th>
                  <th className="p-3">Sold-To Party (Customer)</th>
                  <th className="p-3">Region</th>
                  <th className="p-3">Net Value</th>
                  <th className="p-3">Current Stage</th>
                  <th className="p-3">Bottleneck Status</th>
                  <th className="p-3">Cycle Time</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {filteredOrders.map(order => {
                  const isBlocked = order.status !== 'Normal Flow';

                  return (
                    <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-bold text-white">{order.id}</td>
                      <td className="p-3 text-slate-200">{order.customer}</td>
                      <td className="p-3 text-slate-400">{order.region}</td>
                      <td className="p-3 font-semibold text-cyan-300">${order.value.toLocaleString()}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[11px] bg-slate-900 border border-white/10 text-slate-300">
                          {order.stage} ({order.stageCode})
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isBlocked
                            ? 'bg-rose-950/40 text-rose-300 border border-rose-500/30'
                            : 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-white">{order.cycleDays}d</span>
                          <span className="text-[10px] text-emerald-400">(-{Math.round(((order.baselineDays - order.cycleDays)/order.baselineDays)*100)}%)</span>
                        </div>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => setSelectedOrderDoc(order)}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-cyan-400 hover:text-cyan-300 text-[11px] transition-colors"
                        >
                          Inspect Flow
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: Document Flow Drilldown */}
        <AnimatePresence>
          {selectedOrderDoc && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg glass-card rounded-2xl p-6 border border-white/15 bg-slate-950/95 space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">SAP Document Flow Analysis</span>
                    <h4 className="text-base font-bold text-white">{selectedOrderDoc.id}</h4>
                  </div>
                  <button onClick={() => setSelectedOrderDoc(null)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <span className="text-slate-400 text-[10px]">Customer Sold-To:</span>
                    <p className="font-bold text-white">{selectedOrderDoc.customer}</p>
                    <span className="text-slate-500 text-[11px]">Region: {selectedOrderDoc.region}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                      <span className="text-[10px] text-slate-500 block">VBAK (Sales Doc)</span>
                      <span className="font-bold text-cyan-400">{selectedOrderDoc.id}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                      <span className="text-[10px] text-slate-500 block">LIKP (Delivery)</span>
                      <span className="font-bold text-emerald-400">{selectedOrderDoc.deliveryDoc}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                      <span className="text-[10px] text-slate-500 block">VBRK (Billing)</span>
                      <span className="font-bold text-blue-400">{selectedOrderDoc.billingDoc}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Order Value:</span>
                      <span className="font-bold text-white">${selectedOrderDoc.value.toLocaleString()} USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Bottleneck Status:</span>
                      <span className="font-bold text-rose-400">{selectedOrderDoc.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Optimized Cycle:</span>
                      <span className="font-bold text-emerald-400">{selectedOrderDoc.cycleDays} Days (Baseline: {selectedOrderDoc.baselineDays}d)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedOrderDoc(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    Close Inspection
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal: .env.example Template */}
        <AnimatePresence>
          {showEnvModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-xl glass-card rounded-2xl p-6 border border-white/15 bg-slate-950/95 space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-base font-bold text-white">SAP S/4HANA Connection Template (.env.example)</h4>
                  </div>
                  <button onClick={() => setShowEnvModal(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  To connect this dashboard to an actual SAP BTP Destination or S/4HANA OData service, populate the environment variables below in your deployment setting:
                </p>

                <div className="relative">
                  <pre className="p-4 rounded-xl bg-black/90 border border-white/10 text-[11px] font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                    {envTemplate}
                  </pre>
                  <button
                    onClick={copyEnv}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedEnv ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs font-mono text-slate-500">
                  <span>Zero credentials hardcoded. 100% compliant.</span>
                  <button
                    onClick={() => setShowEnvModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
