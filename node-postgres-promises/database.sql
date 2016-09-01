DROP DATABASE IF EXISTS database_name;
CREATE DATABASE database_name;

\c database_name;

CREATE TABLE table_name (
  id SERIAL4 PRIMARY KEY,
  sample_column VARCHAR
);

-- optional seed data
INSERT INTO table_name (sample_column)
  VALUES ('sample_text_1');

INSERT INTO table_name (sample_column)
  VALUES ('sample_text_1');

INSERT INTO table_name (sample_column)
  VALUES ('sample_text_1');
