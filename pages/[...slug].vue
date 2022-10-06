<script setup lang="ts">
import { useUserStore } from '~/stores/counter';
const store = useUserStore();
</script>
<template>
	<section>
		<!-- Template Body -->
		<h1>Welcome {{ store.getName }}</h1>
	</section>
</template>
<style scoped lang="scss">
h1 {
	color: red;
	background: $bg-color;
}
</style>
