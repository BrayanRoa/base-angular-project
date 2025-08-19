# 📘 Guía de Estilo Angular + TypeScript

Esta guía define las convenciones y nomenclatura a seguir en el proyecto para mantener consistencia y legibilidad.

---

## 1️⃣ Convenciones Generales de Nombres

### Variables y Propiedades

- Usar `camelCase`.
- Ser descriptivas.
- Evitar abreviaturas confusas.

**Ejemplo:**

```ts
let userName = "Selaski";
const maxRetries = 3;
```

---

### Métodos y Funciones

- Usar `camelCase`, iniciar con verbo.
- Nombres claros que indiquen acción.

**Ejemplo:**

```ts
getUserById(id: number) {}
updateProfile(data: IProfile) {}
```

---

### Clases

- Usar `PascalCase`.
- Sufijo dependiendo del tipo (`Service`, `Component`, `Directive`, `Page` etc.).

**Ejemplo:**

```ts
export class UserService {}
export class TableComponent {}
export class DashboardPage {}
```

---

### Interfaces

- Usar `PascalCase`.
- Agregar el prefijo `I` para diferenciarlas (`IUser`).

**Ejemplo:**

```ts
export interface IUser {
  id: number;
  name: string;
}
```

---

### Constantes

- Usar `UPPER_CASE_SNAKE_CASE`.

**Ejemplo:**

```ts
export const API_BASE_URL = "https://api.example.com";
```

---

## 2️⃣ Nomenclatura Angular

### 📁 Features y 🛣️ Rutas

- Cada feature vive en una carpeta dentro de features/.
- Cada feature tiene un archivo \*.routes.ts que define sus rutas hijas (este archivo lo creamos manualmente porque la CLI no tiene un comando para generar este archivo).
- Los componentes son standalone (standalone: true).

**Ejemplo de estructura**

```
features/
 ├─ auth/
 │   ├─ auth.routes.ts // este sería el archivo que se crea manuealmente
 │   └─ pages/
 │       ├─ auth-login-page/
 │       │   ├─ auth-login-page.ts
 │       │   └─ auth-login-page.html
 │       └─ auth-register-page/
 │           ├─ auth-register-page.ts
 │           └─ auth-register-page.html
 |   └─ services/
 |   └─ components/
 |   └─ interfaces/
```

**Archivo de rutas de una feature (auth.routes.ts)**

```ts
import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: "login",
    loadComponent: () => import("./pages/auth-login-page/auth-login-page").then((m) => m.AuthLoginPage),
  },
  {
    path: "register",
    loadComponent: () => import("./pages/auth-register-page/auth-register-page").then((m) => m.AuthRegisterPage),
  },
];
```

---

### 🧩 Componentes

#### 📄 Páginas principales

- Usar el sufijo `Page`.
- Para el nombre de páginas dentro de una feature, se usa la convención:  
  `{feature}-{nombre}-page`

**Ejemplo:**

```
auth-login-page.html
auth-login-page.scss
auth-login-page.ts
```

**Comando CLI (Abreviado):**

```
ng g c features/auth/pages/auth-login-page --standalone
```

#### 🔹 Componentes propios de una feature o compartidos

- Sufijo `Component`.
- Si es un componente compartido (usado en varias features), se debe colocar dentro de `shared/components/`.

**Ejemplo:**

```
table-component.ts
dashboard-page.ts
```

**Comando CLI (Abreviado):**

```
ng g c shared/components/table-component --standalone
```

---

### ⚙️ Servicios

- Usar el sufijo `Service`.
- El nombre debe estar en **singular**, representando la entidad o dominio que maneja.
- Ubicarlos dentro de la carpeta `services/` en cada feature, o en `shared/services/` si es compartido.

**Ejemplo:**

```
product-service.ts
auth-service.ts
```

**Comando CLI (Abreviado):**

```
ng g s features/dashboard/services/product-service
```

---

### 📝 Interfaces

- Ubicarlas dentro de la carpeta `interfaces/` de cada feature, o en `shared/interfaces/` si son reutilizables.
- El nombre debe ser **descriptivo** y terminar con el sufijo `.interface.ts`.
- Usar PascalCase para el nombre de la interfaz.

**Ejemplo:**

```
user.interface.ts
product.interface.ts
```

---

### Carpeta Base de Proyecto

```
src/app/
  core/          // Servicios globales, interceptores, guards
  shared/        // Componentes, pipes, interfaces y directivas reutilizables
  features/      // Módulos de cada funcionalidad
    auth/
      pages/
      components/
      services/
      interfaces/
      auth.routes.ts
```

---

## 3️⃣ Notas Adicionales

- En versiones recientes de Angular, el CLI no agrega automáticamente el sufijo `Component` al crear componentes.
- Páginas principales usan sufijo `Page`, componentes reutilizables usan `Component`.
- Los Feature Modules se usan para manejar rutas y lazy loading, **no para almacenar lógica compartida** (esto va en `shared/` o `core/`).
