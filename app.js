// AntiGravity Multimodal Content Core Simulator

// Mock Data for the top 5 viral clips extracted from a 10-minute long-form master video
const viralClips = [
    {
        id: 1,
        title: "The Cyber Revolution",
        duration: "30s",
        timeRange: "00:45 - 01:15",
        confidence: "98.7%",
        rawSecondsStart: 45,
        rawSecondsEnd: 75,
        brollImage: "assets/broll_cyberpunk_city.png",
        brollPrompt: "Cinematic low-angle shot of chrome transport flying over glowing neon cyber city skyline, volumetric fog, high reflections.",
        brollMatch: "98.1% Alignment",
        retentionScore: 94,
        shareIndex: 88,
        ctrIndex: 72,
        hooks: [
            { type: "Curiosity Hook", rating: "96.4%", text: "They don't want you to know how close we are to a complete digital takeover..." },
            { type: "Bold Claim Hook", rating: "93.1%", text: "The traditional corporate structure is dead. Cybernetics just replaced it." },
            { type: "Question Hook", rating: "89.5%", text: "Are you ready to adapt to the new gravity of artificial intelligence?" }
        ],
        caption: "🚨 THE GAME HAS CHANGED. 🚨\n\nWe are officially crossing the event horizon of digital integration. Standard assets are being re-architected. Artificial networks are dismantling legacy code in seconds.\n\nAre you watching from the sidelines or building the future?\n\nDouble tap if you're adapting. 💻✨\n\n#AntiGravity #CyberpunkFuture #AITransformation #TechEngine #WebDevelopment #Glassmorphic",
        transcript: [
            { word: "The", start: 0, end: 300, conf: 0.99 },
            { word: "cyber", start: 300, end: 650, conf: 0.98 },
            { word: "revolution", start: 650, end: 1200, conf: 0.99 },
            { word: "isn't", start: 1200, end: 1500, conf: 0.97 },
            { word: "coming.", start: 1500, end: 2000, conf: 0.99 },
            { word: "It's", start: 2200, end: 2500, conf: 0.98 },
            { word: "already", start: 2500, end: 2800, conf: 0.99 },
            { word: "woven", start: 2800, end: 3200, conf: 0.85 }, // lower confidence
            { word: "into", start: 3200, end: 3500, conf: 0.99 },
            { word: "the", start: 3500, end: 3700, conf: 0.99 },
            { word: "very", start: 3700, end: 4000, conf: 0.99 },
            { word: "fabric", start: 4000, end: 4400, conf: 0.99 },
            { word: "of", start: 4400, end: 4600, conf: 0.99 },
            { word: "our", start: 4600, end: 4800, conf: 0.99 },
            { word: "code.", start: 4800, end: 5500, conf: 0.99 },
            { word: "Legacy", start: 6000, end: 6500, conf: 0.98 },
            { word: "systems", start: 6500, end: 7000, conf: 0.99 },
            { word: "are", start: 7000, end: 7200, conf: 0.99 },
            { word: "shattering", start: 7200, end: 7800, conf: 0.96 },
            { word: "under", start: 7800, end: 8100, conf: 0.99 },
            { word: "the", start: 8100, end: 8300, conf: 0.99 },
            { word: "sheer", start: 8300, end: 8600, conf: 0.92 },
            { word: "mass", start: 8600, end: 9000, conf: 0.97 },
            { word: "of", start: 9000, end: 9200, conf: 0.99 },
            { word: "neural", start: 9200, end: 9600, conf: 0.98 },
            { word: "computing.", start: 9600, end: 10400, conf: 0.99 },
            { word: "We", start: 10800, end: 11000, conf: 0.99 },
            { word: "no", start: 11000, end: 11200, conf: 0.99 },
            { word: "longer", start: 11200, end: 11500, conf: 0.99 },
            { word: "build", start: 11500, end: 11900, conf: 0.99 },
            { word: "interfaces,", start: 11900, end: 12600, conf: 0.98 },
            { word: "we", start: 12800, end: 13000, conf: 0.99 },
            { word: "synthesize", start: 13000, end: 13500, conf: 0.82 }, // lower confidence
            { word: "immersive", start: 13500, end: 14100, conf: 0.99 },
            { word: "environments.", start: 14100, end: 15000, conf: 0.99 }
        ]
    },
    {
        id: 2,
        title: "AI Neural Core",
        duration: "25s",
        timeRange: "02:30 - 02:55",
        confidence: "94.2%",
        rawSecondsStart: 150,
        rawSecondsEnd: 175,
        brollImage: "assets/broll_holographic_brain.png",
        brollPrompt: "Glowing high-tech neural network node inside a dark server facility, volumetric purple lighting streams, chrome wire detail.",
        brollMatch: "95.4% Alignment",
        retentionScore: 89,
        shareIndex: 91,
        ctrIndex: 68,
        hooks: [
            { type: "Curiosity Hook", rating: "94.1%", text: "Inside the server racks of the future, a new consciousness is editing your assets..." },
            { type: "Bold Claim Hook", rating: "91.8%", text: "Human editors aren't slow—they're just bound by legacy physical coordinates." },
            { type: "Question Hook", rating: "85.2%", text: "How much of your content is actually mapped by deep neural layers?" }
        ],
        caption: "🧠 DEEP NEURAL MATRIX. 🧠\n\nThe heart of the AntiGravity engine isn't standard scripts. It is a live neural web mapping emotional peaks in milliseconds.\n\nEvery wave is balanced. Every frame is optimized.\n\nUplink complete. Welcome to the core.\n\n#ArtificialIntelligence #NeuralCore #Multimodal #VideoEngine #TechDashboard #FutureMedia",
        transcript: [
            { word: "The", start: 0, end: 300, conf: 0.99 },
            { word: "neural", start: 300, end: 600, conf: 0.99 },
            { word: "network", start: 600, end: 1100, conf: 0.99 },
            { word: "processes", start: 1100, end: 1600, conf: 0.98 },
            { word: "meaning", start: 1600, end: 2100, conf: 0.99 },
            { word: "long", start: 2300, end: 2600, conf: 0.99 },
            { word: "before", start: 2600, end: 3000, conf: 0.99 },
            { word: "it", start: 3000, end: 3200, conf: 0.99 },
            { word: "generates", start: 3200, end: 3700, conf: 0.95 },
            { word: "sound.", start: 3700, end: 4300, conf: 0.99 },
            { word: "This", start: 4600, end: 4900, conf: 0.99 },
            { word: "is", start: 4900, end: 5100, conf: 0.99 },
            { word: "not", start: 5100, end: 5400, conf: 0.99 },
            { word: "automation;", start: 5400, end: 6200, conf: 0.97 },
            { word: "it", start: 6400, end: 6600, conf: 0.99 },
            { word: "is", start: 6600, end: 6800, conf: 0.99 },
            { word: "cognitive", start: 6800, end: 7400, conf: 0.88 }, // lower
            { word: "partnering.", start: 7400, end: 8200, conf: 0.99 },
            { word: "We", start: 8600, end: 8800, conf: 0.99 },
            { word: "are", start: 8800, end: 9000, conf: 0.99 },
            { word: "fusing", start: 9000, end: 9500, conf: 0.94 },
            { word: "Whisper", start: 9500, end: 10000, conf: 0.99 },
            { word: "AI", start: 10000, end: 10300, conf: 0.99 },
            { word: "and", start: 10300, end: 10500, conf: 0.99 },
            { word: "GPT", start: 10500, end: 10900, conf: 0.99 },
            { word: "capabilities", start: 10900, end: 11500, conf: 0.98 },
            { word: "to", start: 11500, end: 11700, conf: 0.99 },
            { word: "read", start: 11700, end: 12000, conf: 0.99 },
            { word: "between", start: 12000, end: 12400, conf: 0.99 },
            { word: "the", start: 12400, end: 12600, conf: 0.99 },
            { word: "frames.", start: 12600, end: 13500, conf: 0.99 }
        ]
    },
    {
        id: 3,
        title: "Futuristic Studio",
        duration: "35s",
        timeRange: "04:10 - 04:45",
        confidence: "96.1%",
        rawSecondsStart: 250,
        rawSecondsEnd: 285,
        brollImage: "assets/broll_chrome_robot.png",
        brollPrompt: "Sleek chrome humanoid robot interacting with glowing blue virtual timeline interfaces inside a high-tech media studio, premium glassmorphism overlay.",
        brollMatch: "96.7% Alignment",
        retentionScore: 92,
        shareIndex: 85,
        ctrIndex: 78,
        hooks: [
            { type: "Curiosity Hook", rating: "95.8%", text: "Your phone screen is a window into a workspace designed entirely by machines..." },
            { type: "Bold Claim Hook", rating: "90.2%", text: "Linear video is obsolete. Multimodal asset mapping is the new standard." },
            { type: "Question Hook", rating: "88.4%", text: "Would you trust a robotic strategist to choose your viral hooks?" }
        ],
        caption: "⚡ THE SYNTHETIC CREATOR. ⚡\n\nTraditional workflows drag. We float above them. By matching Whisper transcripts with automated B-roll, the creative envelope is shattered.\n\nEfficiency: 10x.\nAesthetics: Premium.\n\nJoin the core.\n\n#AutonomousCreator #Robotics #CyberpunkAesthetics #AntiGravityAI #ShortFormStrategy #ReelsCreator",
        transcript: [
            { word: "Imagine", start: 0, end: 400, conf: 0.99 },
            { word: "a", start: 400, end: 550, conf: 0.99 },
            { word: "creative", start: 550, end: 950, conf: 0.99 },
            { word: "studio", start: 950, end: 1400, conf: 0.99 },
            { word: "that", start: 1400, end: 1650, conf: 0.99 },
            { word: "operates", start: 1650, end: 2200, conf: 0.97 },
            { word: "without", start: 2200, end: 2600, conf: 0.99 },
            { word: "physical", start: 2600, end: 3200, conf: 0.99 },
            { word: "limits.", start: 3200, end: 3800, conf: 0.99 },
            { word: "A", start: 4200, end: 4400, conf: 0.99 },
            { word: "space", start: 4400, end: 4800, conf: 0.99 },
            { word: "where", start: 4800, end: 5100, conf: 0.99 },
            { word: "B-roll", start: 5100, end: 5600, conf: 0.98 },
            { word: "is", start: 5600, end: 5800, conf: 0.99 },
            { word: "woven", start: 5800, end: 6100, conf: 0.81 }, // lower
            { word: "instantly", start: 6100, end: 6700, conf: 0.99 },
            { word: "to", start: 6700, end: 6900, conf: 0.99 },
            { word: "match", start: 6900, end: 7200, conf: 0.99 },
            { word: "the", start: 7200, end: 7400, conf: 0.99 },
            { word: "emotional", start: 7400, end: 8000, conf: 0.99 },
            { word: "peaks", start: 8000, end: 8400, conf: 0.99 },
            { word: "of", start: 8400, end: 8600, conf: 0.99 },
            { word: "human", start: 8600, end: 8900, conf: 0.99 },
            { word: "expression.", start: 8900, end: 9600, conf: 0.99 },
            { word: "That", start: 10000, end: 10300, conf: 0.99 },
            { word: "workspace", start: 10300, end: 10900, conf: 0.99 },
            { word: "is", start: 10900, end: 11100, conf: 0.99 },
            { word: "online.", start: 11100, end: 11800, conf: 0.99 }
        ]
    },
    {
        id: 4,
        title: "Distributed Flow",
        duration: "20s",
        timeRange: "06:15 - 06:35",
        confidence: "91.5%",
        rawSecondsStart: 375,
        rawSecondsEnd: 395,
        brollImage: "assets/broll_cyberpunk_city.png", // fallback broll
        brollPrompt: "Futuristic visual data highway routing fiber cables through glowing metallic pipes, electric blue trails.",
        brollMatch: "91.8% Alignment",
        retentionScore: 86,
        shareIndex: 88,
        ctrIndex: 65,
        hooks: [
            { type: "Curiosity Hook", rating: "92.5%", text: "The network routing your content is more alive than the platforms themselves..." },
            { type: "Bold Claim Hook", rating: "88.6%", text: "Social media feeds are just distributed pipelines. Master the flow." }
        ],
        caption: "🌐 DATA MATRIX FLOW. 🌐\n\nOptimizing schedules across multiple channels automatically. Whisper transcripts ensure instant SEO compliance. GPT-4o secures the hooks.\n\nEverything flows. Nothing is lost.\n\n#SEOStrategy #DataFlow #MultiPlatform #PublishingEngine #CyberneticBrand",
        transcript: [
            { word: "Data", start: 0, end: 350, conf: 0.99 },
            { word: "is", start: 350, end: 550, conf: 0.99 },
            { word: "no", start: 550, end: 750, conf: 0.99 },
            { word: "longer", start: 750, end: 1100, conf: 0.99 },
            { word: "stored.", start: 1100, end: 1800, conf: 0.99 },
            { word: "It", start: 2000, end: 2200, conf: 0.99 },
            { word: "flows", start: 2200, end: 2600, conf: 0.97 },
            { word: "like", start: 2600, end: 2900, conf: 0.99 },
            { word: "light", start: 2900, end: 3300, conf: 0.99 },
            { word: "through", start: 3300, end: 3600, conf: 0.98 },
            { word: "cybernetic", start: 3600, end: 4300, conf: 0.89 },
            { word: "conduits.", start: 4300, end: 5000, conf: 0.99 }
        ]
    },
    {
        id: 5,
        title: "AntiGravity Mechanics",
        duration: "40s",
        timeRange: "08:20 - 09:00",
        confidence: "95.5%",
        rawSecondsStart: 500,
        rawSecondsEnd: 540,
        brollImage: "assets/broll_holographic_brain.png", // fallback broll
        brollPrompt: "Cinematic floating device defying gravity above a futuristic circular glass platform, glowing neon ring pulses.",
        brollMatch: "93.4% Alignment",
        retentionScore: 95,
        shareIndex: 82,
        ctrIndex: 84,
        hooks: [
            { type: "Bold Claim Hook", rating: "94.8%", text: "To float above the noise, you must completely remove the gravity of standard templates." },
            { type: "Question Hook", rating: "91.1%", text: "Why are you still using standard editor structures when you can float?" }
        ],
        caption: "🧲 SHATTER THE GRAVITY. 🧲\n\nWelcome to AntiGravity. The premium hub designed to take long footage and generate social gold. Holograms, canvas waveforms, and dynamic subtitles are online.\n\nIt is time to float.\n\n#AntiGravityCore #VideoOptimization #CybertechDashboard #AdvancedAI #CreatorStudio #PremiumAesthetics",
        transcript: [
            { word: "To", start: 0, end: 200, conf: 0.99 },
            { word: "command", start: 200, end: 600, conf: 0.99 },
            { word: "attention", start: 600, end: 1100, conf: 0.99 },
            { word: "in", start: 1100, end: 1300, conf: 0.99 },
            { word: "the", start: 1300, end: 1450, conf: 0.99 },
            { word: "holographic", start: 1450, end: 2100, conf: 0.95 },
            { word: "era,", start: 2100, end: 2600, conf: 0.99 },
            { word: "you", start: 2800, end: 3000, conf: 0.99 },
            { word: "must", start: 3000, end: 3300, conf: 0.99 },
            { word: "shed", start: 3300, end: 3600, conf: 0.91 },
            { word: "the", start: 3600, end: 3800, conf: 0.99 },
            { word: "weight", start: 3800, end: 4100, conf: 0.99 },
            { word: "of", start: 4100, end: 4300, conf: 0.99 },
            { word: "standard", start: 4300, end: 4700, conf: 0.99 },
            { word: "creation.", start: 4700, end: 5400, conf: 0.99 },
            { word: "You", start: 5800, end: 6000, conf: 0.99 },
            { word: "must", start: 6000, end: 6300, conf: 0.99 },
            { word: "become", start: 6300, end: 6600, conf: 0.99 },
            { word: "AntiGravity.", start: 6600, end: 7500, conf: 0.99 }
        ]
    }
];

