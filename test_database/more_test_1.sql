/*
There are serveral basic qurey and test
*/

/*this query is checking media where you just add, delete*/
DROP VIEW IF EXISTS media_test;
CREATE VIEW media_test AS
SELECT * FROM medias;

DROP VIEW IF EXISTS admin_test;
CREATE VIEW admin_test AS
SELECT * FROM admins;

DROP VIEW IF EXISTS location_test;
CREATE VIEW location_test AS
SELECT * FROM locations;
DELETE FROM locations
WHERE location_id = 1;

DROP VIEW IF EXISTS locations_have_medias_test;
CREATE VIEW locations_have_medias_tests AS
SELECT * FROM locations_have_medias;
