export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center space-y-4">
          <div className="font-display text-lg font-medium text-foreground">
            The Chaiken Foundation
          </div>
          <p className="text-sm text-muted-foreground">
            Building a more just, democratic, and pluralistic society
          </p>
          <div className="text-xs text-muted-foreground space-y-2">
            <p>© {currentYear} The Chaiken Foundation. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              <span>Accessibility Statement</span>
              <span>•</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};