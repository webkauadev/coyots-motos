import logo from "@/assets/logo-coyots-white.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6">
          <img 
            src={logo} 
            alt="Coyot's Motos" 
            className="h-8 w-auto opacity-90"
          />
          
          <div className="space-y-4 text-muted-foreground text-sm">
            <p className="font-semibold text-foreground">Coyot's Motos — Autopeças e acessórios para motos</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-primary font-medium">Atacado</p>
                <p>Av. JÔ Sato, Nº 721 - Jardim Eldorado</p>
                <p>Vilhena - RO, 76980-611</p>
              </div>
              <div>
                <p className="text-primary font-medium">Centro</p>
                <p>Av. Mal. Rondon, 4068 - Centro</p>
                <p>Vilhena - RO, 76980-000</p>
              </div>
            </div>
            
            <p>📲 (69) 8449-8446 — Atendimento via WhatsApp</p>
          </div>

          <p className="text-xs text-muted-foreground max-w-md">
            Este site tem objetivo informativo e de contato. 
            Você pode encerrar a conversa quando quiser.
          </p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coyot's Motos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
