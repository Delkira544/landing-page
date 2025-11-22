<script>
	import { Accordion as AccordionPrimitive } from "bits-ui";

	let { ref = $bindable(null), children, ...restProps } = $props();
</script>

<AccordionPrimitive.Root bind:ref {...restProps}>
	{@render children?.()}
</AccordionPrimitive.Root>
