<script lang="ts">
  export let title: string;
  export let icon: string = "🚀";
  
  let isFlipped = false;
  
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      isFlipped = !isFlipped;
    }
  }
</script>

<button 
  type="button"
  class="group h-48 w-full cursor-pointer perspective-1000 bg-transparent border-none p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
  on:click={() => isFlipped = !isFlipped}
  on:keydown={handleKeydown}
>
  <div 
    class="relative h-full w-full transition-all duration-500 transform-style-3d"
    class:rotate-y-180={isFlipped}
  >
    <div class="absolute inset-0 h-full w-full rounded-xl bg-slate-800/50 border border-slate-700 p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm backface-hidden shadow-lg group-hover:border-indigo-500/50 transition-colors">
      <div class="text-4xl mb-3">{icon}</div>
      <h3 class="text-lg font-bold text-slate-200">{title}</h3>
      <p class="text-xs text-slate-500 mt-2 font-mono">[Click to Reveal]</p>
    </div>

    <div class="absolute inset-0 h-full w-full rounded-xl bg-indigo-900/80 border border-indigo-500 p-6 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180 shadow-indigo-500/20 shadow-lg">
      <div class="text-slate-200 text-sm font-medium">
        <slot />
      </div>
    </div>
  </div>
</button>

<style>
  .perspective-1000 { perspective: 1000px; }
  .transform-style-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  .rotate-y-180 { transform: rotateY(180deg); }
</style>