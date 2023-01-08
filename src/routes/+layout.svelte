<script>
	import '../app.css';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faChessRook } from '@fortawesome/free-solid-svg-icons';
</script>

<div id="banner" class="fixed w-screen h-12 flex justify-between items-center px-2">
	<span id="banner-title" class="text-2xl font-medium">Warhammer Fantasy RPG Companion</span>
	<Fa class="text-2xl cursor-pointer" icon={faChessRook} />
</div>
<div class="pt-16 px-5">
	<slot />
</div>

<style lang="scss">
	#banner {
		background-color: antiquewhite;
	}
</style>
