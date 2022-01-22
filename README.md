instalação segundo o manual:
https://tailwindcss.com/docs/guides/nextjs

cria arquivo tsconfig.json
uso:
npm install --save-dev @types/react typescript

após abre o projeto: npm run dev

no typescript tem que colocar o:

interface LayoutProps {
titleText: string;
children: any;
}
para definir o tipo dos dados de cada parâmetro recebido pelo componente
