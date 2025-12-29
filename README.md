# ia-pratica-copilot-actions-
Acelerando o desenvolvimento e garantindo a qualidade com um fluxo de trabalho automatizado por IA
ia-pratica-copilot-actions/
├── README.md # resumo, badges e instruções
├── package.json
├── package-lock.json
├── src/
│ ├── index.js # API Express mínima
│ └── orders.js # lógica de negócio (função principal)
├── data/
│ └── orders.json # dados fictícios gerados por script
├── scripts/
│ └── generate_data.js # gera dados com faker
├── tests/
│ └── orders.test.js # testes Jest (gerados com prompt Copilot)
├── .github/
│ └── workflows/
│ └── ci.yml # workflow do GitHub Actions
└── .github/CODEOWNERS
