SELECT 
      id_cliente,
      primeiro_nome,
      ultimo_nome,
      email,
      sexo,
      cidade,
      codigo_pais,
      empresa,
      id_profissao,
      etnia,
      nascimento
FROM cliente WHERE id_cliente=@id_cliente      