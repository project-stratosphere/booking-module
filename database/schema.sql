-- mysql -u root < server/schema.sql
DROP DATABASE IF EXISTS Booking;

CREATE DATABASE Booking;
USE Booking;
	
		
CREATE TABLE user (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE userListing (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL,
  user_id INTEGER NOT NULL,
  price_per_night INTEGER(5) NOT NULL,
  star_rating DECIMAL NOT NULL,
  cust_rev_num INTEGER(6) NOT NULL,
  min_stay INTEGER(2) NOT NULL,
  cleaning_fee INTEGER(3) NOT NULL,
  service_fee INTEGER(3) NOT NULL,
  max_guests SMALLINT NOT NULL,
  PRIMARY KEY (id)
);

		
CREATE TABLE occupied_dates (
  id INTEGER NOT NULL AUTO_INCREMENT,
  listing_id INTEGER NOT NULL,
  date DATE NOT NULL,
  PRIMARY KEY (id)
);



-- Foreign Keys 
ALTER TABLE userListing ADD FOREIGN KEY (user_id) REFERENCES user (id);
ALTER TABLE occupied_dates ADD FOREIGN KEY (listing_id) REFERENCES userListing (id);

-- INSERT INTO user (id,name) VALUES ('','');
-- INSERT INTO userListing (id,name,user_id,price_per_night,star_rating,cust_rev_num,min_stay,cleaning_fee,service_fee,max_guests) VALUES ('','','','','','','','','','');
-- INSERT INTO occupied_dates (id,listing_id,date) VALUES ('','','');

-- POPULATING USERS:


-- POPULATING USER LISTINGS:


-- POPULATING OCCUPIED DATES:
