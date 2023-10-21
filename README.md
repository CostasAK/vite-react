# React + Vite

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://github.com/prettier/prettier)
[![Ko-fi](https://img.shields.io/badge/support_me_on_ko--fi-F16061?style=for-the-badge&logo=kofi&logoColor=f5f5f5)](https://ko-fi.com/CostasAK)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Contents

- [Contents](#contents)
- [Usage](#usage)
  - [GitHub Repository Setup](#github-repository-setup)
    - [Auto-merge Dependabot PRs](#auto-merge-dependabot-prs)
    - [Main branch protection](#main-branch-protection)

## Usage

Install pnpm, if you don't have it installed already

```sh
npm install -g pnpm
```

Scaffold the project, replacing `my-project` with your desired project name

```sh
npx degit CostasAK/vite-react#main my-project
cd my-project
pnpm install
pnpm start
```

### GitHub Repository Setup

#### Auto-merge Dependabot PRs

To auto-merge PRs and to allow workflows to be triggered off of them, a PAT is needed with access to the repository and the following permissions:

- Repository permissions
  - Read
    - Metadata
  - Read and Write
    - Code
    - Pull Requests
    - Workflows

Once you have the token, set the following:

- Settings
  - General -> Pull Requests -> Allow auto-merge
  - Secrets and variables
    - Set your token in the following 2 places:
      - Actions -> New repository secret -> `APPROVAL_TOKEN`
      - Dependabot -> New repository secret -> `APPROVAL_TOKEN`

#### Main branch protection

These settings especially important when using auto-merge for Dependabot PRs.

- Settings
  - Branches -> Branch Protection Rule
    - Branch name pattern: `main`
    - Protect matching branches
      - Require a pull request before merging
      - Require approvals
      - Dismiss stale pull request approvals when new commits are pushed
      - Require review from Code Owners
      - Require status checks to pass before merging -> Require branches to be up to date before merging:
        - `test`
        - `lint`
        - `format`
        - `commitlint`
      - Require conversation resolution before merging
  - Actions -> General -> Workflow permissions -> Allow GitHub Actions to create and approve pull requests
