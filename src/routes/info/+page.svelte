<script>
	import { PORTFOLIO_NAME } from '$lib/constants';
	import '@mux/mux-video';

	export let data;
	const {
		ownerName,
		ownerBio: { html: bio },
		ownerPicture: { url: coverImageUrl, alt: coverImageAlt }
	} = data.info.about;
</script>

<svelte:head>
	<title>About | {PORTFOLIO_NAME}</title>
</svelte:head>

<section
	class="mx-auto flex flex-col-reverse gap-y-5 pb-20 md:h-full md:flex-row md:gap-y-0 md:pb-0"
>
	<div class="w-full px-2.5 md:w-1/2 md:overflow-y-scroll md:p-10">
		<div class="prose md:prose-lg">
			{@html bio}
		</div>
		<h1 class="mt-5 font-serif text-2xl font-bold md:text-4xl">— {ownerName}</h1>

		<!-- <mux-video
			src="https://player.vimeo.com/video/838845033?h=4f99954369"
			type="application/vnd.apple.mpegurl"
			metadata-video-title="Big Buck Bunny"
			metadata-viewer-user-id="user-id-1234"
			prefer-playback="mse"
			controls
		/> -->

		<div class="relative mt-20" style="padding:56.25% 0 0 0">
			<iframe
				title="Juan Serrano Studio video reel."
				src="https://player.vimeo.com/video/838845033?h=4f99954369&color=ffffff"
				style="position:absolute;top:0;left:0;width:100%;height:100%;"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
			/>
		</div>
		<script src="https://player.vimeo.com/api/player.js"></script>
	</div>
	<div class="flex w-full overflow-hidden md:h-full md:max-h-screen md:w-1/2 md:flex-col">
		<img src={coverImageUrl} alt={coverImageAlt} class="object-cover" />
	</div>
</section>
