export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      
      <body>
        <header>Minha Loja</header>

        {children}

        <footer>Rodapé da minha loja</footer>
      </body>
    </html>
  );
}
