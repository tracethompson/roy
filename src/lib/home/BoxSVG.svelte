<script>
	export let color;
</script>

<svg width="168" height="166">
	<g stroke={color === 'pink' ? '#C05799' : '#49864C'}>
		<path
			fill={color === 'pink' ? '#BF82A7' : '#5DB033'}
			d="M.433.75h90.035v69.02H.433z"
			transform="matrix(.86603 .5 0 1 .558 49.45)"
		/>
		<path
			fill={color === 'pink' ? '#CD97B8' : '#6AC040'}
			d="M.433.25h100.788v69.234H.433z"
			transform="matrix(.86603 -.5 0 1 79.396 95.185)"
		/>
		<path
			fill={color === 'pink' ? '#CD97B8' : '#6AC040'}
			d="M.866 0h100.788v88.317H.866z"
			transform="matrix(.86603 -.5 .86603 .5 2.104 51.328)"
		/>
	</g>
</svg>
