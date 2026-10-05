export const Footer = () => {
  return (
    <footer className="not-prose mx-auto max-w-3xl px-6 pb-10 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-x-6 gap-y-2 border-t border-stone-300 pt-4 text-sm text-stone-600 sm:flex-row sm:items-center">
        <a href="/" className="font-medium text-stone-700 hover:text-amber-700">
          Gabor Juhasz
        </a>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-4 gap-y-2">
          <a href="mailto:me@juhg.hu" className="hover:text-amber-700">Email</a>
          <a href="https://github.com/JuhG" className="hover:text-amber-700">GitHub</a>
          <a href="https://twitter.com/juhgabor" className="hover:text-amber-700">Twitter</a>
          <a href="https://linkedin.com/in/gabor-juhasz-" className="hover:text-amber-700">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
};
