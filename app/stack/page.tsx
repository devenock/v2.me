import Stack from "@/components/Stack";

export default function Page() {
  return (
    <div className="py-12">
      <h1 className="mb-8 text-4xl font-bold text-foreground">Technologies</h1>
      <p className="text-muted-foreground">
        A collection of my technologies that I work with.
      </p>
      <Stack />
    </div>
  );
}
