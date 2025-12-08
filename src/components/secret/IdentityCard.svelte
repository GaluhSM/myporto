<script lang="ts">
  let isHovered = false;
  let moodIndex = 0;
  
  const moods = [
    "☕ Caffeinated", 
    "🐛 Debugging Mode", 
    "🔥 Shipping Code", 
    "🛌 Need Sleep", 
    "🎮 Gaming"
  ];

  function randomizeMood() {
    moodIndex = Math.floor(Math.random() * moods.length);
  }

  $: currentMood = moods[moodIndex];

  let cardElement: HTMLDivElement;
  let rotateX = 0;
  let rotateY = 0;

  function handleMouseMove(e: MouseEvent) {
    if (!cardElement) return;
    
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    rotateY = ((x - centerX) / 10); 
    rotateX = ((centerY - y) / 10);
  }

  function handleMouseLeave() {
    rotateX = 0;
    rotateY = 0;
    isHovered = false;
  }
</script>

<div 
  class="relative w-full max-w-md perspective-1000 group cursor-none"
  role="presentation"
  on:mouseenter={() => isHovered = true}
  on:mouseleave={handleMouseLeave}
>
  
  <div 
    bind:this={cardElement}
    on:mousemove={handleMouseMove}
    role="group" 
    aria-label="Interactive 3D Identity Card"
    class="relative w-full aspect-[4/5] md:aspect-video rounded-2xl bg-slate-900/80 border border-slate-700 backdrop-blur-xl shadow-2xl overflow-hidden transition-transform duration-100 ease-linear"
    style="transform: rotateX({rotateX}deg) rotateY({rotateY}deg);"
  >
    
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"></div>
    
    <div class="relative z-10 h-full p-8 flex flex-col justify-between pointer-events-none">
      
      <div class="flex items-start justify-between pointer-events-auto">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 p-1">
             <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" alt="Avatar" class="w-full h-full rounded-full bg-black" />
          </div>
          <div>
             <h2 class="text-xl font-bold text-white tracking-wide">CODENAME: HUMEI</h2>
             <p class="text-xs text-indigo-300 font-mono">Level 99 Rogue</p>
          </div>
        </div>
        
        <button 
          on:click={randomizeMood}
          class="px-3 py-1 rounded-full border border-pink-500/50 bg-pink-500/10 text-pink-300 text-xs font-mono hover:bg-pink-500 hover:text-white transition-colors cursor-pointer select-none"
        >
          {currentMood} ↻
        </button>
      </div>

      <div class="space-y-4 pointer-events-auto">
        <p class="text-slate-300 text-sm leading-relaxed">
          "Saya ngoding karena gabut sebenernya, eh... keterusan."
        </p>
        
        <div class="space-y-1">
          <div class="flex justify-between text-xs text-slate-400 font-mono">
            <span>CAFFEINE LEVEL</span>
            <span>98%</span>
          </div>
          <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
             <div class="h-full bg-gradient-to-r from-orange-500 to-yellow-500 w-[98%]"></div>
          </div>
        </div>

        <div class="space-y-1">
           <div class="flex justify-between text-xs text-slate-400 font-mono">
             <span>SANITY</span>
             <span>2%</span>
           </div>
           <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-red-500 to-red-700 w-[2%] animate-pulse"></div>
           </div>
         </div>
      </div>

      <div class="pt-6 border-t border-slate-700/50 flex justify-between items-center pointer-events-auto">
        <div class="flex gap-3">
           <span class="w-3 h-3 rounded-full bg-red-500"></span>
           <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
           <span class="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div class="text-xs text-slate-500 font-mono">ID: 0505-08</div>
      </div>

    </div>
  </div>
</div>

<style>
  .perspective-1000 {
    perspective: 1000px;
  }
</style>