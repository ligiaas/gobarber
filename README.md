# Funcionalidades Macros da API

## Recuperação de senha

 **RF**

 - O usuário deve poder recuperar sua senha informando seu email;
 - O usuário deve receber um e-mail com instruções de recuperação de senha;
 - O usuário deve poder resetar sua senha;

 **RNF**

 - Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
 - Utilizar o Amazon SES para envios em produção;
 - O envio de emails em segundo plano (background job), em fila;

 **RN**

 - O link enviado por email para resetar senha, deve expirar em 2h;
 - O usuário precisa confirmar a nova senha ao resetar sua senha;

## Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email, senha e avatar;

**RNF**

- O upload da foto deve ser feita com o Multer

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para alterar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;
- Para atualizar sua foto, o usuário só pode usar arquivos png, jpg e jpeg com 512MB no máximo.

## Painel do prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

## Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;


## Glossário

**RF**
**Requisitos Funcionais** são **exatamente** quais são as funcionalidades daquela funcionalidade macro
Ex: O usuário vai poder recuperar a senha informando o email antigo dele


**RNF**
**Requisitos Não Funcionais** são coisas que não são ligadas diretamente com a nossa regra de negócio.
Ex: O envio de email precisa ser feito com a lib node-mailer.
São requisitos voltados pra área técnica, que define quais libs ou DB's que serão usadas

**RN**
**Regras de Negócio** deve estar atrelada a algum requisito funcional, se não estiver provavelmente está faltando algo.
