import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h2>404 - strona nie została znaleziona</h2>
      <p>
        Pomimo ogromnych starań ta strona nie została znaleziona. Sprawdź adres
        i spróbuj ponownie lub wróć do strony głównej.
      </p>
      <a href="/" aria-label="Powrót do strony głównej">
        Strona Główna
      </a>
    </div>
  )
}