// Active State variables
let activeClip = null;
let isPlaying = false;
let playTimeMs = 0;
let playbackInterval = null;
let currentStylePreset = 'neon'; // 'neon' | 'kinetic' | 'clean'
let selectedWordIndex = null;
let canvasAnimId = null;

// DOM Elements
const onboardingScreen = document.getElementById('onboarding-screen');
const dropzone = document.getElementById('upload-dropzone');
const launchBtn = document.getElementById('launch-core-btn');
const pipelineList = document.getElementById('pipeline-status-list');
const whisperTelemetry = document.getElementById('telemetry-whisper');
const transcribeFeed = document.getElementById('transcribe-live-feed');
const subtitleEditorInput = document.getElementById('subtitle-editor-input');
const activeClipTitle = document.getElementById('active-clip-title');
const activeClipBadge = document.getElementById('active-clip-badge');
const playerFrame = document.getElementById('player-frame');
const playerMockAsset = document.getElementById('player-mock-asset');
const playerSubtitleOverlay = document.getElementById('player-subtitle-overlay');
const subtitleTextBox = document.getElementById('subtitle-text-box');
const playerPlayBtn = document.getElementById('player-play-btn');
const progressTrack = document.getElementById('player-progress-track');
const progressBar = document.getElementById('player-progress-bar');
const playerTimeDisplay = document.getElementById('player-time-display');
const waveformCanvas = document.getElementById('waveform-canvas');
const timelineTrack = document.getElementById('timeline-track');
const brollShelf = document.getElementById('broll-shelf');
const hookContainer = document.getElementById('hook-variations-container');
const captionTextContent = document.getElementById('caption-text-content');
const actionBtnPreview = document.getElementById('action-btn-preview');
const actionBtnPublish = document.getElementById('action-btn-publish');
const heatmapCanvas = document.getElementById('heatmap-canvas');
const reelPreviewBackdrop = document.getElementById('reel-preview-backdrop');
const reelPreviewVideoAsset = document.getElementById('reel-preview-video-asset');
const reelKineticTextBox = document.getElementById('reel-kinetic-text-box');
const publishingOverlay = document.getElementById('publishing-overlay');

