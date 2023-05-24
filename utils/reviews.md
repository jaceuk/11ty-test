# Need to get reviews as follows:

## latest reviews for each service for a town

/api/reviews/service-town/{service_id}/{town_id}

- get reviews matching service and town
- if there arent enough specific reviews then fill with the latest by service and county
- if there arent enough specific reviews then fill with the latest by service
- as a last resort if there arent enough specific reviews then fill with the latest
- remove duplicate reviews caused by the merge

## latest reviews for each service for a county

/api/reviews/service-county/{service_id}/{county_id}

- get reviews matching service and county
- if there arent enough specific reviews then fill with the latest by service
- as a last resort if there arent enough specific reviews then fill with the latest
- remove duplicate reviews caused by the merge

## latest reviews for each service

/api/reviews/service/{service_id}

- get reviews matching service
- if there arent enough specific reviews then fill with the latest
- remove duplicate reviews caused by the merge

## latest reviews for a county

/api/{website}/reviews/county/{county_id}

- get reviews matching county
- if there arent enough specific reviews then fill with the latest by county
- as a last resort if there arent enough specific reviews then fill with the latest
- remove duplicate reviews caused by the merge

## latest reviews

/api/{website}/reviews

- get latest reviews

reviews have:

service
town
title
date
text
