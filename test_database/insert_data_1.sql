/* INSERT INTO auth_user VALUES (1,'yilz','123789', null, 1, "Yifang", "Zhang", "yilz.zhang@mail.utoronto.ca", '1', '1', null);
INSERT INTO auth_user VALUES (2,'hao','123789', null, 1, "Hao", "Yin", "", '1', '1', null); */
INSERT INTO admins VALUES (1,'yilz','123789');
INSERT INTO admins VALUES (2,'hao','123789');

INSERT INTO locations VALUES (1,'Ontario Science Center','770 Don Mills Rd','Toronto','ON','M3C 1T3', 43.7161, -79.3393);
INSERT INTO locations VALUES (2,'Royal Ontario Museum','100 Queen''s Park','Toronto','ON','M5S 2C6', 43.6677, -79.3947);
INSERT INTO locations VALUES (3,'Vancouver Public Library','350 W Georgia St','Vancouver','BC','V6B 6B1', 49.2799, -123.1151);
INSERT INTO locations VALUES (4,'Vancouver Art Gallery','750 Hornby St','Vancouver','BC','V6Z 2H7', 49.2827, -123.1207);
INSERT INTO locations VALUES (5,'Toronto Public Library','789 Yonge St','Toronto','ON','M4W 2G8', 43.6714, -79.3861);

INSERT INTO medias VALUES (
    1,
    1,
    'Ontario Science Center Audio Winter Ver.',
    'audio',
    'Left blank',
    'https://www.ontariosciencecentre.ca/media/1021/building.jpg',
    'https://yilz.blob.core.windows.net/c-1/background-welcome.mp3',
    'winter',
    NULL,
    NULL,
    NULL,
    43.7161, -79.3393,
    "Version hivernale audio du Centre des sciences de l’Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    2,
    2,
    'Royal Ontario Museum Audio Winter Ver.',
    'audio',
    'Left blank',
    'https://travel.usnews.com/images/Courtesy_of_Royal_Ontario_MuseumBuilding-museum-outside.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'winter',
    NULL,
    NULL,
    NULL,
    43.6677, -79.3947,
    "Version hivernale audio du Musée royal de l’Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    3,
    3,
    'Vancouver Public Library Audio Winter Ver.',
    'audio',
    'Left blank',
    'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Vancouver_VancouverPublicCentralLibrary_byGoToVan_2017_001_Sig.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3',
    'winter',
    NULL,
    NULL,
    NULL,
    49.2799, -123.1151,
    "Version hivernale audio de la Bibliothèque publique de Vancouver",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    4,
    4,
    'Vancouver Art Gallery Audio Winter Ver.',
    'audio',
    'Left blank',
    'https://upload.wikimedia.org/wikipedia/commons/c/ca/Vancouver_Art_Gallery_%2829787380987%29.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'winter',
    NULL,
    NULL,
    NULL,
    49.2827, -123.1207,
    "Version hivernale audio de la Galerie d'art de Vancouver",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    5,
    5,
    'Toronto Public Library Audio Winter Ver.',
    'audio',
    'Left blank',
    'https://media.blogto.com/articles/20201016-tpl-2.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'winter',
    NULL,
    NULL,
    NULL,
    43.6714, -79.3861,
    "Version hivernale audio de la Bibliothèque publique de Toronto",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    6,
    3,
    'Vancouver Public Library Audio Spring Ver.',
    'audio',
    'Left blank',
    'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Vancouver_VancouverPublicCentralLibrary_byGoToVan_2017_001_Sig.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'spring',
    NULL,
    NULL,
    NULL,
    49.2799, -123.1151,
    "Version printanière audio de la Bibliothèque publique de Vancouver",
    "Laissé vide"
);

INSERT INTO medias VALUES (
    7,
    1,
    'Ontario Science Centre Audio Spring Ver.',
    'audio',
    'Left blank',
    'https://www.ontariosciencecentre.ca/media/1021/building.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'spring',
    NULL,
    NULL,
    NULL,
    43.7161, -79.3393,
    "Version printanière audio du Centre des sciences de l'Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    8,
    2,
    'Royal Ontario Museum Audio Spring Ver.',
    'audio',
    'Left blank',
    'https://travel.usnews.com/images/Courtesy_of_Royal_Ontario_MuseumBuilding-museum-outside.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'spring',
    NULL,
    NULL,
    NULL,
    43.6677, -79.3947,
    "Version printanière audio du Musée royal de l'Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    9,
    4,
    'Vancouver Art Gallery Audio Spring Ver.',
    'audio',
    'Left blank',
    'https://upload.wikimedia.org/wikipedia/commons/c/ca/Vancouver_Art_Gallery_%2829787380987%29.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'spring',
    NULL,
    NULL,
    NULL,
    49.2827, -123.1207,
    "Version printanière audio de la Galerie d'art de Vancouver",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    10,
    5,
    'Toronto Public Library Audio Spring Ver.',
    'audio',
    'Left blank',
    'https://media.blogto.com/articles/20201016-tpl-2.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'spring',
    NULL,
    NULL,
    NULL,
    43.6714, -79.3861,
    "Version printanière audio de la Bibliothèque publique de Toronto",
    "Laissé vide"
);