// Waveform visualizer context
const waveCtx = waveformCanvas.getContext('2d');
let wavePhase = 0;

// Onboarding Drag & Drop Events
dropzone.addEventListener('click', () => {
    document.getElementById('video-file-input').click();
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--neon-purple)';
});

dropzone.addEventListener('dragleave', () => {
    dropzone.style.borderColor = 'rgba(0, 240, 255, 0.3)';
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--neon-blue)';
    if (e.dataTransfer.files.length > 0) {
        dropzone.querySelector('h3').innerText = e.dataTransfer.files[0].name;
    }
});

document.getElementById('video-file-input').addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        dropzone.querySelector('h3').innerText = e.target.files[0].name;
    }
});

// Launch Simulation Pipeline sequence
launchBtn.addEventListener('click', () => {
    launchBtn.style.display = 'none';
    pipelineList.style.display = 'flex';
    
    simulatePipelineStep('step-upload', 'status-val-upload', 'STREAMING...', 2000, () => {
        simulatePipelineStep('step-whisper', 'status-val-whisper', 'TRANSCRIBING...', 3000, () => {
            // Streaming Whisper Telemetry
            whisperTelemetry.innerHTML = '<span class="status-indicator online"></span>STREAMING (120 wpm)';
            whisperTelemetry.style.color = 'var(--neon-blue)';
            whisperTelemetry.style.textShadow = 'var(--glow-blue)';
            
            simulatePipelineStep('step-gpt', 'status-val-gpt', 'ANALYZING PEAKS...', 3000, () => {
                simulatePipelineStep('step-render', 'status-val-render', 'GENERATING B-ROLL...', 2000, () => {
                    // Pipeline complete, transition onboarding out
                    setTimeout(() => {
                        onboardingScreen.classList.add('hidden');
                        initializeCreatorStudio();
                    }, 800);
                });
            });
        });
    });
});

