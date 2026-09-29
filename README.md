# Inside Muay Thai — Landing Page

Landing page oficial da **Inside Muay Thai Bruno Marques**, em Piracicaba (SP). O projeto apresenta a academia, modalidades, estrutura, avaliações e informações de contato, com chamadas diretas para o WhatsApp.

## Demonstração

[Acessar o site](https://inside-muay-thai-piracicaba.coabruno0.chatgpt.site)

## Sobre o projeto

O site foi desenvolvido para facilitar o primeiro contato de novos alunos com a academia. A navegação é responsiva e reúne em uma única página as principais informações para quem deseja conhecer o espaço ou agendar uma aula experimental.

### Principais recursos

- apresentação da academia e de suas modalidades;
- seção de fotos do espaço;
- avaliações de alunos;
- integração com WhatsApp para agendamento;
- endereço com mapa do Google Maps;
- links para telefone e Instagram;
- layout responsivo para computadores, tablets e celulares;
- metadados para mecanismos de busca;
- funcionamento sem banco de dados.

## Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vinext](https://github.com/cloudflare/vinext)
- [Vite](https://vite.dev/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Lucide React](https://lucide.dev/)
- CSS responsivo

## Arquitetura

O conteúdo principal é mantido no próprio código. O projeto não utiliza banco de dados, migrations ou ORM. O backend do Worker continua disponível para renderização e futuras integrações, sem exigir infraestrutura de dados para executar o site atual.

## Como executar localmente

### Requisitos

- Node.js 22.13 ou superior;
- npm.

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/devbrunocc/inside-muay-thai-landing-page.git
cd inside-muay-thai-landing-page
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

> No PowerShell com execução de scripts bloqueada, use `npm.cmd` no lugar de `npm`, por exemplo: `npm.cmd run dev`.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm start` | Executa localmente a versão já compilada |
| `npm run lint` | Analisa a qualidade do código |

## Personalização

Os dados da academia ficam centralizados em [`lib/site-config.ts`](lib/site-config.ts), incluindo telefone, endereço, links, modalidades, avaliações e fotos.

O conteúdo e a estrutura da página ficam em [`app/page.tsx`](app/page.tsx). Os estilos globais e responsivos estão em [`app/globals.css`](app/globals.css).

## Estrutura principal

```text
app/
├── globals.css          # Identidade visual e responsividade
├── layout.tsx           # Metadados e estrutura raiz
└── page.tsx             # Conteúdo da landing page
lib/
└── site-config.ts       # Informações editáveis da academia
public/
└── academia/            # Fotografias do espaço
```

## Verificação antes de publicar

```bash
npm run lint
npm run build
```

O build atual foi validado com sucesso. O lint não apresenta erros; permanecem apenas avisos do Next.js relacionados ao uso intencional de imagens HTML.

## Publicação

O projeto gera uma aplicação compatível com Cloudflare Workers por meio do Vinext. Antes da publicação, revise os dados em `lib/site-config.ts` e confirme se os links de contato estão atualizados.

## Contato da academia

- [Instagram](https://www.instagram.com/insidemuaythaipiracicaba/)
- [Google Maps](https://www.google.com/maps/search/?api=1&query=Rua%20Leogildo%20Salvagni%2C%20370%2C%20Piracicaba%2C%20SP)
- Telefone: (19) 3927-7970

---

Projeto desenvolvido para a **Inside Muay Thai Bruno Marques**.
