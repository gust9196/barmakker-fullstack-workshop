-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: barmakker
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bar_features`
--

DROP TABLE IF EXISTS `bar_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bar_features` (
  `bar_features_id` int NOT NULL AUTO_INCREMENT,
  `fk_bar_id` int DEFAULT NULL,
  `opening_hours` varchar(150) DEFAULT NULL,
  `prices` enum('$','$$','$$$','$$$$','$$$$$') DEFAULT NULL,
  `games` tinyint(1) DEFAULT NULL,
  `billiard` tinyint(1) DEFAULT NULL,
  `smoking_allowed` tinyint(1) DEFAULT NULL,
  `happy_hour` tinyint(1) DEFAULT NULL,
  `viser_sport` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`bar_features_id`),
  KEY `fk_bar_id` (`fk_bar_id`),
  CONSTRAINT `bar_features_ibfk_1` FOREIGN KEY (`fk_bar_id`) REFERENCES `bars` (`bar_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bar_features`
--

LOCK TABLES `bar_features` WRITE;
/*!40000 ALTER TABLE `bar_features` DISABLE KEYS */;
INSERT INTO `bar_features` VALUES (1,1,'Mandag 10-22, Tirsdag 10-00, Onsdag 10-00, Torsdag 10-02, Fredag 10-02, Lørdag 11-02','$',1,1,1,1,1),(2,2,'Mandag 14-22, Tirsdag 14-00, Onsdag 14-00, Torsdag 14-00, Fredag 14-02, Lørdag 14-02 Søndag 14-22','$$',1,0,0,0,0),(3,3,'Mandag Lukket, Tirsdag 10-17, Onsdag 10-00, Torsdag 10-05, Fredag 10-05, Lørdag 10-05 Søndag Lukket','$$',1,0,0,0,0),(4,4,'Mandag 11-00, Tirsdag 11-00, Onsdag 11-00, Torsdag 11-00, Fredag 11-02, Lørdag 11-02 Søndag 11-00','$$',1,1,0,0,1),(5,5,'Mandag 16-00, Tirsdag 16-00, Onsdag 16-00, Torsdag 16-00, Fredag 16-02, Lørdag 16-02 Søndag Lukket','$$$',1,0,0,1,1),(6,6,'Mandag 12-02, Tirsdag 12-02, Onsdag 12-02, Torsdag 12-02, Fredag 12-02, Lørdag 12-02 Søndag 12-02','$$',1,1,0,1,1);
/*!40000 ALTER TABLE `bar_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bars`
--

DROP TABLE IF EXISTS `bars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bars` (
  `bar_id` int NOT NULL AUTO_INCREMENT,
  `bar_name` varchar(30) DEFAULT NULL,
  `bar_location` varchar(30) DEFAULT NULL,
  `bar_city` varchar(30) DEFAULT NULL,
  `bar_description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`bar_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bars`
--

LOCK TABLES `bars` WRITE;
/*!40000 ALTER TABLE `bars` DISABLE KEYS */;
INSERT INTO `bars` VALUES (1,'Chevys','Ndr. Frihavnsgade 95','Østerbro','Hyggelig bar med både pool og billiard, tæt på Nordhavn St.'),(2,'Kompasset Ølbar','Østerbrogade 103','Østerbro','Hyggelig bar med stort udvalg af specialøl'),(3,'Funke','Blegdamsvej 2','Nørrebro','Bar med levende musik, og gode tilbud.'),(4,'Cafe Stefanshus','Stefansgade 22','Østerbro','Afslppet bar der servere et stort udvalg af drikkevare, og mulighed for at spille pool og billiard.'),(5,'Cafe Dan Turell','Store Regnegade 3','København K','Cafe Dan Turrel er en af Københavns ældste franske cafeer. Baren præges af musik fra 70erne og 80erne'),(6,'Kenndys Irish Bar','Gl. Kongevej 23','Vesterbro','Autentisk irisk pub med god mulighed for at se live sport.');
/*!40000 ALTER TABLE `bars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `user_id` int NOT NULL,
  `bar_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`bar_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(60) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-16  9:17:28
