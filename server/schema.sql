DROP DATABASE IF EXISTS `Booking`;

CREATE DATABASE `Booking`;
USE `Booking`;

DROP TABLE IF EXISTS `User Listing`;
DROP TABLE IF EXISTS `User`;
DROP TABLE IF EXISTS `Dates Taken`;
		
CREATE TABLE `User Listing` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` VARCHAR(50) NULL DEFAULT NULL,
  `User` INTEGER NULL DEFAULT NULL,
  `Price_Per_Night` MEDIUMINT NULL DEFAULT NULL,
  `Star_Rating` SMALLINT NULL DEFAULT NULL,
  `Customer_Review_Num` SMALLINT NULL DEFAULT NULL,
  `Dates_Taken_ID` INTEGER NULL DEFAULT NULL,
  `Min_Stay` SMALLINT NULL DEFAULT NULL,
  `Cleaning_Fee` SMALLINT NULL DEFAULT NULL,
  `Service_Fee` SMALLINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` VARCHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);
		
CREATE TABLE `Dates Taken` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Year` INTEGER NULL DEFAULT NULL,
  `Date` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `User Listing` ADD FOREIGN KEY (User) REFERENCES `User` (`id`);
ALTER TABLE `User Listing` ADD FOREIGN KEY (Dates_Taken_ID) REFERENCES `Dates Taken` (`id`);

-- ---
-- Test Data
-- ---

-- INSERT INTO `User Listing` (`id`,`Name`,`User`,`Price_Per_Night`,`Star_Rating`,`Customer_Review_Num`,`Dates_Taken_ID`,`Min_Stay`,`Cleaning_Fee`,`Service_Fee`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `User` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `Dates Taken` (`id`,`Year`,`Date`) VALUES
-- ('','','');