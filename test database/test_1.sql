/*
There are serveral basic qurey and test
*/

/*this query is checking media where you just add*/
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
CREATE VIEW locations_have_medias_test AS
SELECT * FROM locations_have_medias;

SELECT * FROM admin_test;

SELECT * FROM media_test;

SELECT * FROM location_test;

SELECT * FROM locations_have_medias_test;

SELECT * FROM get_locations_by_province;

SELECT * FROM get_medias_at_location;

SELECT * FROM get_medias_by_season_at_location;