INSERT INTO medias VALUES (
    11,
    1,
    'Ontario Science Centre Audio Summer Ver.',
    'audio',
    'Left blank',
    'https://www.ontariosciencecentre.ca/media/1021/building.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'summer',
    NULL,
    NULL,
    NULL,
    43.7161, -79.3393,
    "Version estivale audio du Centre des sciences de l'Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    12,
    2,
    'Royal Ontario Museum Audio Summer Ver.',
    'audio',
    'Left blank',
    'https://travel.usnews.com/images/Courtesy_of_Royal_Ontario_MuseumBuilding-museum-outside.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'summer',
    NULL,
    NULL,
    NULL,
    43.6677, -79.3947,
    "Version estivale audio du Musée royal de l'Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    13,
    3,
    'Vancouver Public Library Audio Summer Ver.',
    'audio',
    'Left blank',
    'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Vancouver_VancouverPublicCentralLibrary_byGoToVan_2017_001_Sig.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3',
    'summer',
    NULL,
    NULL,
    NULL,
    49.2799, -123.1151,
    "Version estivale audio de la Bibliothèque publique de Vancouver",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    14,
    4,
    'Vancouver Art Gallery Audio Summer Ver.',
    'audio',
    'Left blank',
    'https://upload.wikimedia.org/wikipedia/commons/c/ca/Vancouver_Art_Gallery_%2829787380987%29.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'summer',
    NULL,
    NULL,
    NULL,
    49.2827, -123.1207,
    "Version estivale audio de la Galerie d'art de Vancouver",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    15,
    5,
    'Toronto Public Library Audio Summer Ver.',
    'audio',
    'Left blank',
    'https://media.blogto.com/articles/20201016-tpl-2.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'summer',
    NULL,
    NULL,
    NULL,
    43.6714, -79.3861,
    "Version estivale audio de la Bibliothèque publique de Toronto",
    "Laissé vide"
);

INSERT INTO medias VALUES (
    16,
    1,
    'Ontario Science Centre Audio Fall Ver.',
    'audio',
    'Left blank',
    'https://www.ontariosciencecentre.ca/media/1021/building.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'fall',
    NULL,
    NULL,
    NULL,
    43.7161, -79.3393,
    "Version automnale audio du Centre des sciences de l'Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    17,
    2,
    'Royal Ontario Museum Audio Fall Ver.',
    'audio',
    'Left blank',
    'https://travel.usnews.com/images/Courtesy_of_Royal_Ontario_MuseumBuilding-museum-outside.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'fall',
    NULL,
    NULL,
    NULL,
    43.6677, -79.3947,
    "Version automnale audio du Musée royal de l'Ontario",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    18,
    3,
    'Vancouver Public Library Audio Fall Ver.',
    'audio',
    'Left blank',
    'https://www.tclf.org/sites/default/files/thumbnails/image/CA_Vancouver_VancouverPublicCentralLibrary_byGoToVan_2017_001_Sig.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3',
    'fall',
    NULL,
    NULL,
    NULL,
    49.2799, -123.1151,
    "Version automnale audio de la Bibliothèque publique de Vancouver",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    19,
    4,
    'Vancouver Art Gallery Audio Fall Ver.',
    'audio',
    'Left blank',
    'https://upload.wikimedia.org/wikipedia/commons/c/ca/Vancouver_Art_Gallery_%2829787380987%29.jpg',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.07.mp3',
    'fall',
    NULL,
    NULL,
    NULL,
    49.2827, -123.1207,
    "Version automnale audio de la Galerie d'art de Vancouver",
    "Laissé vide"
);
INSERT INTO medias VALUES (
    20,
    5,
    'Toronto Public Library Audio Fall Ver.',
    'audio',
    'Left blank',
    'https://media.blogto.com/articles/20201016-tpl-2.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
    'https://websrvr90va.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.03.mp3',
    'fall',
    NULL,
    NULL,
    NULL,
    43.6714, -79.3861,
    "Version automnale audio de la Bibliothèque publique de Toronto",
    "Laissé vide"
);


/* INSERT INTO locations_have_medias (location_id, media_id) VALUES (1,1);
INSERT INTO locations_have_medias (location_id, media_id) VALUES (2,2);
INSERT INTO locations_have_medias (location_id, media_id) VALUES (3,3);
INSERT INTO locations_have_medias (location_id, media_id) VALUES (4,4);
INSERT INTO locations_have_medias (location_id, media_id) VALUES (5,5);
INSERT INTO locations_have_medias (location_id, media_id) VALUES (3,6); */