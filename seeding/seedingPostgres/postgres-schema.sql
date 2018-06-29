-- CREATE TABLE listings (
--   id BIGSERIAL PRIMARY KEY NOT NULL,
--   address VARCHAR(25) NOT NULL,
--   price_per_night SMALLINT NOT NULL,
--   star_rating SMALLINT NOT NULL,
--   min_stay SMALLINT NOT NULL,
--   cleaning_fee SMALLINT NOT NULL,
--   max_guests SMALLINT NOT NULL,
--   state VARCHAR(25) NOT NULL,
--   country VARCHAR(25) NOT NULL,
-- );
    
CREATE TABLE occupied_dates (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  listing_id INT NOT NULL,
  date DATE NOT NULL,
);

-- Foreign Keys 
-- ALTER TABLE userListing ADD FOREIGN KEY (user_id) REFERENCES user (id);
-- ALTER TABLE occupiedDates ADD FOREIGN KEY (listing_id) REFERENCES userListing (id);