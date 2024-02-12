import spriteHref from "./assets/icons.svg";
export function Icon({ name, ...props }) {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
}
