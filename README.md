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