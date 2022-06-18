INSERT INTO cliente
(
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
)
VALUES
(
    @primeiro_nome,
    @ultimo_nome,
    @email,
    @sexo,
    @cidade,
    @codigo_pais,
    @empresa,
    @id_profissao,
    @etnia,
    @nascimento
)

SELECT SCOPE_IDENTITY() AS id_cliente