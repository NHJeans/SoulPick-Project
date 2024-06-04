import {useCallback} from "react";

function useModalScrollRock() {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  },[]);

  const openScroll = useCallback(() => {
    document.body.style.overflow = 'auto';
  },[]);

  return {lockScroll,openScroll}
}
export default useModalScrollRock;