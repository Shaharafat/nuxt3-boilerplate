<script setup lang="ts">
import HeroSlider from 'blocks/HeroSlider.vue';
import gsap from 'gsap';
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

const components = {
	hero_slider: HeroSlider,
};
onMounted(() => {
	const head = document.querySelector('h1');
	const tl = gsap.timeline();
	tl.to(head, {
		y: 100,
	});
});
</script>

<template>
	<div v-if="!pending">
		<h1>roboto</h1>
		<component
			:is="components[data.type]"
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
	font-family: roboto;
	color: red;
	background: $bg-color;
}
</style>
