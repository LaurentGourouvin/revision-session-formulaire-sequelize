BEGIN;

INSERT INTO "role" ("description") VALUES 
('administrateur'),
('membre');

INSERT INTO "user" ("name", "password","email","role_id") VALUES
('riot','riot','riot@lol.fr',1),
('Zilean', 'zilean', 'zilean@lol.fr',2),
('Ahri', 'ahri', 'ahri@lol.fr',2),
('Gnar', 'gnar', 'gnar@lol.fr',2);
COMMIT;