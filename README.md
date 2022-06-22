# Domain Driven Design

## Domínio vs Subdomínio

- Domínio (Netflix)
-- Core Domain (vídeos)
-- Support subdomain
--- Apoiam o domínio
--- Faz a operação do domínio possível
-- Genereric Subdomain
--- Software auxiliares
--- Sem diferencial competitivo

*Coração do negócio
*Diferencial competitivo da empresa

## Problema vs Solução

Domínio -> separar em subdomínios (problemas) -> converte em contexto

### Problema

Visão geral do domínio e suas complexidades -> Separa em subdomínios

### Solução

Análise e modelagem do domínio -> Delimitar contextos (subdomínios)

## Contexto Delimitado (Bounded Context)

É uma divisão explícita de uma parte do dóminio

## Contexto (é Rei)

- Vendas de Ingressos
-- Ticket

- Suporte ao Cliente
-- Ticket

### Elements Transversas

- Vendas de Ingressos
-- Cliente

- Suporte ao Cliente
-- Cliente

## Context Mapping (Modelagem Estratética)

- Domínio (Contexto)
-- Vendas de Ingressos - Oline (V.I.O)
-- Suporte ao Cliente (S.C)
-- Vendas de Ingressos - Parceiros (V.I.P)
-- Pagamento (P)

- Domínio (Contexto)
-- Gateway (G)

V.I.O e V.I.P estão em parceria
V.I.O e P tem vínculo de Cliente/Fornecedor

Up Stream: Quem fornece o serviço (Fornecedor - P)
Down Stream: Quem consome o serviço (Cliente - V.I.O)

P precvisa ser CONFORMISTA com G, pois não é possível mudar o comportamento do G

Termos utilizados para vincular um contexto com outro

- Parceria
- Shared
- Cliente/Fornecedor
- Conformista
- ACL (Ant Corrupction Layer): camada anti corrupção, responsável pela integração com G (cada G tem seu ACL)

### Padrões e Starter Kit

- Partnership
- Shared kernel
- CustomerSupplier Development
- Conformist
- Anticorruption Layer
- Open Host Service
- Published Language
- Separate ways
- Big Ball of Mud

https://github.com/ddd-crew/context-mapping

## Modelagem Tática e Patterns

### Entidades

"Uma entidade é algo único que é capaz de ser alterado de forma contínua durante um longo período de tempo."

--- Vernon, Vaughn. Implementing DDD

Ex: temos 3 carros do mesmo modelo, eu posso falterar de forma independente. Isso mostra que cada um tem sua identidade única.

#### Configurando Projeto TypeScript

Instalando

```
npm i typescript --dev-save
npx tsc --init
npm i tslint --save-dev
npx tslint --init
npm i uuid @types/uuid
```

### Value Objects

"Quando você se preocupa apenas com os atributos de um elemento de um model, classique isso como um Value Object"

"Trate o Value Object como imutável"

--- Evans, Eric. DDD

#### Exemplos

- Address (Street, City, State, Zip Code)
No caso do address, você não troca de número, vc troca de endereço!

- CPF
Não é apenas um número, é um identificador do usuário, possui lógica para definir os valores!

Os Value Objects não tem id!!!

### Agregados

"Um agregado é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados"

--- Evans, Eric. DDD

### Teste Automatizados

```
npm i -D jest @types/jest ts-node --save-dev
npm i -D @swc/jest @swc/cli @swc/core
npx jest --init
```

### Domain Services

Um serviço de domínio é uma operação sem estado que cumpre uma tarefa específica do domínio.

- Uma entidade pode realizar uma ação que vai afetar todas as entidades?
- Como realizar uma operação em lote?
- Como calcular algo cuja as informações constam em mais de uma entidade?

#### Cuidados

- Quando houver muitos Domain Services em seu projeto, TALVEZ, isso pode indicar que seus agregados estão anêmicos.
- Domain Services são Stateless

### Repositories

Um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados.

### Preparando o Sequelize

```
npm install sequelize reflect-metadata sequelize-typescript
npm install sqlite3
```