<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	<span>
		<img src={`data:image/png;base64,${$page.data.base64}`} alt="ey" />
	</span>
	<span>
		{$page.data.quote}
	</span>
</div>
