import { useState, useRef, useEffect } from "react";
import { Markmap, deriveOptions } from "markmap-view";
import { transformer } from "./markmap";
import { Note } from "@/types/note";

type MarkmapProps = {
	note: Note;
};

export default function MarkmapHooks({ note }: MarkmapProps) {
	const [value, setValue] = useState<string | null>(null);
	const refSvg = useRef<SVGSVGElement>(null);
	const refMm = useRef<Markmap>(null);

	const markmapOptions = deriveOptions({
		color: ["#6b7280", "#6666ff", "#b3b3ff"],
		lineWidth: 2,
		spacingVertical: 20,
		spacingHorizontal: 300,
		nodeMinHeight: 300,
		initialExpandLevel: 1,
		fitRatio: 100,
	});

	useEffect(() => {
		if (note && note.mindmap) {
			setValue(note.mindmap);
		}
	}, [note]);

	useEffect(() => {
		if (refMm.current) return;
		if (!value) return;
		const mm = Markmap.create(refSvg.current, markmapOptions);
		refMm.current = mm;
	}, [markmapOptions]);

	useEffect(() => {
		const mm = refMm.current;
		if (!mm) return;
		if (!value) return;
		const { root } = transformer.transform(value);
		mm.setData(root).then(() => mm.fit());
	}, [value]);

	if (!value) return <div>Loading mind map...</div>;

	return (
		<div className="flex h-[80vh]">
			<div className="flex-1 relative">
				<svg
					ref={refSvg}
					className="w-full min-h-full"
				/>
			</div>
		</div>
	);
}

