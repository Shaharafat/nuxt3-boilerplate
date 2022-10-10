<script setup lang="ts">
import { PageContent } from '~/types';
const config = useFetchConfig();
const route = useRoute();

const { data, pending, error, refresh } = useAsyncData<PageContent | null>(
	'pageData',
	() =>
		$fetch(`/api/v2/pages/find?format=json&html_path=${route.fullPath}`, config)
);

const pageData = data;
const pageType = data.value?.meta?.type.split('.')[1];

function getComp(compName) {
	switch (compName) {
		case 'hero_slider':
			return resolveComponent('LazyBlocksHeroSlider');
		case 'image_and_list_text':
			return resolveComponent('LazyBlocksHeroSlider');
	}
}
onMounted(() => {});
</script>

<template>
	<div v-if="!pending">
		<component
			:is="getComp(data.type)"
			v-for="(data, idx) in pageData?.body"
			:key="idx"
		/>

		<!-- <component
			:is="pageType"
			v-if="pageType"
			:key="route.fullPath"
			:page-data="pageData.body"
		/> -->
	</div>
</template>
<style scoped lang="scss">
h1 {
	color: red;
	background: $bg-color;
}
</style>
