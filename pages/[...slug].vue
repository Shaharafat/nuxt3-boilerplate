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
const hero_slider = resolveComponent('BlocksHeroSlider');
const image_and_list_text = resolveComponent('BlocksHeroSlider');
const image_and_list_image_text = resolveComponent('BlocksHeroSlider');
const businesses = resolveComponent('BlocksHeroSlider');
const world_map = resolveComponent('BlocksHeroSlider');
const animated_logo_carousel = resolveComponent('BlocksHeroSlider');
onMounted(() => {});
</script>

<template>
	<div v-if="!pending">
		<component
			:is="data.type"
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