function simulatePipelineStep(stepId, valId, processingText, duration, callback) {
    const stepEl = document.getElementById(stepId);
    const valEl = document.getElementById(valId);
    
    stepEl.classList.add('active');
    valEl.innerText = processingText;
    valEl.style.color = 'var(--neon-blue)';
    
    let pct = 0;
    const interval = setInterval(() => {
        pct += 10;
        valEl.innerText = `${processingText} (${pct}%)`;
        if (pct >= 100) {
            clearInterval(interval);
            stepEl.classList.remove('active');
            stepEl.classList.add('completed');
            valEl.innerText = 'COMPLETE';
            valEl.style.color = 'var(--neon-purple)';
            callback();
        }
    }, duration / 10);
}

// Initialise dashboard widgets & load Clip #1
function initializeCreatorStudio() {
    activeClip = viralClips[0];
    
    // Draw segmented timeline markers
    renderTimelineSegments();
    
    // Load Clip Details
    loadActiveClipContext();
    
    // Start Audio Waveform looping
    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);
    animateWaveform();
    
    // Enable Sandbox Player controls
    playerPlayBtn.disabled = false;
    actionBtnPreview.disabled = false;
    actionBtnPublish.disabled = false;
}

// Render GPT-4o segment markers inside lower 10-minute timeline bar
function renderTimelineSegments() {
    timelineTrack.innerHTML = '';
    
    // Total master video is 10 minutes (600 seconds)
    const masterDurationSec = 600;
    
    // Distribute viral clips over the timeline bar relatively
    viralClips.forEach((clip, index) => {
        // Calculate relative position and width
        const clipStartPct = (clip.rawSecondsStart / masterDurationSec) * 100;
        const clipDurationSec = parseInt(clip.duration);
        const clipWidthPct = (clipDurationSec / masterDurationSec) * 100 * 3.5; // Scale up visually for readability
        
        const segment = document.createElement('div');
        segment.className = `timeline-segment viral-moment ${activeClip.id === clip.id ? 'active-segment' : ''}`;
        segment.style.width = `${clipWidthPct}%`;
        segment.style.left = `${clipStartPct}%`;
        
        segment.innerHTML = `
            <span class="timeline-tick">${clip.timeRange.split(' ')[0]}</span>
            <span class="timeline-score ${clip.retentionScore >= 92 ? 'extreme-hot' : ''}">${clip.confidence}</span>
        `;
        
        segment.addEventListener('click', () => {
            selectViralClip(clip.id);
        });
        
        timelineTrack.appendChild(segment);
    });
}

