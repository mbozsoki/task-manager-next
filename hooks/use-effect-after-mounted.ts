import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useEffectAfterMounted = (
  effect: EffectCallback,
  deps: DependencyList | undefined
) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      effect();
    } else {
      isMounted.current = true;
    }
  }, deps);
};
