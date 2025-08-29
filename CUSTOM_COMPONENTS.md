# Custom React Components Library

Este documento lista os Custom React Components disponíveis para uso via Wisp CMS, junto com as propriedades esperadas de cada um.

---

## Heading

Renderiza um resumo do projeto com informações principais.

**Nome do componente:** `Heading`

**Propriedades obrigatórias:**

| Propriedade  | Tipo           | Descrição                       |
|--------------|----------------|---------------------------------|
| industry     | string         | Setor/indústria do projeto      |
| client       | string         | Nome do cliente                 |
| year         | string ou número| Ano do projeto                  |
| experience   | string         | Experiência/nível envolvido     |

**Exemplo de uso no Wisp:**
```json
{
  "industry": "Tech",
  "client": "Acme Corp",
  "year": "2025",
  "experience": "Senior"
}
```

---

Adicione novos componentes abaixo conforme forem criados.
