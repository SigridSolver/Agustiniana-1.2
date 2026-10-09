# UniAgustiniana — Research Portal

Aplicación web en inglés para consultar participantes, cuestionarios y resultados por programa académico de UniAgustiniana.

## Funciones

- Summary & Insights y gráficos calculados desde los mismos registros.
- Diez programas académicos con participantes, ID, semestre, nivel de inglés y respuestas.
- Consulta por carrera, pregunta y participante; matriz con búsqueda y exportación CSV.
- Equipo investigador de primer semestre, edición de datos y reporte imprimible.
- Campus configurado como Tagaste Campus.

El conjunto inicial contiene **85 participantes: 84 estudiantes y 1 docente**, **826 respuestas** y **19 investigadores**. Los totales de la interfaz cambian al editar los registros. Cada carrera utiliza su propio cuestionario: una pregunta con el mismo número puede tener un contenido diferente en otra carrera.

## Ejecutar localmente

Utiliza Node.js 26 y npm. Las pruebas de datos se ejecutaron con Node.js 26.2.0.

```powershell
npm install
npm run dev
```

Abre `http://localhost:3000`. La aplicación actual funciona en el navegador y no necesita claves API para consultar o editar sus datos locales.

## Validación y compilación

```powershell
npm test
npm run lint
npm run build
npm run preview
```

`npm test` comprueba los totales por programa, la correspondencia de nombres e IDs con los documentos, la migración de datos guardados, los semestres y la composición del equipo. `npm run lint` ejecuta la comprobación de tipos de TypeScript. La compilación se genera en `dist/`.

Las pruebas de datos han pasado. La instalación de dependencias quedó bloqueada por la configuración de red y caché del entorno de desarrollo; la compilación y la comprobación visual en navegador siguen pendientes.

## Datos y persistencia

Los registros iniciales están en `src/data/initialData.ts` y `src/data/additionalPrograms.ts`. Los cálculos compartidos y las migraciones están en `src/data/research.ts`.

Los documentos de Mercadeo, Comunicación Social y Lenguas Extranjeras contienen nombres, IDs y respuestas generales por programa. No asignan respuestas a cada persona ni documentan evaluaciones individuales de inglés. Las respuestas individuales y los niveles de esos 26 participantes se completaron durante el desarrollo; los documentos originales permanecen en el repositorio para consulta.

Los cambios realizados mediante Manage & Edit se almacenan en `localStorage`, por navegador y dispositivo. No se sincronizan con GitHub ni con otros usuarios. Restablecer los datos recupera el conjunto inicial. La exportación JSON permite guardar una copia de los registros.

Para reconstruir el archivo de las tres carreras desde los documentos y los textos mantenidos en `scripts/`:

```powershell
python scripts/import_additional_programs.py
```

Ese comando reescribe `src/data/additionalPrograms.ts`; revisa los cambios antes de confirmarlos. El enlace de video de Mercadeo está pendiente de reemplazo por su grabación correspondiente.

## Estructura

```text
src/App.tsx              Estado, navegación y persistencia
src/components/          Vistas y gráficos
src/data/                Registros, cuestionarios y cálculos
src/types/               Tipos de datos
scripts/                 Importación y publicación de cambios
tests/                   Pruebas de consistencia
```

La interfaz utiliza React, TypeScript, Vite, Tailwind CSS y Lucide.

## Git

Repositorio: https://github.com/SigridSolver/Agustiniana-1.2

Un commit guarda cambios localmente; `git push origin HEAD` los sube a GitHub. En esta instalación, el checkout Git está en `.github-push/04feee2326014758b1f179c7650936c3`; la carpeta raíz conserva la copia de trabajo descargada.

El script `scripts/push-to-github.ps1` crea otro checkout desde GitHub, copia los archivos del proyecto y realiza commit y push. Requiere conexión a GitHub y credenciales con acceso al repositorio. El script configura la identidad de autor del propietario en ese checkout.
