# NFTBento

## Description

NFTBento is a real-time dashboard to discover the hottest NFT projects on OpenSea. We focus on providing real-time insights to NFT marketplace. We conducted extensive research to ensure no other publicly-available dashboards present the data the same we as we present them. Our approach is conducive to identifying rising-star NFT collections before the mass community does, by providing simple yet informative data visualization and analytics.

## How it's made

NFTBento display a combination of data plots and charts on a React-based web dashboard. The data source is mainly OpenSea's Marketplace API's. A golang backend service periodically collects the data from OpenSea's API's, and stores it into a PostgreSQL database. When the web app makes a request, a second golang service reads from the database, transforms, and returns the requested data. 