// Change current viral clip view
function selectViralClip(clipId) {
    pauseVideo();
    activeClip = viralClips.find(c => c.id === clipId);
    
    // Highlight timeline segment
    const segments = timelineTrack.querySelectorAll('.timeline-segment');
    segments.forEach((seg, index) => {
        if (viralClips[index].id === clipId) {
            seg.classList.add('active-segment');
        } else {
            seg.classList.remove('active-segment');
        }
    });
    
    loadActiveClipContext();
}

// Load transcript, subtitles, hooks, captions, and b-roll suggesting images
function loadActiveClipContext() {
    // Title telemetry
    activeClipTitle.innerHTML = `<i class="fa-solid fa-clapperboard" style="margin-right: 8px; color: var(--neon-blue);"></i>Clip #${activeClip.id}: ${activeClip.title}`;
    activeClipBadge.innerText = `${activeClip.duration} Segment // ${activeClip.confidence} Viral Index`;
    
    // Render Whisper Transcript with word blocks
    renderTranscriptWords();
    
    // Reset player timeline
    playTimeMs = 0;
    updatePlayerTimeDisplays();
    
    // Render suggested Hooks
    renderHooksVariations();
    
    // Caption text update
    captionTextContent.innerText = activeClip.caption;
    
    // Suggest cinematic B-roll cards
    renderBRollSuggestions();
    
    // Predictive scoring dials and graphs
    updatePredictiveScores();
    drawRetentionHeatmap();
}

// Render Whisper Transcript stream word-by-word with timestamp links
function renderTranscriptWords() {
    transcribeFeed.innerHTML = '';
    
    activeClip.transcript.forEach((chunk, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = `transcribe-word word-segment ${chunk.conf < 0.90 ? 'low-conf' : ''}`;
        wordSpan.id = `trans-word-${index}`;
        wordSpan.innerText = chunk.word;
        
        // Clicking a word jumps the player to its starting frame
        wordSpan.addEventListener('click', () => {
            playTimeMs = chunk.start;
            updatePlayerTimeDisplays();
            highlightActiveWord(index);
            
            // Pop inside interactive editor input
            selectedWordIndex = index;
            subtitleEditorInput.disabled = false;
            subtitleEditorInput.value = chunk.word;
            subtitleEditorInput.focus();
            
            // Pause so they can edit
            pauseVideo();
        });
        
        transcribeFeed.appendChild(wordSpan);
    });
}

// Word Correcter Textbox triggers
subtitleEditorInput.addEventListener('input', (e) => {
    if (selectedWordIndex !== null && activeClip) {
        // Update model
        activeClip.transcript[selectedWordIndex].word = e.target.value;
        
        // Update transcript UI block
        const wordEl = document.getElementById(`trans-word-${selectedWordIndex}`);
        if (wordEl) {
            wordEl.innerText = e.target.value;
        }
        
        // Update live subtitles overlay if playing at that mark
        updateSubtitlesOverlay(playTimeMs);
    }
});

