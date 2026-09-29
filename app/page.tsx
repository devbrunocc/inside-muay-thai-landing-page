import {
  ArrowUpRight,
  Baby,
  ChevronRight,
  Dumbbell,
  Flame,
  Camera,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  UserRound,
  Users,
} from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const defaultMessage =
  "Olá! Vi o site da Inside Muay Thai e gostaria de agendar uma aula experimental grátis.";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function WhatsAppButton({
  label = "Agendar aula grátis",
  message = defaultMessage,
  variant = "primary",
}: {
  label?: string;
  message?: string;
  variant?: "primary" | "dark" | "outline";
}) {
  return (
    <a
      className={`cta-button cta-${variant}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} pelo WhatsApp`}
    >
      <MessageCircle aria-hidden="true" size={20} strokeWidth={2.2} />
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}

const serviceIcons = [Dumbbell, Baby, UserRound, Flame];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inside Muay Thai — início">
          <img src="/academia/5.jpg" alt="Inside Muay Thai" />
          <span>
            <strong>BRUNO MARQUES</strong>
            <small>CENTRO DE TREINAMENTO</small>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#academia">A academia</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#espaco">O espaço</a>
          <a href="#contato">Contato</a>
        </nav>

        <WhatsAppButton label="Aula experimental" />
      </header>

      <section className="hero" id="inicio">
        <img
          className="hero-photo"
          src="/academia/3.jpg"
          alt="Fachada do Centro de Treinamento Inside Muay Thai Bruno Marques"
          fetchPriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content page-shell">
          <div className="hero-copy">
            <SectionLabel>Piracicaba · Água Branca</SectionLabel>
            <div className="hero-stars" aria-label="Três estrelas da identidade Inside">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <h1>
              Muay Thai
              <span>de verdade.</span>
              <em>Para a vida real.</em>
            </h1>
            <p className="hero-lead">
              Para começar, evoluir, ganhar confiança e descobrir do que você é capaz —
              em um centro de treinamento feito para adultos e crianças.
            </p>
            <div className="hero-actions">
              <WhatsAppButton />
              <a className="text-link" href="#modalidades">
                Conheça os treinos <ChevronRight aria-hidden="true" size={18} />
              </a>
            </div>
            <div className="hero-proof">
              <div className="rating-mark">
                <strong>{siteConfig.rating}</strong>
                <span>
                  <span className="rating-stars" aria-label="5 estrelas">★★★★★</span>
                  <small>{siteConfig.reviewCount} avaliações no Google</small>
                </span>
              </div>
              <div className="proof-divider" />
              <p>Aula experimental grátis</p>
            </div>
          </div>
        </div>

        <a className="hero-location" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" size={19} />
          <span>
            <small>ONDE TREINAR</small>
            Água Branca, Piracicaba
          </span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>

      <section className="manifesto" id="academia">
        <div className="page-shell manifesto-grid">
          <div>
            <SectionLabel>Inside é estar por inteiro</SectionLabel>
            <h2>Treino sério.<br />Ambiente leve.<br /><span>Gente de verdade.</span></h2>
          </div>
          <div className="manifesto-copy">
            <p className="manifesto-lead">
              Aqui, a técnica do Muay Thai encontra um ambiente que recebe bem quem está
              começando e desafia quem quer avançar.
            </p>
            <p>
              A identidade da Inside aparece nas avaliações: professor presente, alunos
              parceiros e uma energia que faz você querer voltar. O treino é intenso. A
              experiência é humana.
            </p>
            <div className="values-row">
              <div><ShieldCheck aria-hidden="true" /><strong>Respeito</strong><span>em cada treino</span></div>
              <div><Users aria-hidden="true" /><strong>Comunidade</strong><span>que acolhe</span></div>
              <div><Flame aria-hidden="true" /><strong>Evolução</strong><span>no seu ritmo</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="modalities" id="modalidades">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <SectionLabel>Escolha o seu caminho</SectionLabel>
              <h2>Um treino para cada fase.<br /><span>A mesma energia Inside.</span></h2>
            </div>
            <p>
              Você não precisa “estar em forma” para começar. Precisa apenas dar o primeiro passo.
            </p>
          </div>

          <div className="service-grid">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-card" key={service.title}>
                  <div className="service-topline">
                    <span>0{index + 1}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <a href={whatsappUrl(service.message)} target="_blank" rel="noreferrer">
                    Quero saber mais <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="experience-banner" aria-label="Chamada para aula experimental">
        <div className="experience-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="experience-group" key={copy}>
              <span>AULA EXPERIMENTAL GRÁTIS</span><Star fill="currentColor" />
              <span>SEM PRESSÃO</span><Star fill="currentColor" />
              <span>NO SEU RITMO</span><Star fill="currentColor" />
              <span>COMECE AGORA</span><Star fill="currentColor" />
            </div>
          ))}
        </div>
      </section>

      <section className="space-section" id="espaco">
        <div className="page-shell">
          <div className="section-heading light-heading">
            <div>
              <SectionLabel>Conheça o espaço</SectionLabel>
              <h2>Estrutura para treinar.<br /><span>Espaço para pertencer.</span></h2>
            </div>
            <p>
              Tatame amplo, sacos de pancada e uma estrutura direta ao ponto: tudo pensado para o treino acontecer.
            </p>
          </div>

          <div className="photo-grid">
            {siteConfig.photos.map((photo, index) => (
              <figure className={`photo-card photo-${index + 1}`} key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading={index ? "lazy" : "eager"} />
                <figcaption><span>0{index + 1}</span>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section" id="avaliacoes">
        <div className="page-shell reviews-grid">
          <div className="reviews-intro">
            <SectionLabel>Quem treina, recomenda</SectionLabel>
            <h2>5,0 no Google.<br /><span>O resto é sentir de perto.</span></h2>
            <div className="big-rating">
              <strong>{siteConfig.rating}</strong>
              <div><span>★★★★★</span><small>Baseado em {siteConfig.reviewCount} avaliações</small></div>
            </div>
          </div>
          <div className="review-list">
            {siteConfig.testimonials.map((testimonial, index) => (
              <blockquote key={testimonial}>
                <span className="quote-mark">“</span>
                <p>{testimonial}</p>
                <footer><span>AVALIAÇÃO 0{index + 1}</span><span aria-label="5 estrelas">★★★★★</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="first-class">
        <div className="page-shell first-class-grid">
          <div className="first-class-copy">
            <SectionLabel>Seu primeiro treino começa aqui</SectionLabel>
            <h2>Venha como você está.<br /><span>Saia mais forte.</span></h2>
            <p>
              A aula experimental é gratuita. Fale com a equipe, escolha a melhor turma e venha conhecer a Inside sem compromisso.
            </p>
            <WhatsAppButton label="Agendar pelo WhatsApp" variant="dark" />
          </div>
          <div className="first-class-steps">
            <div><span>01</span><p><strong>Chame no WhatsApp</strong>Conte para a equipe se é adulto, infantil ou personal.</p></div>
            <div><span>02</span><p><strong>Combine o melhor horário</strong>Os horários variam por turma e devem ser confirmados.</p></div>
            <div><span>03</span><p><strong>Experimente grátis</strong>Conheça o espaço e sinta a energia do treino.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="map-wrap">
          <iframe
            title="Mapa da Inside Muay Thai em Piracicaba"
            src={siteConfig.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact-card">
          <SectionLabel>Estamos em Piracicaba</SectionLabel>
          <h2>Seu treino tem endereço.</h2>
          <div className="contact-item">
            <MapPin aria-hidden="true" />
            <p><strong>{siteConfig.address.street}</strong>{siteConfig.address.district}<br />{siteConfig.address.cityState} · {siteConfig.address.zip}</p>
          </div>
          <div className="contact-item">
            <Phone aria-hidden="true" />
            <p><strong>{siteConfig.phone}</strong>Horários por turma — confirme pelo WhatsApp</p>
          </div>
          <div className="contact-links">
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Como chegar <ArrowUpRight aria-hidden="true" /></a>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><Camera aria-hidden="true" /> Instagram</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand">
            <img src="/academia/5.jpg" alt="Inside Muay Thai" />
            <p>Centro de Treinamento<br />Inside Muay Thai · Bruno Marques</p>
          </div>
          <div>
            <small>MODALIDADES</small>
            <a href="#modalidades">Adulto</a>
            <a href="#modalidades">Infantil</a>
            <a href="#modalidades">Personal Fight</a>
          </div>
          <div>
            <small>CONTATO</small>
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Como chegar</a>
          </div>
          <div className="footer-cta">
            <p>Pronto para começar?</p>
            <WhatsAppButton label="Aula grátis" variant="outline" />
          </div>
        </div>
        <div className="footer-bottom page-shell">
          <span>© {new Date().getFullYear()} Inside Muay Thai Piracicaba</span>
          <span>Muay Thai · Respeito · Evolução</span>
        </div>
      </footer>

      <a
        className="mobile-whatsapp"
        href={whatsappUrl(defaultMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar aula experimental grátis pelo WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        Aula experimental grátis
      </a>
    </main>
  );
}
