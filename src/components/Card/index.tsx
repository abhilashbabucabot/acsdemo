import { StyledCard } from "./card.styled";
interface CardProps {
  children: JSX.Element | string;
}
export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}
