# AirBnC: A Mock AirBnB Listings Page 
> This module is the bookings component of the AirBnB listings page.

## Related Projects

  - https://github.com/airBnC/calendar-module
  - https://github.com/airBnC/property-info-module
  - https://github.com/airBnC/reviews-module
  - https://github.com/airBnC/cat-proxy-server

## Table of Contents

1. [Description](#Description)
1. [Requirements](#Requirements)

## Description

> The booking module contains price per night, average rating, dynamic calendar, guest counter, and calculator. There are 100 listings that are accessible using localhost/rooms/:listingID, from 1 - 100. The calendar component within the module dynamically renders available dates based on start date clicked, and has a hover feature that keeps the background color highlighted from start date to potential end date. The guests counter disables infants at 5, and disables adults and children when the maximum number of guests is reached. The calculator is dynamically rendered when start and end dates are chosen.


## Requirements
### To Run This Module

From within the root directory:
make sure that mysql is running, and that the root user has no password.
run npm run deploy

