import { useRef } from 'react';

function useMoveScroll(name:string) {
  let element = useRef<HTMLDivElement>(null);

  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return { name, element, onMoveToElement};
}

export default useMoveScroll;