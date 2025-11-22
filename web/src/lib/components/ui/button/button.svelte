<script>
	import { Button as ButtonPrimitive } from "bits-ui";
	import { buttonVariants } from "./index.js";
	import { cn } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		size = "default",
		href = undefined,
		type = "button",
		children,
		...restProps
	} = $props();
</script>

<ButtonPrimitive.Root
	bind:ref
	class={cn(buttonVariants({ variant, size, className }))}
	{href}
	{type}
	{...restProps}
>
	{@render children?.()}
</ButtonPrimitive.Root>
