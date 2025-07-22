export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="font-display text-lg font-medium text-foreground text-center">
            The Chaiken Foundation
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Building a more just, democratic, and pluralistic society
          </p>
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} The Chaiken Foundation. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
            <span>Accessibility Statement</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};