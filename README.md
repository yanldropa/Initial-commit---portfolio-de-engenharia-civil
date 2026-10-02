# Portfólio de Engenharia Civil

Site profissional em React + Vite, com Framer Motion para transições e animações.

## 1. Como instalar

Você precisa ter Node.js instalado.

```bash
npm install
```

## 2. Como executar

```bash
npm run dev
```

Depois abra o endereço mostrado pelo Vite no navegador.

Para gerar a versão de produção:

```bash
npm run build
```

## 3. Onde colocar as fotos

Coloque as imagens nestas pastas:

- `public/assets/images/profile/` — foto profissional e imagem principal do Hero
- `public/assets/images/projects/` — imagens dos projetos
- `public/assets/images/works/` — imagens das obras
- `public/assets/images/certificates/` — certificados
- `public/assets/images/gallery/` — imagens das galerias

Os nomes dos arquivos precisam corresponder aos caminhos definidos em `src/data/portfolioData.js`.

## 4. Onde colocar o currículo

Coloque o PDF em:

`public/assets/curriculo/curriculo.pdf`

Se usar outro nome, altere a propriedade `cv` no arquivo `src/data/portfolioData.js`.

## 5. Onde alterar nome, profissão e informações pessoais

Abra:

`src/data/portfolioData.js`

No início do arquivo existe:

`===== ALTERE AQUI AS INFORMAÇÕES =====`

Ali estão nome, profissão, CREA, cidade, e-mail, telefone, redes sociais, foto, currículo e textos principais.

## 6. Onde adicionar projetos

No mesmo arquivo, procure:

`===== ADICIONE OS PROJETOS =====`

Edite o array `projects`.

Cada projeto possui:
- nome
- imagem
- categoria
- localização
- ano
- descrição
- área
- status
- participação
- tecnologias
- desafios
- soluções
- resultados
- galeria

Não é necessário alterar os componentes para adicionar conteúdo.

## 7. Onde adicionar obras

Procure:

`===== ADICIONE AS OBRAS AQUI =====`

Edite o array `works`.

## 8. Onde adicionar experiências

Procure `export const experiences`.

Você pode adicionar quantas experiências quiser seguindo o mesmo formato.

## 9. Onde adicionar certificados

Procure `export const certifications`.

Adicione nome, instituição, ano, imagem e link.

## 10. Onde alterar redes sociais

No objeto `professional`:

- `linkedin`
- `instagram`

Substitua os placeholders pelos links reais.

## 11. Como personalizar seu portfólio

1. Abra `src/data/portfolioData.js`.
2. Preencha primeiro o objeto `professional`.
3. Coloque sua foto em `public/assets/images/profile/`.
4. Coloque a imagem principal do Hero.
5. Preencha sua biografia.
6. Preencha formação e experiência.
7. Adicione projetos e obras.
8. Adicione certificados.
9. Coloque o currículo na pasta indicada.
10. Troque os placeholders por informações reais.
11. Rode `npm run dev` e confira todas as páginas.
12. Antes de publicar, procure por `[`, pois isso ajuda a encontrar placeholders que ainda não foram preenchidos.

## Estrutura

```text
portfolio-engenharia-civil/
├── public/
│   └── assets/
│       ├── images/
│       │   ├── profile/
│       │   ├── projects/
│       │   ├── works/
│       │   ├── certificates/
│       │   └── gallery/
│       └── curriculo/
├── src/
│   ├── components/
│   ├── data/
│   │   └── portfolioData.js
│   ├── pages/
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Observações

- O formulário de contato é visual e não envia mensagens sozinho. Para isso, conecte um backend ou serviço de formulários.
- As imagens são placeholders até que os arquivos reais sejam adicionados.
- Nenhuma empresa, obra, projeto, número, CREA, cliente, formação ou experiência real foi inventado.
- A navegação usa React Router.
- As transições entre páginas usam Framer Motion + AnimatePresence.
- As animações de entrada usam `whileInView`.
- O layout é responsivo para desktop, notebook, tablet e celular.
