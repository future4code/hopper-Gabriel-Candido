### Ex 1 --
#### a )
##### R: Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. Dessa forma, deve-se especificar na tabela que contém a chave estrangeira quais são essas colunas e à qual tabela está relacionada.

#### b )
##### R: 
```sql
CREATE TABLE Rating (
  id VARCHAR(255) PRIMARY KEY,
  comment TEXT NOT NULL,
  rate FLOAT NOT NULL,
  movie_id VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("001", "Filme Excelente!", "10", "001"),
      ("002", "Filme Bom!", "7", "002"),
      ("003", "Esperava Mais!", "5", "003"),
      ("004", "Horrível!", "0", "004");

SELECT * FROM Movie
JOIN Rating ON Rating.movie_id = Movie.id;
```

#### c )
##### R: Ocorrerá em falha na adição do comentário, pois a FOREING KEY, precisa de um movie_id válido.
```sql 
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

#### d )
##### R:
```sql
ALTER TABLE Movie
DROP COLUMN rating;
```

#### e )
##### R: Não é possível deletar valores de uma tabela, pois está sendo utilizada em outra tabela.
```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

-----------------------------------------------------------------------------

### Ex 2 --
#### a )
##### R: Essa tabela irá receber dois valores a partir de outras tabelas, sendo eles, o id de um filme e o id de um ator, para serem referenciados.

#### b )
##### R:
```sql
INSERT INTO MovieCast (movie_id, actor_id)
VALUES("001", "001"),
      ("002", "003"),
      ("003", "002"),
      ("004", "004"),
      ("002", "002"),
      ("003", "003");
```

#### c )
##### R: Não tem como adicionar a tabela, pois a FOREING KEY barra tal execução, devido a inexistencia do id relacionado.
```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

#### d )
##### R: Não é possível deletar valores de uma tabela, pois está sendo utilizada em outra tabela.
```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

### Ex 3 --
#### a )
##### R: O ON é utilizado quando se tem nomes de colunas diferentes ou iguais entre as tabelas

#### b )
##### R:
```sql
SELECT Movie.id, Movie.title, Rating.rate FROM Movie
JOIN Rating ON Movie.id = Rating.movie_id;
```
