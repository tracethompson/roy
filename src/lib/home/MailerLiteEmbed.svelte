<script>
	export let value;
	export let form;
</script>

<svelte:head>
	<script
		src="https://static.mailerlite.com/js/w/webforms.min.js?v0c75f831c56857441820dcec3163967c"
		type="text/javascript"></script>
</svelte:head>

<div id="mlb2-4383439" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-4383439">
	<div class="ml-form-align-center">
		<div class="ml-form-embedWrapper embedForm">
			<div class="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
				<div class="ml-form-embedContent" style="">
					<h4>Newsletter</h4>
					<p>Signup for news and special offers!</p>
				</div>
				<form
					class="ml-block-form"
					action="https://static.mailerlite.com/webforms/submit/q6e2j7"
					data-code="q6e2j7"
					method="post"
					target="_blank"
				>
					<div class="ml-form-formContent horozintalForm">
						<div class="ml-form-horizontalRow">
							<div class="ml-input-horizontal">
								<div style="width:100%" class="horizontal-fields">
									<div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
										<input
											type="email"
											class="form-control"
											data-inputmask=""
											name="fields[email]"
											placeholder="Email"
											autocomplete="email"
											bind:value
										/>
									</div>
								</div>
							</div>
							<div class="ml-button-horizontal primary">
								<button type="submit" class="primary" bind:this={form}>Subscribe</button>
								<button disabled="disabled" style="display:none" type="button" class="loading">
									<div class="ml-form-embedSubmitLoad" />
									<span class="sr-only">Loading...</span>
								</button>
							</div>
						</div>
					</div>
					<input type="hidden" name="ml-submit" value="1" />
					<div class="ml-mobileButton-horizontal">
						<button type="submit" class="primary">Subscribe</button>
						<button disabled="disabled" style="display:none" type="button" class="loading">
							<div class="ml-form-embedSubmitLoad" />
							<span class="sr-only">Loading...</span>
						</button>
					</div>
					<input type="hidden" name="anticsrf" value="true" />
				</form>
			</div>
			<div class="ml-form-successBody row-success" style="display:none">
				<div class="ml-form-successContent">
					<h4>Thank you!</h4>
					<p>You have successfully joined our subscriber list.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#mlb2-4383439 {
		display: none;
	}
</style>
