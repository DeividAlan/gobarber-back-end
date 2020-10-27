# Recuperação de senha

**RF**

- O usuario deve poder recuperar sua senha informando seu email;
- O uduario deve receber um e-mail com instruções de recuperação de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- o envio de e-mails deve acontecer em segundo plano (bakckgroud job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senaha;

# Atualização de perfil

**RF**

- O Usuario deve poder atualizar seu nome, email e senha;

**RNF**



**RN**

- O usuario não pode alterar seu emal para um email ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- para atualizar sua senha, o usuario precisa confimar a nova senha;

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem se armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviço

**RF**

- O usuario deve poder listar todos prestadores de serviço cadastrados;
- O usuario deve poder listar os dias de um mês com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro as 8h, ultimo as 17h);
- O usuario não pode agendar em um horario ja ocupado;
- O usuario não pode agendar em um horario que ja passou;
- O usuario não pode agendar serviço consigo mesmo;
