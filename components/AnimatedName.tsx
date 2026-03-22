import { Link } from "next-view-transitions";

export default function AnimatedName() {
  return (
    <Link href="/" className="not-prose mb-6 flex font-medium text-gray-400 fade-in">
      Enock Omondi
    </Link>
  );
}
