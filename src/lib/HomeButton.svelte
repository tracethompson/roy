<script>
</script>

<a href="/">
	<div>
		<slot />
	</div>
</a>

<style lang="scss">
	a {
		position: fixed;
		right: 10px;
		top: 10px;
		width: 102px;
		height: 102px;
		background: #df9abf;
		text-align: center;
		line-height: 102px;
		font-family: Helvetica Neue;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		color: white;
		text-decoration: none;
	}
	@media (max-width: 768px) {
		a {
			width: 52px;
			height: 52px;
			line-height: 52px;

			font-size: 14px;
		}
	}
</style>
