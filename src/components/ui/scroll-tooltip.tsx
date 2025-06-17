import { useFloating, offset, shift, flip, autoUpdate } from "@floating-ui/react-dom";
import { useEffect, useState } from "react";

type Props = {
	referenceEl: HTMLElement;
	onClose: () => void;
	text?: string;
};

export default function ScrollTooltip({ referenceEl, onClose, text = "Jumped here" }: Props) {
	const [tooltipEl, setTooltipEl] = useState<HTMLDivElement | null>(null);
	const { refs, floatingStyles } = useFloating({
		placement: "left",
		middleware: [offset(50), flip(), shift()],
		whileElementsMounted: autoUpdate,
	});

	useEffect(() => {
		refs.setReference(referenceEl);
		refs.setFloating(tooltipEl || null);

		const timeout = setTimeout(() => {
			onClose();
		}, 5000);

		return () => clearTimeout(timeout);
	}, [referenceEl, tooltipEl]);

	return (
		<div
			ref={setTooltipEl}
			style={floatingStyles}
			className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-50"
		>
			{text}
		</div>
	);
}
