# React + Vite (UNDER CONSTRUCTION)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://github.com/prettier/prettier)
[![Ko-fi](https://img.shields.io/badge/support_me_on_ko--fi-F16061?style=for-the-badge&logo=kofi&logoColor=f5f5f5)](https://ko-fi.com/CostasAK)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Setup

### Preventing merging pull requests with failing build

1. _Settings_
   1. _General_ -> _Pull Requests_ -> _Allow auto-merge_
   2. _Branches_ -> _Branch Protection Rule_
      1. _Branch name pattern_: `main`
      2. _Protect matching branches_
         1. _Require a pull request before merging_
         2. _Require approvals_
         3. _Require status checks to pass before merging_ -> _Require branches to be up to date before merging_: `Continuous Integration`
   3. _Actions_ -> _General_ -> _Workflow permissions_ -> _Allow GitHub Actions to create and approve pull requests_
