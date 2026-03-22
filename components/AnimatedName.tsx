import { Link } from "next-view-transitions";

export default function AnimatedName() {
  return (
    <Link
      href="/"
      className="not-prose fade-in mb-6 flex font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      Enock Omondi
    </Link>
  );
}
