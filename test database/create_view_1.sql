DROP VIEW IF EXISTS get_locations_by_province;
DROP VIEW IF EXISTS get_medias_at_location;
DROP VIEW IF EXISTS get_medias_by_season_at_location;


CREATE VIEW get_locations_by_province AS
SELECT
    *
FROM
    locations
WHERE
    locations.location_province = 'ON'
;


CREATE VIEW get_medias_at_location AS
SELECT
    *
FROM medias
WHERE 
    medias.media_id IN (
        SELECT locations_have_medias.media_id
        FROM locations_have_medias
        WHERE locations_have_medias.location_id = 3
    )
;


CREATE VIEW get_medias_by_season_at_location AS
SElECT
    *
FROM get_medias_at_location
WHERE 
    get_medias_at_location.season = 'fall'
;


