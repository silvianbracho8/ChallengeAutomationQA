# QA Mercado Libre - Versión Simple

Este proyecto contiene pruebas automatizadas para Mercado Libre, usando Playwright y Cucumber.

## Instalación

```bash
npm install
npx playwright install
```

## Ejecutar pruebas

- Ejecutar todas las pruebas:

```bash
npm test
```

- Ejecutar solo pruebas UI:

```bash
npm run test:ui
```

- Ejecutar solo pruebas API:

```bash
npm run test:api
```

## Capturas

Las capturas de pantalla de fallos se guardan en la carpeta `screenshots`.

## Estructura

- `features/` archivos de escenarios Gherkin.
- `step-definitions/` definiciones de pasos.
- `pages/` objetos de página para UI.
- `screenshots/` capturas de fallos.
- `reports/` reportes (pueden configurarse).