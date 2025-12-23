import { MessageCircle, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Chame no WhatsApp",
    description: "Clique no botão e fale com a equipe.",
  },
  {
    icon: Send,
    title: "Envie a peça/modelo",
    description: "Informe a moto (marca/modelo/ano) e o que precisa.",
  },
  {
    icon: CheckCircle,
    title: "Receba orçamento",
    description: "A gente confirma valor e opções na hora.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-4">
            Como comprar pelo <span className="text-primary">WhatsApp</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simples, rápido e sem complicação. Em poucos minutos você tem seu orçamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              <div className="relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Step number */}
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-sm text-muted-foreground">
            <span className="text-primary">💡</span>
            Dica: envie foto da peça ou do documento da moto para agilizar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
