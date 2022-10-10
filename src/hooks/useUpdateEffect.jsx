import { useEffect } from 'react';
import useIsFirstRender from './useIsFirstRender';

function useUpdateEffect(effectCallback, dependencyList) {
    const isFirst = useIsFirstRender();

    useEffect(() => {
        if (!isFirst) {
            return effectCallback();
        }
        return () => ({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencyList);
}

export default useUpdateEffect;
