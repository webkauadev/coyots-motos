import logo from "@/assets/logo-coyots.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <img 
          src={logo} 
          alt="Coyot's Motos - Autopeças e acessórios para motos" 
          className="h-8 md:h-10 w-auto"
        />
        <span className="text-muted-foreground text-sm hidden md:block">
          📍 Vilhena - RO
        </span>
      </div>
    </header>
  );
};

export default Header;
