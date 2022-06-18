UPDATE cliente 
SET
    primeiro_nome=@primeiro_nome,
    ultimo_nome=@ultimo_nome,
    email=@email,
    sexo=@sexo,
    cidade=@cidade,
    codigo_pais=@codigo_pais,
    empresa=@empresa,
    id_profissao=@id_profissao,
    etnia=@etnia,
    nascimento=@nascimento
WHERE id_cliente=@id_cliente    

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