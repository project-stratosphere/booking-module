-- mysql -u root < server/schema.sql
DROP DATABASE IF EXISTS `Booking`;

CREATE DATABASE `Booking`;
USE `Booking`;
	
CREATE TABLE `User_Listing` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `Name` VARCHAR(50) NOT NULL,
  `User` INTEGER NOT NULL,
  `Price_Per_Night` MEDIUMINT NOT NULL,
  `Star_Rating` SMALLINT NOT NULL,
  `Customer_Review_Num` SMALLINT NOT NULL,
  `Dates_Taken_ID` INTEGER NOT NULL,
  `Min_Stay` SMALLINT NOT NULL,
  `Cleaning_Fee` SMALLINT NOT NULL,
  `Service_Fee` SMALLINT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `Name` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`)
);
		
CREATE TABLE `Dates_Taken` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `Year` YEAR NOT NULL,
  `Date` DATE(370) NOT NULL,
  PRIMARY KEY (`id`)
);


--Foreign Keys 
ALTER TABLE `User_Listing` ADD FOREIGN KEY (User) REFERENCES `User` (`id`);
ALTER TABLE `User_Listing` ADD FOREIGN KEY (Dates_Taken_ID) REFERENCES `Dates_Taken` (`id`);


-- INSERT INTO `User Listing` (`id`,`Name`,`User`,`Price_Per_Night`,`Star_Rating`,`Customer_Review_Num`,`Dates_Taken_ID`,`Min_Stay`,`Cleaning_Fee`,`Service_Fee`) VALUES ('','','','','','','','','','');
-- INSERT INTO `User` (`id`,`Name`) VALUES ('','');
-- INSERT INTO `Dates Taken` (`id`,`Year`,`Date`) VALUES ('','','');