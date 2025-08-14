module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Nueva funcionalidad
        "fix", // Corrección de bug
        "docs", // Cambios en la documentación
        "style", // Cambios de formato (no CSS)
        "refactor", // Refactorización de código
        "perf", // Mejoras de rendimiento
        "test", // Añadir o modificar tests
        "build", // Cambios en build o dependencias
        "ci", // Cambios en configuración de CI/CD
        "chore", // Mantenimiento
        "revert", // Revertir un commit
      ],
    ],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]],
  },
};
