<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">
				<h4>Display</h4>
				<p>Efficiently configure the display of the component with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> display utilities.</p>

				<h5>Inline</h5>
                <InputText class="mr-2 inline" />
                <InputText class="inline" />

                <h5>Block</h5>
                <InputText class="mb-2 block" />
                <InputText class="block" />

                <h5>Visible on a Small Screen</h5>
                <p>Resize to view.</p>
                <Button type="button" icon="pi pi-bars" class="p-button-rounded md:hidden" />

                <h5>Hidden on a Small Screen</h5>
                <p>Resize to hide.</p>
                <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success hidden md:inline-flex" />
			</div>
		</div>
	</div>
</template>

<script>
</script>
