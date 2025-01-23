CREATE TABLE produtos (
    id INT NOT NULL, -- ID inserido manualmente
    nome VARCHAR(255) NOT NULL,
    acabamento VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id) -- Chave primária única para o ID
);

INSERT INTO produtos (id, nome, acabamento, valor) VALUES
(1, 'Mesa de Jantar', 'Madeira Envernizada', 1500.00),
(2, 'Cadeira Estofada', 'Tecido de Linho', 300.00),
(3, 'Sofá Retrátil', 'Couro Sintético', 2500.00);

select * from produtos;
