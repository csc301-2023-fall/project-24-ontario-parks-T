-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: yilz-1.mysql.database.azure.com    Database: test_database
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'yilz','123789'),(2,'hao','123789');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add audio',1,'add_audio'),(2,'Can change audio',1,'change_audio'),(3,'Can delete audio',1,'delete_audio'),(4,'Can view audio',1,'view_audio'),(5,'Can add image',2,'add_image'),(6,'Can change image',2,'change_image'),(7,'Can delete image',2,'delete_image'),(8,'Can view image',2,'view_image'),(9,'Can add location',3,'add_location'),(10,'Can change location',3,'change_location'),(11,'Can delete location',3,'delete_location'),(12,'Can view location',3,'view_location'),(13,'Can add log entry',4,'add_logentry'),(14,'Can change log entry',4,'change_logentry'),(15,'Can delete log entry',4,'delete_logentry'),(16,'Can view log entry',4,'view_logentry'),(17,'Can add permission',5,'add_permission'),(18,'Can change permission',5,'change_permission'),(19,'Can delete permission',5,'delete_permission'),(20,'Can view permission',5,'view_permission'),(21,'Can add group',6,'add_group'),(22,'Can change group',6,'change_group'),(23,'Can delete group',6,'delete_group'),(24,'Can view group',6,'view_group'),(25,'Can add user',7,'add_user'),(26,'Can change user',7,'change_user'),(27,'Can delete user',7,'delete_user'),(28,'Can view user',7,'view_user'),(29,'Can add content type',8,'add_contenttype'),(30,'Can change content type',8,'change_contenttype'),(31,'Can delete content type',8,'delete_contenttype'),(32,'Can view content type',8,'view_contenttype'),(33,'Can add session',9,'add_session'),(34,'Can change session',9,'change_session'),(35,'Can delete session',9,'delete_session'),(36,'Can view session',9,'view_session');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$CIpOcBjfk4DJyLBppOkBjd$GralQqZu+68KE4m254GNJU5ohYnUUBsMULFjZv6X3QM=','2023-11-11 00:45:44.419125',0,'yilz','','','1@1.com',0,1,'2023-11-11 00:36:28.686784');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (4,'admin','logentry'),(1,'AdminControl','audio'),(2,'AdminControl','image'),(3,'AdminControl','location'),(6,'auth','group'),(5,'auth','permission'),(7,'auth','user'),(8,'contenttypes','contenttype'),(9,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-11-11 00:29:30.510239'),(2,'auth','0001_initial','2023-11-11 00:29:32.905507'),(3,'admin','0001_initial','2023-11-11 00:29:33.528971'),(4,'admin','0002_logentry_remove_auto_add','2023-11-11 00:29:33.590480'),(5,'admin','0003_logentry_add_action_flag_choices','2023-11-11 00:29:33.661985'),(6,'contenttypes','0002_remove_content_type_name','2023-11-11 00:29:34.279963'),(7,'auth','0002_alter_permission_name_max_length','2023-11-11 00:29:34.553585'),(8,'auth','0003_alter_user_email_max_length','2023-11-11 00:29:34.686698'),(9,'auth','0004_alter_user_username_opts','2023-11-11 00:29:34.752166'),(10,'auth','0005_alter_user_last_login_null','2023-11-11 00:29:35.004696'),(11,'auth','0006_require_contenttypes_0002','2023-11-11 00:29:35.050556'),(12,'auth','0007_alter_validators_add_error_messages','2023-11-11 00:29:35.103427'),(13,'auth','0008_alter_user_username_max_length','2023-11-11 00:29:35.345411'),(14,'auth','0009_alter_user_last_name_max_length','2023-11-11 00:29:35.615389'),(15,'auth','0010_alter_group_name_max_length','2023-11-11 00:29:35.783526'),(16,'auth','0011_update_proxy_permissions','2023-11-11 00:29:35.936408'),(17,'auth','0012_alter_user_first_name_max_length','2023-11-11 00:29:36.189349'),(18,'sessions','0001_initial','2023-11-11 00:29:36.395248');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('e3s22msp15huby11mm1dzywvv3aqxtzy','.eJxVjEEOwiAQRe_C2hBowQGX7nsGMsOAVA0kpV0Z765NutDtf-_9lwi4rSVsPS1hZnERWpx-N8L4SHUHfMd6azK2ui4zyV2RB-1yapye18P9OyjYy7eGkUy2YFwCBAa0Pms1QnQRz56dMWysp0TZs7KDVhgjIBFrn4welBbvD-VIOAQ:1r1c88:zLMRgWSG7w5tuydkCjXcdTIY6HURnf5oln648mwCkp0','2023-11-25 00:45:44.470693');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `get_locations_by_province`
--

DROP TABLE IF EXISTS `get_locations_by_province`;
/*!50001 DROP VIEW IF EXISTS `get_locations_by_province`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_locations_by_province` AS SELECT 
 1 AS `location_id`,
 1 AS `location_name`,
 1 AS `location_address`,
 1 AS `location_city`,
 1 AS `location_province`,
 1 AS `location_postal_code`,
 1 AS `longitude`,
 1 AS `latitude`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_medias_at_location`
--

DROP TABLE IF EXISTS `get_medias_at_location`;
/*!50001 DROP VIEW IF EXISTS `get_medias_at_location`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_medias_at_location` AS SELECT 
 1 AS `media_id`,
 1 AS `location`,
 1 AS `name`,
 1 AS `type`,
 1 AS `description`,
 1 AS `image`,
 1 AS `link`,
 1 AS `season`,
 1 AS `year`,
 1 AS `month`,
 1 AS `day`,
 1 AS `longitude`,
 1 AS `latitude`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) NOT NULL,
  `location_address` varchar(255) NOT NULL,
  `location_city` varchar(255) NOT NULL,
  `location_province` varchar(255) NOT NULL,
  `location_postal_code` varchar(255) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Ontario Science Centre','770 Don Mills Rd','Toronto','ON','M3C 1T3',43.7161,-79.3393),(2,'Royal Ontario Museum','100 Queen\'s Park','Toronto','ON','M5S 2C6',43.6677,-79.3947),(3,'Vancouver Public Library','350 W Georgia St','Vancouver','BC','V6B 6B1',49.2799,-123.115),(4,'Vancouver Art Gallery','750 Hornby St','Vancouver','BC','V6Z 2H7',49.2827,-123.121),(5,'Toronto Public Library','789 Yonge St','Toronto','ON','M4W 2G8',43.6714,-79.3861);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medias`
--

DROP TABLE IF EXISTS `medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medias` (
  `media_id` int NOT NULL AUTO_INCREMENT,
  `location` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT 'audio',
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `link` varchar(255) NOT NULL,
  `season` varchar(10) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `month` int DEFAULT NULL,
  `day` int DEFAULT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  PRIMARY KEY (`media_id`),
  KEY `location` (`location`),
  CONSTRAINT `medias_ibfk_1` FOREIGN KEY (`location`) REFERENCES `locations` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medias`
--

LOCK TABLES `medias` WRITE;
/*!40000 ALTER TABLE `medias` DISABLE KEYS */;
INSERT INTO `medias` VALUES (1,1,'Ontario Science Centre Audio 1','video','Left blank','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ontario_Science_Centre.jpg/220px-Ontario_Science_Centre.jpg','https://www.youtube.com/watch?v=H3EhLZf9VlU','winter',NULL,NULL,NULL,43.7161,-79.3393),(2,2,'Royal Ontario Museum Audio 1','video','Left blank','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ontario_Science_Centre.jpg/220px-Ontario_Science_Centre.jpg','https://www.youtube.com/watch?v=H3EhLZf9VlU',NULL,NULL,NULL,NULL,43.6677,-79.3947),(3,3,'Vancouver Public Library Audio 1','video','Left blank','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ontario_Science_Centre.jpg/220px-Ontario_Science_Centre.jpg','https://www.youtube.com/watch?v=H3EhLZf9VlU','spring',NULL,NULL,NULL,49.2799,-123.115),(4,4,'Vancouver Art Gallery Audio 1','video','Left blank','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ontario_Science_Centre.jpg/220px-Ontario_Science_Centre.jpg','https://www.youtube.com/watch?v=H3EhLZf9VlU','summer',NULL,NULL,NULL,49.2827,-123.121),(5,5,'Toronto Public Library Audio 1','video','Left blank','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ontario_Science_Centre.jpg/220px-Ontario_Science_Centre.jpg','https://www.youtube.com/watch?v=H3EhLZf9VlU','fall',NULL,NULL,NULL,43.6714,-79.3861),(6,3,'Vancouver Public Library Audio 2','video','Left blank','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ontario_Science_Centre.jpg/220px-Ontario_Science_Centre.jpg','https://www.youtube.com/watch?v=H3EhLZf9VlU','fall',NULL,NULL,NULL,49.2799,-123.115);
/*!40000 ALTER TABLE `medias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `get_locations_by_province`
--

/*!50001 DROP VIEW IF EXISTS `get_locations_by_province`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`yilz`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `get_locations_by_province` AS select `locations`.`location_id` AS `location_id`,`locations`.`location_name` AS `location_name`,`locations`.`location_address` AS `location_address`,`locations`.`location_city` AS `location_city`,`locations`.`location_province` AS `location_province`,`locations`.`location_postal_code` AS `location_postal_code`,`locations`.`longitude` AS `longitude`,`locations`.`latitude` AS `latitude` from `locations` where (`locations`.`location_province` = 'ON') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_medias_at_location`
--

/*!50001 DROP VIEW IF EXISTS `get_medias_at_location`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`yilz`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `get_medias_at_location` AS select `medias`.`media_id` AS `media_id`,`medias`.`location` AS `location`,`medias`.`name` AS `name`,`medias`.`type` AS `type`,`medias`.`description` AS `description`,`medias`.`image` AS `image`,`medias`.`link` AS `link`,`medias`.`season` AS `season`,`medias`.`year` AS `year`,`medias`.`month` AS `month`,`medias`.`day` AS `day`,`medias`.`longitude` AS `longitude`,`medias`.`latitude` AS `latitude` from `medias` where (`medias`.`location` = 3) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 20:03:25
