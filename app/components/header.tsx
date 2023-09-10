import { useScrollDirection } from "@/lib/useScrollDirection";

export default function Header({ props }: {
  props: any;
}) {
  const { scrollDirection } = useScrollDirection();
  return (
    <header className={`${scrollDirection}`}>
      <ul>
        {Array.from(props).map((item: any, idx) => (
          <li key={idx} onClick={item.onMoveToElement}>{item.name}</li>
        ))}
      </ul>
    </header>
  )
}