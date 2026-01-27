export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}. devenock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
