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
          
          <div className="space-y-2 text-muted-foreground text-sm">
            <p className="font-semibold text-foreground">Coyot's Motos — Autopeças e acessórios para motos</p>
            <p>📍 Vilhena - RO</p>
            <p>📲 Atendimento via WhatsApp</p>
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