// Render Hooks optimized list
function renderHooksVariations() {
    hookContainer.innerHTML = '';
    
    activeClip.hooks.forEach((hook, index) => {
        const hookEl = document.createElement('div');
        hookEl.className = `hook-option-card ${index === 0 ? 'active' : ''}`;
        
        hookEl.innerHTML = `
            <div class="hook-header">
                <span>${hook.type}</span>
                <span class="hook-rating"><i class="fa-solid fa-fire"></i> ${hook.rating} Hook Rate</span>
            </div>
            <div class="hook-body">"${hook.text}"</div>
        `;
        
        hookEl.addEventListener('click', () => {
            const hookCards = hookContainer.querySelectorAll('.hook-option-card');
            hookCards.forEach(c => c.classList.remove('active'));
            hookEl.classList.add('active');
            
            // Prepend hook text to the copyable caption box!
            const newCaption = `🚀 Hook: "${hook.text}"\n\n${activeClip.caption}`;
            captionTextContent.innerText = newCaption;
        });
        
        hookContainer.appendChild(hookEl);
    });
}

// Render Suggested B-Roll layouts
function renderBRollSuggestions() {
    brollShelf.innerHTML = '';
    
    // Render 3 simulated B-rolls
    for (let i = 0; i < 3; i++) {
        const card = document.createElement('div');
        card.className = 'broll-item-card';
        
        // Load one of the beautiful generated assets relative to index
        let imgPath = activeClip.brollImage;
        let matchScore = activeClip.brollMatch;
        let promptText = activeClip.brollPrompt;
        
        if (i === 1) {
            imgPath = "assets/broll_holographic_brain.png";
            matchScore = "95.4% Match";
            promptText = "Glowing high-tech neural network node inside a dark server facility, volumetric lighting.";
        } else if (i === 2) {
            imgPath = "assets/broll_chrome_robot.png";
            matchScore = "96.7% Match";
            promptText = "Sleek chrome humanoid robot interacting with virtual timeline interface screens.";
        }
        
        card.innerHTML = `
            <div class="broll-img-wrap">
                <img src="${imgPath}" alt="AI B-Roll Bins" class="broll-preview-img">
                <div class="broll-match-badge"><i class="fa-solid fa-network-wired"></i> ${matchScore}</div>
                <div class="broll-overlay-prompt">Cue Prompt: "${promptText.substring(0, 52)}..."</div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            // Clicking switches the active player banner to this b-roll suggested image, demonstrating injecting b-roll!
            playerMockAsset.src = imgPath;
            
            // Highlight B-roll selection on standard notification log
            addConsoleLog(`Injected B-Roll overlay scene at frame index [${activeClip.timeRange.split(' ')[0]}]`);
        });
        
        brollShelf.appendChild(card);
    }
}

// Renders the predicted retention/virality score dial gauges
function updatePredictiveScores() {
    // Retention dial
    animateRadialIndicator('radial-retention', 'predicted-retention-val', activeClip.retentionScore, '%');
    // Share Index dial
    animateRadialIndicator('radial-share', 'predicted-share-val', activeClip.shareIndex, 'x');
    // CTR index dial
    animateRadialIndicator('radial-click', 'predicted-click-val', activeClip.ctrIndex, '%');
}

function animateRadialIndicator(svgId, labelId, scoreTarget, suffix) {
    const activeCircle = document.getElementById(svgId);
    const valLabel = document.getElementById(labelId);
    
    // Svg radius is 23. Circumference = 2 * PI * 23 = 144.5
    const maxOffset = 144.5;
    const finalOffset = maxOffset - (scoreTarget / 100) * maxOffset;
    
    activeCircle.style.strokeDashoffset = maxOffset;
    
    let currentScore = 0;
    const duration = 1200; // ms
    const step = scoreTarget / (duration / 30);
    
    const countTimer = setInterval(() => {
        currentScore += step;
        if (currentScore >= scoreTarget) {
            currentScore = scoreTarget;
            clearInterval(countTimer);
        }
        
        let scoreLabel = currentScore.toFixed(0);
        if (suffix === 'x') {
            scoreLabel = (currentScore / 10).toFixed(1);
        }
        valLabel.innerText = `${scoreLabel}${suffix}`;
    }, 30);
    
    setTimeout(() => {
        activeCircle.style.strokeDashoffset = finalOffset;
    }, 50);
}

// Draw engagement graph lines onto predicted metrics canvas
function drawRetentionHeatmap() {
    const ctx = heatmapCanvas.getContext('2d');
    const w = heatmapCanvas.width;
    const h = heatmapCanvas.height;
    
    ctx.clearRect(0, 0, w, h);
    
    // Draw cyber grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
    }
    
    // Create gradient
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
    grad.addColorStop(1, 'rgba(189, 0, 255, 0.02)');
    
    // Retention curve points
    ctx.beginPath();
    ctx.moveTo(0, h * 0.15); // Start high at hook point
    
    // Create custom points mapping hook retention spike
    const points = [
        { x: w * 0.1, y: h * 0.35 },
        { x: w * 0.22, y: h * 0.12 }, // Spikes at the viral moment hook
        { x: w * 0.35, y: h * 0.4 },
        { x: w * 0.5, y: h * 0.38 },
        { x: w * 0.65, y: h * 0.45 },
        { x: w * 0.8, y: h * 0.25 }, // Another minor peak
        { x: w * 0.95, y: h * 0.5 },
        { x: w, y: h * 0.55 }
    ];
    
    points.forEach(p => {
        ctx.lineTo(p.x, p.y);
    });
    
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    
    ctx.fillStyle = grad;
    ctx.fill();
    
    // Stroke line
    ctx.beginPath();
    ctx.moveTo(0, h * 0.15);
    points.forEach(p => {
        ctx.lineTo(p.x, p.y);
    });
    ctx.strokeStyle = 'var(--neon-blue)';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    
    // Highlight active moment slice region
    ctx.fillStyle = 'rgba(255, 0, 124, 0.08)';
    ctx.fillRect(w * 0.15, 0, w * 0.2, h);
    ctx.strokeStyle = 'var(--neon-pink)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(w * 0.15, 0); ctx.lineTo(w * 0.15, h);
    ctx.moveTo(w * 0.35, 0); ctx.lineTo(w * 0.35, h);
    ctx.stroke();
    ctx.setLineDash([]); // clear dash
}

// Media player Sandbox play/pause trigger
playerPlayBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseVideo();
    } else {
        playVideo();
    }
});

function playVideo() {
    isPlaying = true;
    playerPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    playerFrame.classList.add('playing');
    playerSubtitleOverlay.style.display = 'block';
    
    // If we loaded suggested B-roll earlier, keep that, otherwise keep hero poster
    if (playerMockAsset.src.includes('branding_hero')) {
        playerMockAsset.src = activeClip.brollImage;
    }
    
    const clipDurationMs = parseInt(activeClip.duration) * 1000;
    
    playbackInterval = setInterval(() => {
        playTimeMs += 100; // tick 100ms
        
        if (playTimeMs >= clipDurationMs) {
            // Loop clip playback
            playTimeMs = 0;
        }
        
        updatePlayerTimeDisplays();
        updateSubtitlesOverlay(playTimeMs);
    }, 100);
}

function pauseVideo() {
    isPlaying = false;
    playerPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    playerFrame.classList.remove('playing');
    clearInterval(playbackInterval);
}

// Sync progress indicators and display readouts
function updatePlayerTimeDisplays() {
    const elapsedSec = (playTimeMs / 1000).toFixed(1);
    const totalSec = parseInt(activeClip.duration);
    
    playerTimeDisplay.innerText = `00:${elapsedSec.padStart(4, '0')} / 00:${totalSec.toString().padStart(2, '0')}.0`;
    
    const progressPct = (playTimeMs / (totalSec * 1000)) * 100;
    progressBar.style.width = `${progressPct}%`;
}

// Align sub-timing offsets to flash word-level kinetic subtitle markers
function updateSubtitlesOverlay(timeOffsetMs) {
    const transcript = activeClip.transcript;
    let activeIndex = null;
    
    for (let i = 0; i < transcript.length; i++) {
        if (timeOffsetMs >= transcript[i].start && timeOffsetMs < transcript[i].end) {
            activeIndex = i;
            break;
        }
    }
    
    if (activeIndex !== null) {
        highlightActiveWord(activeIndex);
        
        // Update video player subtitle text
        const wordText = transcript[activeIndex].word;
        subtitleTextBox.innerText = wordText;
        
        // Add dynamic kinetic shake/scale styles if applicable
        if (currentStylePreset === 'kinetic') {
            subtitleTextBox.className = 'subtitle-word-wrapper kinetic';
            
            // Sync with Reel preview modal kinetic text also
            reelKineticTextBox.innerText = wordText;
            reelKineticTextBox.className = 'reel-kinetic-subtitle';
        } else if (currentStylePreset === 'neon') {
            subtitleTextBox.className = 'subtitle-word-wrapper neon-style';
            
            reelKineticTextBox.innerText = wordText;
            reelKineticTextBox.className = 'reel-kinetic-subtitle';
            reelKineticTextBox.style.borderColor = 'var(--neon-blue)';
            reelKineticTextBox.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.4)';
        } else {
            subtitleTextBox.className = 'subtitle-word-wrapper';
            
            reelKineticTextBox.innerText = wordText;
            reelKineticTextBox.className = 'reel-kinetic-subtitle';
            reelKineticTextBox.style.borderColor = '#fff';
            reelKineticTextBox.style.boxShadow = 'none';
        }
    }
}

// Highlight the transcription text feed matching active audio time
function highlightActiveWord(index) {
    // Un-highlight previous
    const words = transcribeFeed.querySelectorAll('.transcribe-word');
    words.forEach(w => w.classList.remove('active-word'));
    
    const activeEl = document.getElementById(`trans-word-${index}`);
    if (activeEl) {
        activeEl.classList.add('active-word');
        
        // Scroll into view inside transcription feed
        transcribeFeed.scrollTop = activeEl.offsetTop - transcribeFeed.offsetTop - 50;
    }
}

// Subtitle formatting preset controller
window.changeSubtitleStyle = function(styleKey) {
    currentStylePreset = styleKey;
    
    // highlight buttons
    document.getElementById('preset-style-neon').style.borderColor = styleKey === 'neon' ? 'var(--neon-blue)' : 'rgba(0, 240, 255, 0.3)';
    document.getElementById('preset-style-kinetic').style.borderColor = styleKey === 'kinetic' ? 'var(--neon-pink)' : 'rgba(0, 240, 255, 0.3)';
    document.getElementById('preset-style-clean').style.borderColor = styleKey === 'clean' ? '#fff' : 'rgba(0, 240, 255, 0.3)';
};

// Canvas reactive multisine waveform animations
function resizeCanvases() {
    waveformCanvas.width = waveformCanvas.parentElement.clientWidth;
    waveformCanvas.height = 60;
    
    heatmapCanvas.width = heatmapCanvas.parentElement.clientWidth;
    heatmapCanvas.height = 70;
}

function animateWaveform() {
    canvasAnimId = requestAnimationFrame(animateWaveform);
    
    const w = waveformCanvas.width;
    const h = waveformCanvas.height;
    
    waveCtx.clearRect(0, 0, w, h);
    
    // Background matrix mesh lines
    waveCtx.strokeStyle = 'rgba(0, 240, 255, 0.025)';
    waveCtx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
        waveCtx.beginPath();
        waveCtx.moveTo(x, 0);
        waveCtx.lineTo(x, h);
        waveCtx.stroke();
    }
    
    // Draw 3 layers of morphing sine waves
    drawSineWave(w, h, 0.015, 'var(--neon-blue)', 1.5, 0.5);
    drawSineWave(w, h, 0.025, 'var(--neon-purple)', 1.0, 0.7);
    drawSineWave(w, h, 0.035, 'var(--neon-pink)', 0.6, 0.3);
    
    wavePhase += isPlaying ? 0.15 : 0.02; // Animate faster if playing!
}

function drawSineWave(w, h, freq, color, thickness, opacity) {
    waveCtx.beginPath();
    waveCtx.strokeStyle = color;
    waveCtx.lineWidth = thickness;
    waveCtx.globalAlpha = opacity;
    
    const midY = h / 2;
    // Amplify amplitude depending on playback state
    const amplitude = isPlaying ? (15 + Math.sin(wavePhase * 2) * 5) : 3;
    
    waveCtx.moveTo(0, midY);
    for (let x = 0; x < w; x++) {
        const y = midY + Math.sin(x * freq + wavePhase) * amplitude * Math.sin(x / w * Math.PI);
        waveCtx.lineTo(x, y);
    }
    
    waveCtx.stroke();
    waveCtx.globalAlpha = 1.0;
}

// 9:16 vertical Reels device mock-up drawer activations
window.openReelPreviewMock = function() {
    // Sync the B-roll background preview asset matching active clip B-roll suggestion!
    reelPreviewVideoAsset.src = activeClip.brollImage;
    
    // Load captions inside mock details
    document.getElementById('reel-caption-ticker').innerText = activeClip.caption.substring(0, 120) + "...";
    
    // Trigger overlay visibility
    reelPreviewBackdrop.classList.add('active');
    
    // Force active player logic to trigger in sync
    playVideo();
};

window.closeReelPreviewMock = function() {
    reelPreviewBackdrop.classList.remove('active');
    pauseVideo();
};

// Social scheduled publishing overlay simulation
window.openPublishOverlay = function() {
    publishingOverlay.classList.add('active');
    
    // Reset publish dialogues
    document.getElementById('publish-flow-title').innerText = "Establishing Quantum Data Uplink";
    document.getElementById('publish-flow-description').innerText = "Synthesizing metadata packets, rendering dynamic subtitles, and preparing distributed social API channels.";
    document.getElementById('data-uplink-loader').style.display = 'block';
    document.getElementById('publish-success-controls').style.display = 'none';
    
    // Start fast bytes count streaming simulation
    const bytesEl = document.getElementById('data-stream-bytes');
    let totalBytes = 0;
    
    const bytesInterval = setInterval(() => {
        totalBytes += Math.floor(Math.random() * 95000) + 12000;
        bytesEl.innerText = `Uplink stream: ${totalBytes.toLocaleString()} bytes routed // secure_channel.dat`;
    }, 100);
    
    setTimeout(() => {
        clearInterval(bytesInterval);
        bytesEl.innerText = "Uplink Secure Connection Established. Asset Broadcast Broadcasted.";
        
        // Show success state
        document.getElementById('publish-flow-title').innerText = "AntiGravity Broadcaster Core";
        document.getElementById('publish-flow-description').innerText = "Asset routed successfully to distributed networks.";
        document.getElementById('data-uplink-loader').style.display = 'none';
        document.getElementById('publish-success-controls').style.display = 'block';
        
        addConsoleLog(`Broadcast complete. Dispersed clip #${activeClip.id} to Reels/Shorts gateways.`);
    }, 3800);
};

window.closePublishOverlay = function() {
    publishingOverlay.classList.remove('active');
};

// Copy caption trigger
window.copyCaptionText = function() {
    const textToCopy = captionTextContent.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.querySelector('.copy-btn-floating');
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyBtn.style.background = 'var(--neon-purple)';
        copyBtn.style.color = '#fff';
        
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
            copyBtn.style.background = 'var(--glass-bg)';
            copyBtn.style.color = 'var(--neon-blue)';
        }, 2000);
    });
};

// System console debugging logger
function addConsoleLog(logMessage) {
    console.log(`[AntiGravity Engine]: ${logMessage}`);
}
