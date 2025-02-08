import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Background = (props) => {
	const ref = useRef();
	const sphere = random.inSphere(new Float32Array(8000), { radius: 1.2 });

	const [dotColor, setDotColor] = useState("#ffffff");

	// Function to check dark mode
	const checkDarkMode = () => {
		if (document.documentElement.classList.contains("dark")) {
			setDotColor("#ffffff"); // Light dots in dark mode
		} else {
			setDotColor("#000000"); // Dark dots in light mode
		}
	};

	useEffect(() => {
		// Initial theme check
		checkDarkMode();

		// Watch for theme changes
		const observer = new MutationObserver(() => checkDarkMode());
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		// Cleanup observer
		return () => observer.disconnect();
	}, []);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 20;
		ref.current.rotation.y -= delta / 40;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color={dotColor} // Dynamic color change
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const BackgroundCanvas = () => {
	return (
		<div className="fixed w-full h-full inset-0 bg-background/100 -z-10">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Background />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default BackgroundCanvas;
