import { useEffect, useRef } from "react";

export const useDidUpdate = (fn, dependencies) => {
	const mountes = useRef(false);

	useEffect(() => {
		if (mountes.current) {
			fn();
		} else {
			mountes.current = true;
		}
	}, [dependencies])
}